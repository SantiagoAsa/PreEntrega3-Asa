

document.addEventListener('DOMContentLoaded', function () {

    const btnRegistroNuevoUsuario = document.getElementById('btnRegistroNuevoUsuario');
    const btnInicio = document.getElementById('btnInicio');
    let form = document.querySelector('.registroForm');
    const terminos = document.getElementById('terminos');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    btnRegistroNuevoUsuario.addEventListener('click', () => {
        let nombreCompleto = document.getElementById('inputNombreCompleto').value.toLowerCase();
        let correoElectronico = document.getElementById('inputMail').value.toLowerCase();
        let nombreUsuario = document.getElementById('inputNuevoUsuario').value;
        let password = document.getElementById('inputPassword').value;
        let aceptarTerminos = document.getElementById('aceptarTerminos');
        if (nombreCompleto && correoElectronico && nombreUsuario && password) {
            if (aceptarTerminos.checked) {
                veterinaria.registrarUsuario(nombreCompleto, correoElectronico, nombreUsuario, password);

                alert('Usuario creado exitosamente');
                console.log(veterinaria.listaDeUsuarios())
            } else {
                alert('Debe aceptar términos y condiciones');
            }
        }
        else {
            alert('Debe rellenar TODOS los campos');
        }
    });

    terminosCondiciones.addEventListener('click', () => {
        const mensajeTermCond = document.createElement('p');
        mensajeTermCond.textContent = 'Acepta recibir de vez en cuando nuestros mensajes y materiales de promoción, por correo postal, correo electrónico o cualquier otro formulario de contacto que nos proporcione (incluido su número de teléfono para llamadas o mensajes de texto). Si no deseas recibir dichos materiales o avisos de promociones, simplemente avísanos en cualquier momento.';
        mensajeTermCond.classList.add('pTermCond');
        terminos.innerHTML = '';
        terminos.appendChild(mensajeTermCond);
    });


    btnInicio.addEventListener('click', () => {
        window.location.href = '../index.html';
    });

});