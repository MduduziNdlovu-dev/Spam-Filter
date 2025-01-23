// variable intialization seciton 
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

// regular expressions
const helpRegex = /please help|assit me/i;
const dollarRegex = /[0-9]+ (hundred|thousand|million|billion)? dollars/i;
const denyList = [helpRegex,dollarRegex];


// ----------------------------------------------

// funtion section

const isSpam = (msg) => denyList.some((regex) => regex.test(msg));


checkMessageButton.addEventListener("click", () => {
    // check for message input being empty
    if(messageInput.value === ""){
        alert("Please enter a message.")
        return;
      }
    
    // will send messageInput to isSpam function and based on the function result will determine the message and reset of messageInput value
    result.textContent = isSpam(messageInput.value) ? "Oh no! THis looks like a spam message" : "This message does not seem to contain any spam";
    messageInput.value = ""; // the reset
    console.log(result)

})