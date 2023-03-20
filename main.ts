radio.onReceivedNumber(function (receivedNumber) {
    music.playMelody("C E G C F B G E ", 120)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendValue("MATEO", 68)
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Fabulous)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendString("SMILE")
})
radio.onReceivedValue(function (name, value) {
    basic.showIcon(IconNames.Happy)
    music.playMelody("A G F G A F E C ", 120)
})
radio.setGroup(2)
