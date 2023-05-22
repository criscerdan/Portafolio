const textArea=document.querySelector(".principal-textarea");
const mensaje=document.querySelector(".respuesta");

function botonEncriptar(){
    const textoEncriptado=encriptador(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value="";
}

function botonDesencriptar(){
    const textodesencriptar= desencriptar(textArea.value);
    mensaje.value=textodesencriptar;
    textArea.value="";
}

function botonCopiar(){  
    mensaje.select();
    document.execCommand("copy");  
    mensaje.selectionEnd = mensaje.selectionStart;
    alert("Texto copiado al portapapeles");
    mensaje.value="";
}

function encriptador(textocrudo){
    let codigo={
        e:"enter",
        i:"imes",
        a:"ai",
        o:"ober",
        u:"ufat",
    };
    textocrudo=textocrudo.toLowerCase();
    let claves=Object.keys(codigo);
    let valores=Object.values(codigo);
    for(let i=0;i<claves.length;i++){
            textocrudo=textocrudo.replaceAll(claves[i],valores[i])

    };
    let textoFinal=textocrudo;
    return textoFinal;

}

function desencriptar(textodesencriptado){
    let codigo={
        e:"enter",
        i:"imes",
        a:"ai",
        o:"ober",
        u:"ufat",
    };
    textodesencriptado=textodesencriptado.toLowerCase();
    let claves=Object.keys(codigo);
    let valores=Object.values(codigo);
    for(let i=0;i<claves.length;i++){
        if(textodesencriptado.includes(valores[i])){
            textodesencriptado=textodesencriptado.replaceAll(valores[i],claves[i])

        }
    };
    let textoFinalDesencriptado=textodesencriptado;
    return textoFinalDesencriptado;
}



