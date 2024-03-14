// Encriptando mediante función la palabra entregada por el usuario
function Encript() {
    var textContent = document.getElementById('plainWord');
    var originText = textContent.value;
    var cryptedText = "";
    var cryptedCaps = "";

    for (let j = 0; j < originText.length; j++) {
        const caps = originText[j];
        cryptedCaps = "";

        // Usando switch/case para reemplazar las letras por las indicadas en las instrucciones
        switch (caps) {
            case "e":
                cryptedCaps = "enter";
                break;
            case "i":
                cryptedCaps = "imes";
                break;
            case "a":
                cryptedCaps = "ai";
                break;
            case "o":
                cryptedCaps = "ober";
                break;
            case "u":
                cryptedCaps = "ufat";
                break;
            default:
                cryptedCaps = caps;
                break;
        }

    // Construcción del encriptado
        cryptedText = cryptedText + cryptedCaps;
    }

    // Ocultar y mostrar elementos tras el encriptado
    var cryptedWord = document.getElementById('cryptedWord');
    if (cryptedWord) {
        cryptedWord.style.display = 'block';
        document.getElementById('copyButton').style.display = 'block';
        document.getElementById('decryptButton').style.display = 'block';
        document.getElementById('encryptButton').style.display = 'none';
        document.getElementById('imgHide').classList.remove('hide');
        document.getElementById('imgShown').classList.add('hide');
        document.getElementById('textInstructions').classList.add('hide');
        document.getElementById('encryptResult').classList.remove('hide');
        cryptedWord.value = cryptedText;
    } else {
        console.error("No se encontró la palabra encriptada");
    }
}

// Desencriptar mediante función el texto entregado por usuario
function Decript() {
    var textInput = document.getElementById('plainWord');
    var cryptedText = textInput.value;
    var Matriz2 = [
        { caps: "a", valor: "ai" },
        { caps: "e", valor: "enter" },
        { caps: "i", valor: "imes" },
        { caps: "o", valor: "ober" },
        { caps: "u", valor: "ufat" }
    ];

    for (let j = 0; j < Matriz2.length; j++) {
        if (cryptedText.includes(Matriz2[j].valor)) {
            cryptedText = cryptedText.replaceAll(Matriz2[j].valor, Matriz2[j].caps);

        }
    }

        // Obteniendo resultado de la desencriptación y modificando visibilidad de elementos
        var cryptedWord = document.getElementById('cryptedWord');
        cryptedWord.value = cryptedText;

        document.getElementById('copyButton').style.display = 'none';
        document.getElementById('decryptButton').style.display = 'none';
        document.getElementById('encryptButton').style.display = 'none';
        document.getElementById('imgHide').classList.add('hide');
        document.getElementById('imgShown').classList.remove('hide');
        document.getElementById('decryptResult').classList.remove('hide');
        document.getElementById('encryptResult').classList.add('hide');
        document.getElementById('resetButton').style.display = 'block';
}

// Creamos una función para ayudar al usuario a copiar el texto encriptado utilizando la API del portapapeles
function textCopy() {
    var cryptedWord = document.getElementById('cryptedWord');
    var plainWord = document.getElementById('plainWord');
    
    cryptedWord.select();
    cryptedWord.setSelectionRange(0, 99999); // Para dispositivos móviles

    try { 
        navigator.clipboard.writeText(cryptedWord.value)
            .then(function () {
                alert('Texto copiado al portapapeles');
            })
            .catch(function (err) {
                console.error('Error al intentar copiar al portapapeles:', err);
            });
    } catch (err) {
        alert('Error al intentar copiar al portapapeles:', err);
    }

    plainWord.value = '';
    cryptedWord.value = '';
}

// Reiniciamos la página mediante una función
function formReset() {
    location.reload();
    document.getElementById('encryptButton').style.display = 'block';
}