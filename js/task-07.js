const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');


spanRef.style.fontSize = `${inputRef.value}px`;


inputRef.addEventListener('input', () => {
  spanRef.style.fontSize = `${inputRef.value}px`  
});




