const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");

const link = document.querySelector("a");

function handleLinkClick(event) {
    event.preventDefault();
     
}
function onLoginSumbit(event) {
    event.preventDefault();
const userName = loginInput.value;
console.log(event);
}

loginForm.addEventListener("submit", onLoginSumbit);
link.addEventListener("click", handleLinkClick);
