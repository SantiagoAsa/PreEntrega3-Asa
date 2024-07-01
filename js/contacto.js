document.addEventListener('DOMContentLoaded', function () {

    const btnEnviarContacto = document.getElementById('btnEnviarContacto');
    const btnInicio = document.getElementById('btnInicio');

    btnEnviarContacto.addEventListener('submit', (e)=> {
        e.preventDefault();
    });

    btnEnviarContacto.addEventListener('click', ()=> {
        const textoMensaje = document.getElementById('mensaje').value;
        veterinaria.mandarMensaje(textoMensaje);
    });

    btnInicio.addEventListener('click', ()=> {
        window.location.href = '../index.html';
    });

});