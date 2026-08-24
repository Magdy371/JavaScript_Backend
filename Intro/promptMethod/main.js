
/*
 *Prompt:You'll often see it used in cases where the webpage needs a piece of information 
 *from the user, such as a name or some other form of text input.
*/

/**
 * The prompt() method takes two arguments: 
 * The first one is the message which will appear inside the dialog box, 
 * typically prompting the user to enter information. 
 * And the second one is a default value which is optional and will fill the input field initially.
*/
const btn = document.getElementById("propmt-btn");
const output = document.getElementById("output");
btn.addEventListener("click",()=>{
    const userName = prompt("What is your name","Guest");
    if(userName !== null){
        output.textContent = `Hello ${userName}`;
    }
});