input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (X값 > 0) {
        X값 = X값 - 1
    }
    led.plot(X값, Y값)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    if (X값 < 4) {
        X값 = X값 + 1
    }
    led.plot(X값, Y값)
})
let 가속도_센서_Y = 0
let Y값 = 0
let X값 = 0
X값 = 0
Y값 = 0
Y값 = 4
led.plot(X값, Y값)
basic.forever(function () {
    가속도_센서_Y = input.rotation(Rotation.Pitch)
    if (가속도_센서_Y < -10) {
        basic.clearScreen()
        if (Y값 > 0) {
            Y값 = Y값 - 1
            basic.pause(1000)
        }
    } else if (가속도_센서_Y > 10) {
        basic.clearScreen()
        if (Y값 < 4) {
            Y값 = Y값 + 1
            basic.pause(500)
        }
    }
    led.plot(X값, Y값)
})
