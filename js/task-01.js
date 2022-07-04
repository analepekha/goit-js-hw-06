const items = document.querySelectorAll('.item');
const countItems = items.length
console.log('Number of categories:', countItems);


items.forEach(function (item) {

    const nameOfCategory = item.firstElementChild.textContent
    console.log('Category:', nameOfCategory);
    const amountOfElements = item.lastElementChild.children.length
    console.log('Elements:', amountOfElements);
});
