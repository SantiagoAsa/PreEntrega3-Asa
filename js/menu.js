//
//let usuario_logueado = JSON.parse(localStorage.getItem('usuarioLogueado'))
//console.log('b1')
//console.log(usuario_logueado)
//alert(`Bienvenido ${usuario_logueado.nombreCompleto}`)

document.addEventListener('DOMContentLoaded', function () {

    const btnVerUsuarios = document.getElementById('btnVerUsuarios');
    const containerVerUsuarios = document.getElementById('containerVerUsuarios');
    const btnBuscarUsuario = document.getElementById('btnBuscarUsuario');
    const containerBuscarUsuario = document.getElementById('containerBuscarUsuario');
    const btnRegistrarUsuario = document.getElementById('btnRegistrarUsuario');
    const btnVerMascotas = document.getElementById('btnVerMascotas');
    const containerVerMascotas = document.getElementById('containerVerMascotas')
    const btnBuscarMascota = document.getElementById('btnBuscarMascota');
    const btnRegistrarMascota = document.getElementById('btnRegistrarMascota');
    const btnSalir = document.getElementById('btnSalir');
    const form = document.getElementById('formBuscarUsuario');
    const buscarUser = document.getElementById('containerBuscarUsuario');
    const buscarMascota = document.getElementById('containerBuscarMascota');
    const formMascota = document.getElementById('formBuscarMascota');

    const welcomeMessage = document.getElementById('userData');
    if (welcomeMessage) {
        const usuarioEnMenu = JSON.parse(localStorage.getItem('usuarioLogueado'));
        if (usuarioEnMenu) {
            welcomeMessage.textContent = `Bienvenido, ${usuarioEnMenu.nombreCompleto}`;
        } else {
            window.location.href = 'login.html';
        }
    }


    // ~~~ VER USUARIOS REGISTRADOS ~~~ //
    btnVerUsuarios.addEventListener('click', () => {
        if (btnVerUsuarios.className === 'btnVerUsuariosOculto') {
            let templateMostrarUsuarios = document.getElementById('templateVerUsuarios').content.cloneNode(true);
            templateMostrarUsuarios.querySelector('.pVerUsuarios').innerText = `${veterinaria.listaDeUsuarios()}`;
            containerVerUsuarios.append(templateMostrarUsuarios);
            btnVerUsuarios.className = 'btnVerUsuarios';
        } else {
            containerVerUsuarios.innerHTML = '';
            btnVerUsuarios.className = 'btnVerUsuariosOculto';
        }
    });



    // ~~~ BUSCAR USUARIO REGISTRADO ~~~ //
    btnBuscarUsuario.addEventListener('click', () => {
        buscarUser.classList.toggle('hidden');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        console.log("b1")
        let buscarPersona = document.getElementById('name').value.toLowerCase();
        console.log("b2")
        let usuarioEncontrado = veterinaria.buscarUsuario(buscarPersona);
        console.log("b3")
        if (usuarioEncontrado) {
            let templateBuscarUsuario = document.getElementById('templateVerUsuario').content.cloneNode(true);
            templateBuscarUsuario.querySelector('.pBuscarUsuario').innerText = veterinaria.usuarioParaMostrar;
            document.getElementById('resultadoUsuario').appendChild(templateBuscarUsuario);
        } else {
            let templateBuscarUsuario = document.getElementById('templateVerUsuario').content.cloneNode(true);
            templateBuscarUsuario.querySelector('.pBuscarUsuario').innerText = veterinaria.usuarioParaMostrar;
            document.getElementById('resultadoUsuario').appendChild(templateBuscarUsuario);
        }
    });


    // ~~~ REGISTRAR USUARIO ~~~ //
    btnRegistrarUsuario.addEventListener('click', () => {
        window.location.href = './registroUsuario.html';
    });


    // ~~~ VER MASCOTAS REGISTRADAS ~~~ //
    btnVerMascotas.addEventListener('click', () => {
        if (btnVerMascotas.className === 'btnVerMascotasOculto') {
            let templateMostrarMascotas = document.getElementById('templateVerMascotas').content.cloneNode(true);
            templateMostrarMascotas.querySelector('.pVerMascotas').innerText = `${veterinaria.listaDeMascotas()}`;
            containerVerMascotas.append(templateMostrarMascotas);
            btnVerMascotas.className = 'btnVerMascotas';
        } else {
            containerVerMascotas.innerHTML = '';
            btnVerMascotas.className = 'btnVerMascotasOculto';
        }
    });


    // ~~~ BUSCAR MASCOTA ~~~ //
    btnBuscarMascota.addEventListener('click', () => {
        buscarMascota.classList.toggle('oculto');
    });

    formMascota.addEventListener('submit', (e) => {
        e.preventDefault();
        let buscarNombre = document.getElementById('nameMascota').value.toLowerCase();
        let buscarEspecie = document.getElementById('especieMascota').value.toLowerCase();
        let mascotaEncontrada = veterinaria.buscarMascota(buscarNombre, buscarEspecie);
        if (mascotaEncontrada) {
            let templateBuscarMascota = document.getElementById('templateBuscarMascota').content.cloneNode(true);
            templateBuscarMascota.querySelector('.pBuscarMascota').innerText += mascotaEncontrada.mostrarDatos() + '\n-------------------------------------\n';
            
            document.getElementById('resultadoMascota').appendChild(templateBuscarMascota);
        } else {
            let templateBuscarMascota = document.getElementById('templateBuscarMascota').content.cloneNode(true);
            templateBuscarMascota.querySelector('.pBuscarMascota').innerText = '* Mascota no encontrada\n-------------------------------------\n';
            
            document.getElementById('resultadoMascota').appendChild(templateBuscarMascota);
        }
    });

    // ~~~ REGISTRAR MASCOTA ~~~ //
    btnRegistrarMascota.addEventListener('click', () => {
        window.location.href = './registroMascota.html';
    });


    // ~~~ SALIR ~~~ //
    btnSalir.addEventListener('click', () => {
        let salir = confirm('¿Desea abandonar el sistema?');

        if (salir) {
            window.location.href = '../index.html';
        } else {

        }
    });
});

