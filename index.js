let count =0;

document.getElementById("output").innerText  = count;

function increment()
{
	console.log("the increment button was clicked");
	count += 1;
	document.getElementById("output").innerText  = count;
}
//get the para by his id and change it
let saveEl  = document.getElementById("para");
function save() {
	let countStr = count + " - ";
	console.log("the save button was clicked");
	console.log(count);
	// saveEl.innerText += " " + countStr;
	saveEl.textContent += countStr;
}
//Note : innerText and textContent do the same work but textContent is better
//cuz As a best practice, it is recommended to use textContent instead of innerText since textContent follows the DOM specification and provides a more consistent behavior across different browsers.