console.log("дополнительно сделал проверку на ввод пробелов вместо строки"); 

const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

nameInputRef.addEventListener("input", (event) => {
  if (event.currentTarget.value.replace(/\s/g, "") == "")
    event.currentTarget.value = "";
  if (event.currentTarget.value !== "")
    nameOutputRef.textContent = event.currentTarget.value;
  else nameOutputRef.textContent = "незнакомец";
});