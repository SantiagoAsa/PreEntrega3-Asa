

document.addEventListener('DOMContentLoaded', function () {
    const btnInicio = document.getElementById('btnInicio');
    
    /*
    //const btnLoginUsuario = document.getElementById('btnLoginUsuario');
    const usuarioInexistente = document.getElementById('usuarioInexistente');
    let nombreUsuario = document.getElementById('username');
    let password = document.getElementById('password');
    let recuerdameCheckbox = document.getElementById('recuerdame');
    //let usuarioAlmacenado = localStorage.getItem('username');
    let usuarios = JSON.parse(localStorage.getItem('usuarios'))
    */

    btnInicio.addEventListener('click', () => {
        window.location.href = '../index.html';
    });


    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const valido = veterinaria.logearUsuario(username, password);
            if (valido) {
                console.log(veterinaria.listaDeUsuarios())
                const usuario = veterinaria.devolverUsuarioPorNombre(username);
                console.log(usuario);
                localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
               window.location.href = 'menu.html';
            } else {
                document.getElementById('usuarioInexistente').textContent = '* Usuario o contraseña incorrectos.';
            }
        });
    }
});

