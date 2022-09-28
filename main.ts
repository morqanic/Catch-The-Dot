input.onButtonPressed(Button.A, function () {
    if (0 < xPlayer && playing == "true") {
        led.unplot(xPlayer, 4)
        xPlayer--
        led.plot(xPlayer, 4)  
    }
})
input.onButtonPressed(Button.B, function () {
    if (xPlayer < 4 && playing == "true") {
        led.unplot(xPlayer, 4)
        xPlayer++
        led.plot(xPlayer, 4)
    }
})

let score = 0
let yDrop = 0
let xDrop = 0
let playing = "false"
let time = 500
let xPlayer = 2
playing = "true"
led.plot(xPlayer, 4)

while (true) {
    if (playing == "true") {
        xDrop = randint(0, 4)
        while (yDrop < 5) {
            if (yDrop == 4 && xDrop == xPlayer) {
                yDrop = 0
                xDrop = randint(0, 4)
                time -= 5
                score ++
            }
            led.plot(xDrop, yDrop)
            pause(time)
            led.unplot(xDrop, yDrop)
            yDrop ++ 
            if (yDrop == 4 && xPlayer != xDrop) {
                led.plot(xDrop, yDrop)
                pause(time)
                led.unplot(xDrop, yDrop)
                yDrop ++
                led.unplot(xPlayer, 4)
                playing = "false"
                basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
                pause(200)
                basic.clearScreen()
                pause(300)
                basic.showNumber(score)
                pause(200)
                basic.clearScreen()
                basic.showString("PRESS AB")
            }
        }
    }
    if (playing == "false") {
        score = 0
        yDrop = 0
        xDrop = 0
        playing = "false"
        time = 500
        xPlayer = 2
    }
    if (input.buttonIsPressed(Button.AB)) {
        playing = "true"
        led.plot(xPlayer, 4)
    }
}
