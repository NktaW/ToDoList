let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let listItem = document.getElementsByTagName("li"); 



function inputLenght(){
	return input.value.length;
}

function createListElement(){
	let li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";

			let btn = document.createElement("button");
			btn.appendChild(document.createTextNode("Delete"));
			li.appendChild(btn);
			btn.onclick = removeParent;
}

function addListAfterClick() {
	if(inputLenght() > 0) {
		createListElement();
	}
}


function addListAfterKeypress(event){
	if(inputLenght() > 0 && event.keyCode === 13) {
		console.log("Click Works");
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


ul.onclick = function(event){
	let target=event.target;
	target.classList.toggle("done");
}

function listLength(){
	return listItem.length;
}

function deleteButton(){
	let btn = document.createElement("button");
btn.appendChild(document.createTextNode("Delete"));
listItem[i].appendChild(btn);
btn.onclick = removeParent;
}

for( i=0;i<listLength();i++){

deleteButton();
}

function removeParent(evt){
	evt.target.parentNode.remove();
}
