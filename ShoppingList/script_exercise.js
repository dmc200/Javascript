var li = document.getElementsByTagName('li'); 

var button = document.getElementById("enter");

var input = document.getElementById("userinput");

var ul =  document.querySelector("ul");


function toggle() {
	this.classList.toggle('done'); 
}

function removeListItem() {
	this.parentNode.removeChild(this);
}


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var but = document.createElement("button");
	but.innerHTML = "delete";
	li.appendChild(but);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
		if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
		if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

for (var i = 0; i < li.length; i++) {
	li[i].addEventListener('click', toggle);
}

button.addEventListener("click", addListAfterClick)


input.addEventListener("keypress", addListAfterKeypress)