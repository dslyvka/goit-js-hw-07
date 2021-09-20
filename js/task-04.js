let counter = 0;

const valueRef = document.querySelector("#value");
const decBtnRef = document.querySelector('[data-action="decrement"]');
const incBtnRef = document.querySelector('[data-action="increment"]');

const increment = () => {
  counter += 1;
  valueRef.textContent = counter;
};

const decrement = () => {
  counter -= 1;
  valueRef.textContent = counter;
};

decBtnRef.addEventListener("click", decrement);
incBtnRef.addEventListener("click", increment);
