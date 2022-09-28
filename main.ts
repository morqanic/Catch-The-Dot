input.onButtonPressed(Button.A, function () {
    if (0 < xPlayer) {
        if (playing == "true"){
            led.unplot(xPlayer, 4)
            xPlayer--
            led.plot(xPlayer, 4)
        }
        
    }
})
input.onButtonPressed(Button.B, function () {
    if (xPlayer < 4) {
        if (playing == "true") {
            led.unplot(xPlayer, 4)
            xPlayer ++
            led.plot(xPlayer, 4)
        }
    }
})
let roundscore = 0
let score = 0
let ydrop = 0
let xdrop = 0
let xPlayer = 0
let playing = "false"
let time = 500
playing = "true"
xPlayer = 2
led.plot(xPlayer, 4)
while (true) {
    if (playing == "true") {
        xdrop = randint(0, 4)
        while (ydrop < 5) {
            if (ydrop == 4 && xdrop == xPlayer) {
                ydrop = 0
                xdrop = randint(0, 4)
                time -= 5
                score ++
            }
            led.plot(xdrop, ydrop)
            pause(time)
            led.unplot(xdrop, ydrop)
            ydrop ++ 
            if (ydrop == 4 && xPlayer != xdrop) {
                led.plot(xdrop, ydrop)
                pause(time)
                led.unplot(xdrop, ydrop)
                ydrop ++
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
        ydrop = 0
        xdrop = 0
        xPlayer = 0
        playing = "false"
        time = 500
        xPlayer = 2
    }
    if (input.buttonIsPressed(Button.AB)) {
        playing = "true"
        led.plot(xPlayer, 4)
    }
}
