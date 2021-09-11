let inputEmail = document.getElementById('inputEmail')
let error = document.getElementById('errorEmail')
let btnPassword = document.getElementById('btnPassword')
let inputPassword = document.getElementById('inputPassword')
let btnResetPassword = document.getElementById('btnResetPassword')
let changePassword = document.getElementById('changePassword')

inputEmail.addEventListener('blur', function () {
    let re = /\S+@\S+\.\S+/

    if (inputEmail != '') {
        if (re.test(inputEmail.value) == false) {
            error.innerHTML = 'E-mail incorreto'
        }
        else {
            error.innerHTML = 'E-mail válido'
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
            btnPassword.innerHTML = 'Ocultar'
        } else {
            inputPassword.setAttribute('type', 'password')
            btnPassword.innerHTML = 'Exibir'
        }

    })
}

if (btnResetPassword) {
    btnResetPassword.addEventListener('click', function (event) {
        event.preventDefault()
        if (changePassword) {
            changePassword.innerHTML = 'Link para alteração de senha enviado'
        }
    })
}