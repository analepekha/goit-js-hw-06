const list = document.querySelector("#categories").children.length
console.log('Number of categories:', list);

const nameFirstCategory = document.querySelector("#categories").firstElementChild.firstElementChild.textContent
console.log('Category:', nameFirstCategory);
const amountFirstCategory = document.querySelector("#categories").firstElementChild.lastElementChild.children.length
console.log('Elements:', amountFirstCategory);

const nameSecondCategory = document.querySelector("#categories").firstElementChild.nextElementSibling.firstElementChild.textContent
console.log('Category:', nameSecondCategory);
const amountSecondCategory = document.querySelector("#categories").firstElementChild.nextElementSibling.lastElementChild.children.length
console.log('Elements:', amountSecondCategory);

const nameThirdCategory = document.querySelector("#categories").lastElementChild.firstElementChild.textContent
console.log('Category:', nameThirdCategory);
const amountThirdCategory = document.querySelector("#categories").lastElementChild.lastElementChild.children.length
console.log('Elements:', amountThirdCategory);