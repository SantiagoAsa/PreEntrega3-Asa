class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    const usuario = new Usuario(nombre, email);
    sessionStorage.setItem('usuario', JSON.stringify(usuario));

    alert('Usuario guardado en sessionStorage');
});

document.getElementById('loadUser').addEventListener('click', function() {
    const usuarioData = sessionStorage.getItem('usuario');
    if (usuarioData) {
        const usuario = JSON.parse(usuarioData);
        document.getElementById('userData').innerHTML = `
            <p>Nombre: ${usuario.nombre}</p>
            <p>Email: ${usuario.email}</p>
        `;
    } else {
        alert('No hay usuario guardado en sessionStorage');
    }
});
