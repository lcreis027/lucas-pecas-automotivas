const menuToggle = document.querySelector('.menu-toggle');
const listaMenu = document.querySelector('.lista-menu');

menuToggle.addEventListener('click', () => {
    listaMenu.classList.toggle('ativo');
});

document.querySelectorAll('.lista-menu a').forEach(link => {
    link.addEventListener('click', () => {
        listaMenu.classList.remove('ativo');
    });
});

$(document).ready(function(){
    $('.card-produto').hover(
        function(){
            $(this).css({
                'transform': 'scale(1.06)',
                'box-shadow': '0 6px 16px rgba(0,0,0,0.15)'
            });
        },
        function(){
            $(this).css({
                'transform': 'scale(1)',
                'box-shadow': '0 2px 8px rgba(0,0,0,0.1)'
            });
        }
    );

    $('.card-diferencial, .card-produto').hide().fadeIn(800);
});

const formContato = document.getElementById('form-contato');
if (formContato) {
    formContato.addEventListener('submit', function(e){
        e.preventDefault();
        let formValido = true;

        const nome = document.getElementById('nome').value.trim();
        const erroNome = document.getElementById('erro-nome');
        if (nome === '') {
            erroNome.textContent = 'Por favor, digite seu nome completo.';
            erroNome.style.display = 'block';
            formValido = false;
        } else {
            erroNome.style.display = 'none';
        }

        const email = document.getElementById('email').value.trim();
        const erroEmail = document.getElementById('erro-email');
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            erroEmail.textContent = 'Digite um e-mail válido (ex: nome@dominio.com).';
            erroEmail.style.display = 'block';
            formValido = false;
        } else {
            erroEmail.style.display = 'none';
        }

        const telefone = document.getElementById('telefone').value.trim();
        const erroTelefone = document.getElementById('erro-telefone');
        const regexTel = /^\d{10,11}$/;
        if (!regexTel.test(telefone.replace(/\D/g, ''))) {
            erroTelefone.textContent = 'Digite um telefone válido com DDD (apenas números).';
            erroTelefone.style.display = 'block';
            formValido = false;
        } else {
            erroTelefone.style.display = 'none';
        }

        const mensagem = document.getElementById('mensagem').value.trim();
        const erroMensagem = document.getElementById('erro-mensagem');
        if (mensagem === '') {
            erroMensagem.textContent = 'Descreva o que você precisa ou qual peça procura.';
            erroMensagem.style.display = 'block';
            formValido = false;
        } else {
            erroMensagem.style.display = 'none';
        }

        if (formValido) {
            alert('✅ Mensagem enviada com sucesso! Entraremos em contato em até 24h.');
            formContato.reset();
        }
    });
}