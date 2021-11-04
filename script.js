"use strict";


// 🍀js1004-40. keyboard-login : open

keyboardBtn.addEventListener('click',()=>{
	keyboardLogin.classList.add('change');	
	loginDisplay.value = "";
	keyboardDisplay.value = "";
});

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