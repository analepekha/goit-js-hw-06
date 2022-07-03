const counterValue = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
};

const btnDecrement = document.querySelector('[data-action=decrement]')
const btnIncrement = document.querySelector('[data-action=increment]')
const elValue = document.querySelector('#value')

const decrementClick = () => {
    counterValue.decrement()
    elValue.textContent = counterValue.value
}
btnDecrement.addEventListener('click', decrementClick)

const incrementClick = () => {
    counterValue.increment()
    elValue.textContent = counterValue.value
}
btnIncrement.addEventListener('click', incrementClick)

