"use strict";
const id = (id) => document.getElementById(id);
const classes = (classes) => document.getElementsByClassName(classes);

const username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon"),
  button = id("submit");

console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInput(username, 0, "Username cannot be blank");
  checkInput(email, 1, "Email cannot be blank");
  checkInput(password, 2, "Password cannot be blank");
});

let checkInput = (inputElement, index, message) => {
  if (inputElement.value.trim() === "") {
    errorMsg[index].innerText = message;
    inputElement.style.border = "2px solid red";

    failureIcon[index].style.opacity = "1";
    successIcon[index].style.opacity = "0";
  } else {
    errorMsg[index].innerText = "";
    inputElement.style.border = "2px solid green";

    failureIcon[index].style.opacity = "0";
    successIcon[index].style.opacity = "1";
    //  inputElement.value = null;
  }
};
console.log(eyeIcon[0]);

username.value = localStorage.getItem("username");
//getitem gets data from local storage
username.oninput = () => {
  localStorage.setItem("username", username.value);

  //setitem(key, value) --it has 2 parameters: key and value
  //sends key and value to local storage
};

email.value = localStorage.getItem("email");
console.log(email.value);
email.oninput = () => {
  localStorage.setItem("email", email.value);
};

password.value = localStorage.getItem("password");
//it will get password value

password.oninput = () => {
  localStorage.setItem("password", password.value);
  localStorage.removeItem("password", email.value);
  //then it removes the data from local storage
};
