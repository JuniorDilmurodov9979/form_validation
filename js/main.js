const elForm = document.querySelector('.form');
const elInputName = document.querySelector('.form__name');
const elFormMobile = document.querySelector('.form__mobile');
const elFormEmail = document.querySelector('.form__email');
const elFormTextarea = document.querySelector('.form__textarea');

elForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    
    const nameValue = elInputName.value.trim();
    const emailValue = elFormEmail.value.trim();
    const textareaValue = elFormTextarea.value.trim();
    const mobileValue = elFormMobile.value.trim();
    
    if(nameValue.length < 2 || nameValue.length > 30) {
        alert('Name Invalid');
        return;
    }
    if(mobileValue.length != 13) {
        alert("Xato raqam kiritdingiz");
        return;
    }
    if(!mobileValue.startsWith('+998')) {
        alert("Xato raqam kiritdingiz");
        return;
    }
    if(isNaN(mobileValue)) {
        alert("Xato raqam kiritdingiz");
        return;
    }
    if(!emailValue.endsWith('@gmail.com')) {
        alert('Email ni tugri kirdizing');
        return;
    }
    if(emailValue != emailValue.toLowerCase()) {
        alert('Email ni kichkina harflarda yozing');
        return;
    }
    if(textareaValue.length < 5 || textareaValue.length > 50) {
        alert('Faqat message ga 5 tadan 50 tagacha harf kiritish mumkin!');
        return;
    }
})