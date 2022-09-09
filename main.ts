// 1 Turns it on.
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
// 0 Turns it off.
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
})
basic.showIcon(IconNames.Skull)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 1)
})
