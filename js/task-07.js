const inputRef = document.querySelector('#font-size-control');
const magicSpanTextRef = document.querySelector('#text');

inputRef.addEventListener('input', event => {
  magicSpanTextRef.style.fontSize = event.currentTarget.value + 'px';
});
