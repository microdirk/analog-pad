input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # . # .
        . # # # .
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # # .
        . # . # .
        . # # . .
        `)
})
radio.setGroup(1)
pins.setPull(DigitalPin.P8, PinPullMode.PullNone)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        basic.showNumber(0)
        radio.sendNumber(0)
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        basic.showNumber(1)
        radio.sendNumber(1)
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        basic.showNumber(2)
        radio.sendNumber(2)
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        basic.showNumber(3)
        radio.sendNumber(3)
    } else if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        basic.showNumber(4)
        radio.sendNumber(4)
    } else {
        if (pins.analogReadPin(AnalogPin.P2) > 550 && (pins.analogReadPin(AnalogPin.P1) > 400 && pins.analogReadPin(AnalogPin.P1) < 600)) {
            radio.sendValue("N", pins.analogReadPin(AnalogPin.P2))
            basic.showArrow(ArrowNames.North)
        } else if (pins.analogReadPin(AnalogPin.P2) < 450 && (pins.analogReadPin(AnalogPin.P1) > 400 && pins.analogReadPin(AnalogPin.P1) < 600)) {
            radio.sendValue("S", pins.analogReadPin(AnalogPin.P2))
            basic.showArrow(ArrowNames.South)
        } else if (pins.analogReadPin(AnalogPin.P1) < 450 && (pins.analogReadPin(AnalogPin.P2) > 400 && pins.analogReadPin(AnalogPin.P2) < 600)) {
            radio.sendValue("W", pins.analogReadPin(AnalogPin.P1))
            basic.showArrow(ArrowNames.West)
        } else if (pins.analogReadPin(AnalogPin.P1) > 550 && (pins.analogReadPin(AnalogPin.P2) > 400 && pins.analogReadPin(AnalogPin.P2) < 600)) {
            radio.sendValue("O", pins.analogReadPin(AnalogPin.P1))
            basic.showArrow(ArrowNames.East)
        } else {
        	
        }
    }
})
