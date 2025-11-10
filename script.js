
const botonLeerMas = document.getElementById('btn-leer-mas');
const cvCompleto = document.getElementById('cv-completo');

const formularioContacto = document.getElementById("formulario-contacto");
const datosCargadosBody = document.getElementById("datos-cargados-body");

if (botonLeerMas && cvCompleto) {
    function alternarVisibilidadCV() {
        if (cvCompleto.style.display === 'none' || cvCompleto.style.display === '') {
            cvCompleto.style.display = 'block'; 
            botonLeerMas.textContent = 'Mostrar menos';
        } else {
            cvCompleto.style.display = 'none';
            botonLeerMas.textContent = 'Leer más';
        }
    }

    botonLeerMas.addEventListener('click', alternarVisibilidadCV);
}


if (formularioContacto && datosCargadosBody) {
    

    formularioContacto.addEventListener("input", () => {
        
        const filas = datosCargadosBody.querySelectorAll("tr");

        filas[0].children[1].textContent = formularioContacto.nombre.value;        
        filas[1].children[1].textContent = formularioContacto.apellido.value;      
        filas[2].children[1].textContent = formularioContacto.email.value;         
        filas[3].children[1].textContent = formularioContacto.telefono.value;      
        filas[4].children[1].textContent = formularioContacto.edad.value;          
        filas[5].children[1].textContent = formularioContacto.direccion.value;     
        filas[6].children[1].textContent = formularioContacto.provincia.value;     
        filas[7].children[1].textContent = formularioContacto.codigo_postal.value; 
        
        const metodo = formularioContacto.querySelector('input[name="metodo_contacto"]:checked');
        
        if (metodo) {
            filas[8].children[1].textContent = metodo.parentElement.textContent.trim();
        } else {
            filas[8].children[1].textContent = "";
        }
        
        const suscripciones = Array.from(
            formularioContacto.querySelectorAll('input[name="suscripcion[]"]:checked')
        )
            .map((chk) => chk.parentElement.textContent.trim())
  
            .join(", ");
        
        filas[9].children[1].textContent = suscripciones;
    });

    formularioContacto.dispatchEvent(new Event('input'));
}
