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

window.addEventListener('scroll', function(){
    var navbar = document.querySelector('.none')
    navbar.classList.toggle('mudarnav', window.scrollY > 650)
})