//Outputing Strings to the console

let username = "Reshe"

let message  = "You Have tree new notifications"
let messageToUser = message + ", " + username + "!";
console.log(messageToUser);

//*** 

let name = "Assil.Reshe"

let greeting = "Hi, my Name is ";
let myGreeting= greeting + " " + name;
console.log(myGreeting);

// Strings vs Numbers:
//==> when the both meets, DStrings always win .
let points = 4;
let bns = "10";

let  total = points + bns;

console.log(total);// ==> 410


//grab paragraph from html and put it into a var to change it using js :

let welcomeEl = document.getElementById("welcome-el");
welcomeEl.innerText = myGreeting;
//adding emoji :
welcomeEl.innerText += " 👋";