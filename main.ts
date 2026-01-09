let nombre1 = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        // Nombre aléatoire entre 1 et 50
        nombre1 = Math.randomRange(1, 50)
        basic.showNumber(nombre1)
        // Attendre un peu pour que le nombre soit visible
        basic.pause(500)
        // Effacer l'écran après l'affichage
        basic.clearScreen()
    }
})
