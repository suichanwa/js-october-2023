class Counter {
    constructor(element, value) {
        this.counter = element;
        this.value = value;
        this.resetButton = element.querySelector('.reset');
        this.increaseButton = element.querySelector('.increase');
        this.decreaseButton = element.querySelector('.decrease');
        this.valueDOM = element.querySelector('.value');
        this.valueDOM.textContent = this.value;

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);

        this.increaseButton.addEventListener('click', this.increase);
        this.decreaseButton.addEventListener('click', this.decrease);
        this.resetButton.addEventListener('click', this.reset);
    }
    
    increase() {
        this.value++;
        this.valueDOM.textContent = this.value;
    }

    decrease() {
        this.value--;
        this.valueDOM.textContent = this.value;
    }

    reset() {
        this.value = 0;
        this.valueDOM.textContent = this.value;
    }
}

const firstCounter = new Counter(document.querySelector('.first-counter'), 0);
const secondCounter = new Counter(document.querySelector('.second-counter'), 0);
const thirdCounter = new Counter(document.querySelector('.third-counter'), 0);