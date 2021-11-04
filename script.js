"use strict";


// 🍀keyboard - const
const keyboardBtn  = document.querySelector('.keyboard-btn');

// login
const keyboardLogin = document.querySelector('.keyboard-login');
const loginDisplay = document.querySelector('.display-login');
const loginEnterKey = document.querySelector('.keyboard-login .enter');
const loginCloseKey = document.querySelector('.keyboard-login .close');



// 🍀js1004-40. keyboard-login : open

// loginDisplay.value = "";
// keyboardDisplay.value = "";

// 🍀 keyboard-login : close 
loginCloseKey.addEventListener('click',()=>{
	keyboardLogin.classList.remove('change');
});

// 🍀 keyboard-login : Enter - cashier number & open keyboardContainer

loginEnterKey.addEventListener('click',()=>{

	// cashier_number
	if ( loginDisplay.value == cashier_number) {		
		keyboardPassword.classList.add('change');	
		
		cashierElem.textContent = `CASHIER ${cashier_number}`;

		
		worldRight_btnContainer.style.display="grid"
		// 🍉js1025. 
		page1DiscountBtn.style.display =`block`; 
		page1CancelBtn.style.display =`block`; 
		logoutBtn.style.display=`block`;
		
	} 

	//cashier_number20 - hide 'discount'btn, 'Cancel transaction'btn
	else if ( loginDisplay.value == cashier_number20) {		
		keyboardPassword.classList.add('change');	
		
		cashierElem.textContent = `CASHIER ${cashier_number20}`;
		
		worldRight_btnContainer.style.display="grid"
		// 🍉js1025. "item discount"btn, "cancle transaction" : display:none 	
		page1DiscountBtn.style.display =`none`; 
		page1CancelBtn.style.display =`none`; 
		logoutBtn.style.display=`none`;

	} else {	
		console.log(`wrong number`)
		loginDisplay.value = "";
	}
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
