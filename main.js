let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

const caracteresEspeciales = "!@#$%^&*()";
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";

function contieneCaracteres(password, caracteres) {

    for (let i = 0; i < caracteres.length; i++) {
        if (password.includes(caracteres[i])) {
            return true;
        }
    } 
    return false;
    
}


function generar() {  
    
    let numDigitado = parseInt(cantidad.value);
    if (numDigitado < 8) {
        alert("La contrasena debe tener al menos 8 caracteres")
        return;
    };

    let password = "";

    for (let i = 0; i < numDigitado; i++) { 
        
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];   
        password += caracterAleatorio;
    }
    contrasena.value = password 

    setTimeout (() => {

        let esSegura = contieneCaracteres(password, caracteresEspeciales) && contieneCaracteres(password, mayusculas) && contieneCaracteres(password, minusculas) && contieneCaracteres(password, numeros)
        
        if (esSegura) {
            alert("Tu contrasena es segura");
        } else {
            alert("Tu contrasena no es segura, intenta agregar al menos una mayuscula, una minuscula, un numero y un caracter especial");
        }
    }, 100) 
}

function limpiar() {
    contrasena.value = "";

}








