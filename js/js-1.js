const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener("input",function(){
    output.textContent = salary.value;
});

const text = document.querySelector("#text");
const textError = document.querySelector(".text-error");
text.addEventListener("input",function(){
    let nameRegex = RegExp("^([A-Z]{1})([a-z]{2,})$");
    if(nameRegex.test(text.value))
        textError.textContent="";
    else textError.textContent = "Name is Incorrect";
})

const pwd = document.querySelector("#pwd");
const pwdError = document.querySelector(".pwd-error");
pwd.addEventListener("input",function(){
    let pwdRegex = RegExp("(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=[^.,:;'!@#$%^&*_+=|]*[.,:;'!@#$%^&*_+=|][^.,:;'!@#$%^&*_+=|]*$)[A-Za-z0-9.,:;'!@#$%^&*_+=|]{8,16}$");
    if(pwdRegex.test(pwd.value))
        pwdError.textContent="";
    else pwdError.textContent = "Password is Incorrect";
})

const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
email.addEventListener("input",function(){
    let emailRegex = RegExp("^(?!.*\\.{2})([a-zA-Z0-9]+)([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]?)([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)@([a-z A-Z]{2,20}).([a-z A-Z]{2,4})(.[a-z]{2,8})?$");
    if(emailRegex.test(email.value))
        emailError.textContent="";
    else emailError.textContent = "E-mail is Incorrect";
})

const tel = document.querySelector("#tel");
const telError = document.querySelector(".tel-error");
tel.addEventListener("input",function(){
    let telRegex = RegExp("^([0-9]{2})(\\s)([0-9]{10})$");
    if(telRegex.test(tel.value))
        telError.textContent="";
    else telError.textContent = "E-mail is Incorrect";
})