let nameEl = document.getElementById('inputName');
let passwordEl = document.getElementById('inputPassword');
let emailEl = document.getElementById('inputEmail');
let viewEl = document.getElementById('view');

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
function validateName(name){
    for (let i = 0; i < name.length; i++){

    }
}