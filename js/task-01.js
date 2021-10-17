const list = document.querySelectorAll('.item');
const scroll = document.querySelector('#categories')

console.log(`Number of categories: ${scroll.children.length}`);



list.forEach(li => {
    console.log(`Category: ${li.firstElementChild.textContent}`);
    console.log(`Elements: ${li.lastElementChild.children.length}`);
})

