// programa para saber si una palabra es palindrome o no.
let palabra= prompt('Escriba la palabra que quiere saber si es palindrome: ');

function palindrome(palabra) {

    const palabraUno = palabra.replace(' ','');
   
    // método convierte la cadena en caracteres de matriz individuales
    const arrayValues = palabraUno.split('');

    //método invierte la posición en una matriz.
    const reversePalabra = arrayValues.reverse();

    // convert array to string
    const reverseString = reversePalabra.join('');

    if(palabraUno == reverseString) {
        alert('Es palindrome');
    }
    else {
        alert('No es palindrome');
    }
}


palindrome(palabra);