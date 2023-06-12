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

//Validar email
function validarFormulario(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        alert("Email inválido!");
        let btn = document.querySelector('#enviar')
        btn.setAttribute("disabled", "");
        btn.setAttribute("style", "background-color: gray;")
        return false;
    }

    let btn = document.querySelector('#enviar')
    btn.removeAttribute("disabled", "");
    btn.removeAttribute("style", "background-color: gray;")
    btn.setAttribute("style", "cursor: pointer;")
    return true;
}