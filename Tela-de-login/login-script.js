const SubmitButton = document.querySelector(".btn");
const NameInput = document.querySelector("#user-name");
const EmailInput = document.querySelector("#user-password");
const HeaderName = document.querySelector(".header-name");
const items = document.querySelector(".items");
const ErrorMessage = document.querySelector(".msg");

console.log(items);

SubmitButton.addEventListener("click", function(event) {
    event.preventDefault();

    const NameValue = NameInput.value;
    const EmailValue = EmailInput.value;

    ErrorMessage.textContent = "";
    ErrorMessage.classList = "";

    if (NameValue === "" || EmailValue === "") {
        ErrorMessage.textContent = "Please fill out the fields!";
        ErrorMessage.classList = "error";
        return;
    } else if (NameValue === "Username" && EmailValue === "Senha") {
        window.location.href = "/PaginaInicial/PaginaInicial.html";
    } else {
        ErrorMessage.textContent = "Wrong password or username!";
        ErrorMessage.classList = "error";
        return;
    }
});