const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),

}

console.log(refs);

refs.input.addEventListener('input', inputName)

function inputName(event) {
    if (event.currentTarget.value === '') {
        refs.span.textContent = 'Anonymous'
    } else { refs.span.textContent = event.currentTarget.value }
      
}


