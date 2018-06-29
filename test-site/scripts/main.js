
//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/firefox.png') {
		myImage.setAttribute('src', 'images/firefox2.png');
	} else {
		myImage.setAttribute('src', 'images/firefox.png');
	}
}

var myButton = document.querySelector('button');
myButton.onclick = function() {
	setUserName();
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storeName;
}

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	var myHeading = document.querySelector('h1');
	myHeading.textContent = 'Mozilla is cool, ' + myName;
}















		