let count =0;

document.getElementById("output").innerText  = count;

function increment()
{
	console.log("the increment button was clicked");
	count += 1;
	document.getElementById("output").innerText  = count;
}
//let message = "Previous entries: ";
// Create a new paragraph element
// var newParagraph = document.createElement("p");
// newParagraph.textContent = "Previous entries: ";
// function save() {
// 	console.log("the save button was clicked");
// 	console.log(count);
// 	newParagraph.textContent += count + "-";
// 	//document.getElementById("save-btn").innerText = message + count + "-";
// }

let saveEl = count + "-";
function save() {
	let saveEl = count + "-";
	console.log("the save button was clicked");
	console.log(count);
	document.getElementById("para").innerText +=saveEl;
}