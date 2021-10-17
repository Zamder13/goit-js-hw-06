 let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action = "decrement"]');
const btnIncrement = document.querySelector('button[data-action = "increment"]');
const spanValue = document.querySelector('#value');


const upClick = () => {
    counterValue += 1;
    spanValue.textContent = counterValue;
}

const downClick = () => {
    counterValue -= 1;
    spanValue.textContent = counterValue;
} 

btnDecrement.addEventListener('click', downClick)
btnIncrement.addEventListener('click', upClick)






