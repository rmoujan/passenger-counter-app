let count = 0; 
document.getElementById("output").innerText  = count;

function increment()
{
	console.log("the button was clicked");
	count = count + 1;
	document.getElementById("output").innerText  = count;
}
