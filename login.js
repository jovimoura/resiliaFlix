let inputEmail = document.getElementById('inputEmail')
let error = document.getElementById('errorEmail')
let inputPassword = document.getElementById('inputPassword')
let btnResetPassword = document.getElementById('btnResetPassword')
let changePassword = document.getElementById('changePassword')


let btnPassword = document.getElementById('btnPassword')

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
    btnResetPassword.addEventListener('click', function (event) {
        event.preventDefault()
        if (changePassword) {
            changePassword.innerHTML = 'Link para alteração de senha enviado'
        }
    })
}