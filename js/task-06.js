const inputRef = document.querySelector('#validation-input');
console.log(inputRef);


inputRef.addEventListener('blur', (evt) => {
    if (evt.target.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.replace('invalid', 'valid')
    } else {
        inputRef.classList.add('valid', 'invalid')
        
    }

})