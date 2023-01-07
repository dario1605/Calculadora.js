window.addEventListener('load' , () => {                                         /*Escuchamos cuando se carga el documento*/


    /*Careamos 2 constantes y guardamos los elementos que queremos */
    const display = document.querySelector('.calculadora-display');
    const keypadButtons = document.getElementsByClassName('boton-de-teclado');


    /*Creamos otra constante para convertir el htmlCalculadora a Array */
    const keypadButtonsArray = Array.from(keypadButtons);

    /*Iteramos por nuestro nuevo Array  debotones*/
    keypadButtonsArray .forEach( (button)=> {

        /*A cada boton le agregamos un listener para escuchar */
        button.addEventListener('click', () => {
           calculadora(button, display); 
        })
        
    });
});


function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;
        
        case '=':
            calcular (display, button);
            break;
        
        default:
            actualizar(display, button);
            break;    
    }
}

function calcular(display) {                     /*Tomar el string se resuelve y lo guardo en el innerhtml del display */
    display.innerHTML = (eval(display.innerHTML))
}

function actualizar (display, button){
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar (display) {
    display.innerHTML = 0 ;
}