// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];
let numeroAleatorio ;
let nombre = '';
let listaAmigos = document.querySelector('#listaAmigos');
let sorteo = document.querySelector('#resultado'); 


function agregarAmigo() {
    nombre = document.getElementById('amigo').value.trim().toLowerCase(); // Convertimos a minúsculas

    if (nombre === '') {
        alert('El campo está vacío');
        return;
    }

    for (let i = 0; i < nombresAmigos.length; i++) {
        if (nombresAmigos[i] === nombre) { // Comparamos en minúsculas
            alert('El nombre ya existe');
            limpiarCaja();
            return;
        }
    } 

    nombresAmigos.push(nombre); // Agregamos el nombre en minúsculas
    console.log(nombresAmigos);

    let elemento = document.createElement('li');
    elemento.textContent = nombre;
    listaAmigos.appendChild(elemento);
    sorteo.innerHTML = '';

    limpiarCaja();
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = "";
    return;

}

function sortearAmigo() {
    if(nombresAmigos.length <= 1) {
        alert(`${(nombresAmigos.length == 1) ? 'Agrega una persona mas' : 'Agrega el nombre de minimo dos participantes'}`);
    } else {
            
            
            listaAmigos.innerHTML = '';
            numeroAleatorio = generarNumeroAleatorio();
            console.log(numeroAleatorio);
            console.log(nombresAmigos[numeroAleatorio]);
            console.log(nombresAmigos.length);
            sorteo.innerHTML = `El Amigo Secreto es: ${nombresAmigos[numeroAleatorio]}`;
            nombresAmigos= []; 
        }
        console.log(nombresAmigos);
    return; 
}


function generarNumeroAleatorio() {
    return Math.floor(Math.random() * nombresAmigos.length);
}

