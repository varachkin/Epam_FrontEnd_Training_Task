let nameEl = document.getElementById('inputName');
let passwordEl = document.getElementById('inputPassword');
let emailEl = document.getElementById('inputEmail');
let viewEl = document.getElementById('view');
let submitEl = document.getElementById('submit');
let nameError = document.getElementsByClassName('erName');
let passwordError = document.getElementsByClassName('erPassword');
let emailError = document.getElementsByClassName('erEmail');

viewEl.addEventListener("click", showPassword);

function showPassword(){
    if (passwordEl.type === 'password'){
        viewEl.innerHTML = 'visibility_off';
        passwordEl.type = 'text';
    }else{
        viewEl.innerHTML = 'visibility';
        passwordEl.type = 'password';
    }
}
function validateNull(even) {
    even.preventDefault();
    if (!nameEl.value){
        nameEl.style.border = "1 solid red";
        nameError.style.opacity = "1";
        // alert('no value entered Name');
    }
    if (!passwordEl.value){
        passwordEl.style.border = "1 solid red";
        passwordError.style.opacity = "1";
        // alert('no value entered Password')
    }
    if (!emailEl.value){
        emailEl.style.border = "1 solid red";
        emailError.style.opacity = "1";
        // alert('no value entered E-mail')
    }
}
submitEl.addEventListener("click", validateNull);