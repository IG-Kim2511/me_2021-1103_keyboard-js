"use strict";


// 🍀keyboard - const
const title = document.querySelector('.title');


const keyboardBtn  = document.querySelector('.keyboard-btn');

// login
const keyboardLogin = document.querySelector('.keyboard-login');
const loginDisplay = document.querySelector('.display-login');
const loginEnterKey = document.querySelector('.keyboard-login .enter');
const loginCloseKey = document.querySelector('.keyboard-login .close');



// 🍀js1004-40. keyboard-login : open



// 🍀 keyboard-login : close 
loginCloseKey.addEventListener('click',()=>{
    loginDisplay.value = "";
});

// 🍀 keyboard-login : Enter - cashier number & open keyboardContainer

loginEnterKey.addEventListener('click',()=>{

    title.innerHTML = loginDisplay.value;
    
    loginDisplay.value = "";
});



//keyboard - event bubbling

keyboardLogin.addEventListener('click',(e)=>{
	
	console.log(loginDisplay.value);

	if (e.target.classList.contains('key_1')) {
		let valu = loginDisplay.value;
		loginDisplay.value=valu+'1';
	}
	if (e.target.classList.contains('key_2')) {		
		let valu = loginDisplay.value;
		loginDisplay.value=valu+'2';
	}
	if (e.target.classList.contains('key_3')) {		
		let valu = loginDisplay.value;
		loginDisplay.value=valu+'3';
	}
	if (e.target.classList.contains('key_4')) {
		let valu = loginDisplay.value;
		loginDisplay.value=valu+'4';
	}
	if (e.target.classList.contains('key_5')) {
		let valu = loginDisplay.value;
		loginDisplay.value=valu+'5';
	}
	if (e.target.classList.contains('key_6')) {
		let valu = loginDisplay.value;
		loginDisplay.value=valu+'6';
	}
	if (e.target.classList.contains('key_7')) {
		let valu = loginDisplay.value;
		loginDisplay.value=valu+'7';
	}
	if (e.target.classList.contains('key_8')) {
		let valu = loginDisplay.value;
		loginDisplay.value=valu+'8';
	}
	if (e.target.classList.contains('key_9')) {
		let valu = loginDisplay.value;
		loginDisplay.value=valu+'9';
	}
	if (e.target.classList.contains('key_0')) {		
		let valu = loginDisplay.value;
		loginDisplay.value=valu+'0';
	}
});
