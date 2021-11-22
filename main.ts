let moisture = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
basic.forever(function () {
    moisture = pins.analogReadPin(AnalogPin.P0)
    if (moisture >= 200) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
        music.playTone(784, music.beat(BeatFraction.Quarter))
    }
    if (moisture < 200) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
        music.playTone(247, music.beat(BeatFraction.Breve))
    }
})
