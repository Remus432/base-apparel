const btn = document.querySelector("button");
const email = document.querySelector("input");
const inputGroup = document.querySelector(".main__input-group");
const message = document.querySelector(".message");
const regEx = /\S+@\S+\.\S+/;

btn.addEventListener("click", checkInput);

function checkInput() {
  console.log(regEx.test(email.value));
  if (email.value === "") {
    addWarning("Please add an email");
  } else {
    if (!regEx.test(email.value)) {
      addWarning("Enter a valid email");
    }
  }
}

function addWarning(msg) {
  console.log(msg);
  message.textContent = msg;
  message.classList.replace("hidden", "active");
  inputGroup.classList.add("warning");
  setTimeout(() => {
    message.classList.replace("active", "hidden");
    inputGroup.classList.remove("warning");
  }, 2000);
}