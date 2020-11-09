basic.showNumber(0)
basic.forever(function () {
    // si se presionan los dos botones A y B al tiempo
    // este condicional va vacío, incluso no es necesario tenerlo. El único resultado que devuelve es tener la pantalla limpia.
    if (input.buttonIsPressed(Button.AB)) {
        // muestre cuatro veces la flecha hacia la izquierda
        // pausa de 200 milisegundos
        basic.pause(200)
        basic.showNumber(2)
        // muestre cuatro veces la flecha hacia la izquierda
        // pausa de 200 milisegundos
        basic.pause(200)
    } else if (input.buttonIsPressed(Button.A)) {
        // muestre cuatro veces la flecha hacia la izquierda
        // pausa de 200 milisegundos
        basic.pause(200)
        basic.showNumber(1)
        // muestre cuatro veces la flecha hacia la izquierda
        // pausa de 200 milisegundos
        basic.pause(200)
    } else if (input.buttonIsPressed(Button.B)) {
        // muestre cuatro veces la flecha hacia la izquierda
        // pausa de 200 milisegundos
        basic.pause(200)
        basic.showNumber(1)
        // muestre cuatro veces la flecha hacia la izquierda
        // pausa de 200 milisegundos
        basic.pause(200)
    } else if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        // muestre cuatro veces la flecha hacia la izquierda
        // pausa de 200 milisegundos
        basic.pause(200)
        basic.showNumber(1)
        // muestre cuatro veces la flecha hacia la izquierda
        // pausa de 200 milisegundos
        basic.pause(200)
    } else if (input.buttonIsPressed(Button.AB) || input.buttonIsPressed(Button.A)) {
        // muestre cuatro veces la flecha hacia la izquierda
        // pausa de 200 milisegundos
        basic.pause(200)
        basic.showNumber(1)
        // muestre cuatro veces la flecha hacia la izquierda
        // pausa de 200 milisegundos
        basic.pause(200)
    } else if (input.buttonIsPressed(Button.AB) || input.buttonIsPressed(Button.B)) {
        // muestre cuatro veces la flecha hacia la izquierda
        // pausa de 200 milisegundos
        basic.pause(200)
        basic.showNumber(1)
        // muestre cuatro veces la flecha hacia la izquierda
        // pausa de 200 milisegundos
        basic.pause(200)
    }
})
