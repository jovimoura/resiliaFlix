let inputEmail = document.getElementById('inputEmail')
let error = document.getElementById('errorEmail')
let inputPassword = document.getElementById('inputPassword')
let btnResetPassword = document.getElementById('btnResetPassword')
let changePassword = document.getElementById('changePassword')
let btnPassword = document.getElementById('btnPassword')
let btnPass = document.querySelector('.btn-primary');

/*function trocaPagina(pagina){
    
    window.location.href = '../home/home.html';
}

btnPass.onclick = (event)=>{
    event.preventDefault();
    console.log('botao')
    let re = /\S+@\S+\.\S+/

    if(inputEmail.value!=''&&inputPassword.value!=''){
        trocaPagina('./forgot-password.html')
    }else {
        alert('Usuário ou senha inválidos!')
    }
}*/

inputEmail.addEventListener('blur', function () {
    let re = /\S+@\S+\.\S+/
    if (inputEmail != '') {
        if (re.test(inputEmail.value) == false) {
            error.setAttribute('class', 'fas fa-times')
        }
        else {
            error.setAttribute('class', 'fas fa-check')
        }
    }
})

inputEmail.addEventListener('focus', function () {
    if (error.innerHTML == 'E-mail incorreto') {
        error.innerHTML = ''
    }
})

if (btnPassword) {
    btnPassword.addEventListener('click', function (event) {
        event.preventDefault()

        if (inputPassword.getAttribute('type') == 'password') {
            inputPassword.setAttribute('type', 'text')
            btnPassword.setAttribute('class', 'fas fa-eye-slash')
        } else {
            inputPassword.setAttribute('type', 'password')
            btnPassword.setAttribute('class', 'fas fa-eye')
        }
    })
}

if (btnResetPassword) {
    inputEmail.setAttribute('required')
    btnResetPassword.addEventListener('click', function (event) {
        event.preventDefault()
        if (changePassword) {
            changePassword.innerHTML = 'Link para alteração de senha enviado'
        }
    })
}