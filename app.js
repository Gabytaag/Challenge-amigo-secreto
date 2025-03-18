// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/* 
Amigo secreto
En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".
El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.
Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página. */

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    // Verificamos que la entrada (lo que ingresa el usuario no esté vacío)
    if (!nombre) {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Creo el elemento de lista y agrego al DOM 
    let listaAmigos = document.getElementById('listaAmigos');
    let nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombre;
    listaAmigos.appendChild(nuevoAmigo);

    input.value = ''; // Limpia campo cuando agrego nombre
}

function sortearAmigo() {
    let listaAmigos = document.getElementById('listaAmigos');
    let amigos = listaAmigos.getElementsByTagName('li');

    // Validar que hay amigos agregados
    if (amigos.length === 0) {
        alert('Agrega al menos un amigo antes de sortear.');
        return;
    }

    // Seleccionar un índice aleatorio (Es decir, se selecciona un amigo secreto aleatorio de la lista ingresada)
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio].textContent;

    // Mostrar resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores
    let elementoResultado = document.createElement('li');
    elementoResultado.textContent = amigoSecreto;
    resultado.appendChild(elementoResultado);
}
