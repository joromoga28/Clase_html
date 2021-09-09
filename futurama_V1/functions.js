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
        document.getElementById("imgFuturama").alt = "imagen2";
    } else {
        document.getElementById("imgFuturama").src = "https://vignette.wikia.nocookie.net/en.futurama/images/0/0d/Hermes.png/revision/latest?cb=20170719011119";
        document.getElementById("imgFuturama").alt = "imagen1";
    }


    console.log(alt);
}

/****** Función para cargar los personajes desde la api**** */
async function cargarPersonajes() {
    // Conectar  con la api 
    const peticion = await fetch("https://futuramaapi.herokuapp.com/api/v2/characters")
    const data = await peticion.json();

    console.log("-------petición-----");
    console.log(peticion);
    console.log("--------------------");
    console.log("-------data---------");
    console.log(data);
    console.log("--------------------");

    //iterar los datos
    data.forEach(element => {
        console.log(element.Name);
        let personaje = "<div class='card personajeFuturama' style='width: 18rem;'>";
        personaje += "<img id='imgFuturama' src='" + element.PicUrl + "' class='card-img-top imgPersonaje' alt='imagen1'>";
        personaje += "<div class='card-body'>";
        personaje += "<h5 class='card-title'> '" + element.Name + "'</h5>";
        personaje += "<label>Profesión: --</label>" + element.Profession + "<br>";
        personaje += "<label>Especie: --</label> " + element.Species;
        personaje += "<br>";
        personaje += "<label>Planeta: --</label>" + element.Planet + "<br>";
        personaje += "<button type='button' class='btn btn-outline-danger' onclick='eliminar()'>Eliminar</button>";
        personaje += "&nbsp;<button type='button' class='btn btn-outline-primary' onclick='editar()'>Editar</button>";
        personaje += "</div>";
        personaje += "</div>";
        //Añadir código html al div cuerpo
        document.getElementById("cuerpo").innerHTML += personaje;
    });

}