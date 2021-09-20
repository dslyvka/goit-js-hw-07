const inputRef = document.querySelector("#validation-input");

console.log(inputRef);

inputRef.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length !== parseInt(inputRef.dataset.length)) {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  } else {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
  console.log(event.currentTarget.value.length);
});
