const enter = document.getElementById("enter");
let email = document.getElementById("email");
let password = document.getElementById("password");
let textForm = document.getElementById("textForm");
enter.addEventListener("click", (event) => {
  if (email.value == "" && password.value == "") {
    textForm.textContent = "Por favor, preencha os campos!";
  } else {
    console.log(email.value);
    console.log(password.value);
  };
  event.preventDefault();
});

email.addEventListener("keyup", () => {
    if(validatorEmail(email.value) !== true){
        let textEmail = document.getElementById("textEmail");
        textEmail.textContent = "seu email deve estar incorreto! example@email.com"
    }else {
        textEmail.textContent = ""
    }
})
function validatorEmail(email){
    let emailPattern = "^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}"
    + "\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\"
    + ".)+))([a-zA-Z]{2,4}|[0,9]{1,3})(\\]?)$";
    let result = emailPattern.test(email);
    return result;
}