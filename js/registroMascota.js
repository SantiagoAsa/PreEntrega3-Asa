

document.addEventListener('DOMContentLoaded', function () {

    const btnMenu = document.getElementById('btnMenu');
    const mascotaForm = document.getElementById('mascotaForm');
    const btnSubmitMascota = document.getElementById('btnSubmitMascota');

    mascotaForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    btnSubmitMascota.addEventListener('click', () => {
        let nombreUsuario = document.getElementById('inputNombreTutor').value.toLowerCase();
        let especie = document.getElementById('inputEspecie').value;
        let raza = document.getElementById('inputRaza').value.toLowerCase();
        let sexo = document.getElementById('inputSexo').value;
        let nombre = document.getElementById('inputNombreMascota').value.toLowerCase();
        let edad = Number(document.getElementById('inputEdad').value);
        if (edad <= 0) {
            alert('Dato inválido');
        }
        let peso = Number(document.getElementById('inputPeso').value);
        if (peso <= 0) {
            alert('Dato inválido');
        }

        if(veterinaria.buscarUsuario(nombreUsuario)==true)
            {
                const usuarioEncontrado = veterinaria.devolverUsuarioPorNombreCompleto(nombreUsuario)
                usuarioEncontrado.registrarMascota(especie, raza, sexo, nombre, edad, peso)
                alert('Mascota registrada');
            }

    });


    btnMenu.addEventListener('click', () => {
        window.location.href = './menu.html';
    });

});