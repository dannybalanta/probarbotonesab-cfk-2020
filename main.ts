/**
 * esta parte del código controla a los condicionales de los botones A, B y A+B
 */
basic.forever(function () {
    // si se presionan los dos botones A y B al tiempo
    // este condicional va vacío, incluso no es necesario tenerlo. El único resultado que devuelve es tener la pantalla limpia.
    if (input.buttonIsPressed(Button.AB)) {
        for (let index = 0; index < 4; index++) {
            // muestre cuatro veces la señal de alto o de detenerse
            // pausa de 200 milisegundos
            basic.pause(200)
            // muestre la señal de detenerse de forma parcial en pantalla
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
            // pausa de 200 milisegundos
            basic.pause(200)
            // muestre la señal de detenerse de forma completa en pantalla
            basic.showLeds(`
                . # # # .
                # # # # #
                # # # # #
                # # # # #
                . # # # .
                `)
            // pausa de 200 milisegundos
            basic.pause(200)
        }
        // limpiar pantalla si la bicicleta se ha frenado o detenido
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 4; index++) {
            // muestre cuatro veces la flecha hacia la izquierda
            // pausa de 200 milisegundos
            basic.pause(200)
            // muestre la flecha izquierda de forma parcial en la pantalla
            basic.showLeds(`
                . . . . #
                . . . # #
                . . # # #
                . . . # #
                . . . . #
                `)
            // pausa de 200 milisegundos
            basic.pause(200)
            // muestre la flecha izquierda completa en pantalla
            basic.showLeds(`
                . . # . .
                . # # . .
                # # # # #
                . # # . .
                . . # . .
                `)
            // pausa de 200 milisegundos
            basic.pause(200)
        }
        // limpiar pantalla cuando ya no se gire a la izquierda
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 4; index++) {
            // muestre cuatro veces la flecha hacia la derecha
            // pausa de 200 milisegundos
            basic.pause(200)
            // muestre la flecha derecha de forma parcial en la pantalla
            basic.showLeds(`
                # . . . .
                # # . . .
                # # # . .
                # # . . .
                # . . . .
                `)
            // pausa de 200 milisegundos
            basic.pause(200)
            // muestre la flecha derecha completa en pantalla
            basic.showLeds(`
                . . # . .
                . . # # .
                # # # # #
                . . # # .
                . . # . .
                `)
            // pausa de 200 milisegundos
            basic.pause(200)
        }
        // limpiar pantalla cuando ya no se gire a la derecha
        basic.clearScreen()
    } else {
    	
    }
})
