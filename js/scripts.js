//querySelector
const heading = document.querySelector('.header_texto h2'); //retorna 0 o 1 elementos
heading.textContent = 'Hola';
heading.classList.add('nueva-clase');
console.log(heading);

//querySelectorAll
const enlace = document.querySelectorAll('.navegacion a');
console.log(enlace);
//enlace[0].textContent = 'nuevo texto para enlace';
//enlace[0].href = 'http://google.com';
//enlace[0].classList.add('nueva-clase');
//enlace[0].classList.remove('navegacion__enlace');

//getElementById

const headin2 = document.getElementById('heading');
//console.log(headin2);

//generar nuevo enlace
//const nuevoEnlace = document.createElement('A');

//Agregar el href
//nuevoEnlace.href = 'nuevo-enlace.html';
//agregar el texto
//nuevoEnlace.textContent = 'Un nuevo Enlace';
//agregar la clase
//nuevoEnlace.classList.add('navegacion_enlace');
//agregarlo al documento
//const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(nuevoEnlace);

//console.log(nuevoEnlace);


//Eventos

console.log(1);
window.addEventListener('load', function(){ //load espera a que javascript y los archivos que dependen del html esten listos
    console.log(2);
})

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){ //Solamente espera que se descargue el html, poro no espera CSS o imagnes
    console.log(4);
})
console.log(5);

window.onscroll = function() {
    console.log('scrolling...')
}

//seleccionar elementos y asociar un evento
/*
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento){
    console.log(evento);
    console.log('enviando formulario');
    evento.preventDefault(); //evitar recarga de la pagina al dar click en un boton
});
*/

//eventos de los inputs y textarea

const datos = { //Disponible de forma global
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//Elemento de submit

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //validar el formulario
    const {nombre, email, mensaje} = datos;
    
    if(nombre == '' || email == '' || mensaje == ''){
        mostrarAlerta('Todos los campos son obligatorios', true);

        return;//CCorta la ejecucion del codigo
    }
    //crerar otra alerta enviado correctamente
    mostrarAlerta('Mensaje Enviado Correctamente');
})




function leerTexto(e){
    //console.log(e.target.value);

    datos[e.target.id] = e.target.value;
    //console.log(datos);
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }
    else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    //Eliminar el mensaje despues de 5 segundos
    setTimeout(()=>{
        alerta.remove();
    }, 5000);

}

//funciones para crear las alertas antes de hacer el validador (refactorizaar)
/*

//Muesra Alerta de que se envio correctamente
function mostrarMensaje(mensaje){
    //const alerta = document.createElement('P');
    //alerta.textContent = mensaje;
    //alerta.classList.add(alerta);

    formulario.appendChild(alerta);

    setTimeout(()=>{
        alerta.remove();
    }, 5000);
}

//Mostar un error en pantalla
function mostrarError(mensaje){
    //const error = document.createElement('P');
    //error.textContent = mensaje;
    //error.classList.add('error');

    //console.log(error);

    formulario.appendChild( error );

    //desaparecer despues de 5 segundos

    setTimeout(() =>{
        error.remove();
    }, 5000);

}*/