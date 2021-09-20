const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('div input');
const controlsRef = document.querySelector('#controls');
const createBoxesBtnRef = document.querySelector('[data-action="render"]');
const destroyBoxesBtnRef = document.querySelector('[data-action="destroy"]');

controlsRef.style.marginBottom = 10 + 'px';
boxesRef.style.display = 'flex';

console.log(boxesRef);

const createBoxes = amount => {
  if (amount > parseInt(inputRef.getAttribute('max')))
    return console.log(`Enter a number <= ${inputRef.getAttribute('max')}`);
  if (amount < parseInt(inputRef.getAttribute('min')))
    return console.log(`Enter a number >= ${inputRef.getAttribute('min')}`);

  let boxes = '';
  for (let i = 1; i <= amount; i++) {
    boxes += `<div class='box-${i}' style='width: ${i * 10 + 20}px; height: ${
      i * 10 + 20
    }px; background-color: #${Math.floor(Math.random() * 16777215).toString(
      16,
    )}; margin-right: 10px; border: solid;'></div>`;
  }
  return boxesRef.insertAdjacentHTML('beforeend', boxes);
};

createBoxesBtnRef.addEventListener('click', () => {
  boxesRef.innerHTML = '';
  createBoxes(inputRef.value);
});

destroyBoxesBtnRef.addEventListener('click', () => {
  boxesRef.innerHTML = '';
  inputRef.value = 0;
});
