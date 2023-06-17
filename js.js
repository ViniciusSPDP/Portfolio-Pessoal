//Teste texto digitado
var typed = new Typed('#element', {
    strings: ['Tecnólogias que comecei', 'estou aprimorando cada vez mais', 'Além de aprender novas tecnologias para ficar sempre atualizado'],
    typeSpeed: 50,
    startDelay: 1500,
    backDelay: 4700,
    loopCount: Infinity,
    loop: Infinity,
    showCursor: true,
    cursorChar: '|',
});

//Navbar Fixo
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.none')
    navbar.classList.toggle('mudarnav', window.scrollY > 650)
})

var validEmail = false;

//Validar email
function validarFormulario(event) {
    event.preventDefault();

    if (!validEmail) {
        alert("Email inválido!");
        return false;
    }

    return true;
}

function checkMail(){
    var email = document.getElementById("email").value;
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(regexEmail.test(email))


    if (!regexEmail.test(email)) {

        let btn = document.querySelector('#enviar')
        btn.setAttribute("disabled", "");
        btn.setAttribute("style", "background-color: gray;")
        validEmail = false;

    }else{
    let btn = document.querySelector('#enviar')
    btn.removeAttribute("disabled", "");
    btn.removeAttribute("style", "background-color: gray;")
    btn.setAttribute("style", "cursor: pointer;")
    validEmail = true;
}
}