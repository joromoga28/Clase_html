//Crear una función
function mostrarMensaje() {
    alert("Hola mundo");
}

function eliminar() {
    alert("Eliminar");
    const constante = 10;
    var numero = 5;
    let temporal = "hola";
    if (numero < constante) {
        console.log("menor");
    } else {
        console.log("no es menor");
    }

    for (let i = 0; i < 5; i++) {

    }
}

function editar() {
    console.log("Editar");
    console.error("Esto es un console.error");
    console.table({ "clave1": "valor1", "clave2": "valor2" });
    //Manipular el DOM
    let alt = document.getElementById("imgFuturama").alt;
    if (alt == "imagen1") {
        document.getElementById("imgFuturama").src = "https://vignette.wikia.nocookie.net/en.futurama/images/1/1c/Candy.png/revision/latest/scale-to-width-down/350?cb=20111023083201";
    } else {
        document.getElementById("imgFuturama").src = "https://vignette.wikia.nocookie.net/en.futurama/images/0/0d/Hermes.png/revision/latest?cb=20170719011119";
    }


    console.log(alt);
}