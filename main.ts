input.onGesture(Gesture.LogoDown, function () {
    led.plotBrightness(golyoX, golyoY, 100)
    golyoY += -1
    led.plotBrightness(golyoX, golyoY, 100)
})
input.onGesture(Gesture.LogoUp, function () {
    led.plotBrightness(golyoX, golyoY, 100)
    golyoY += 1
    led.plotBrightness(golyoX, golyoY, 100)
})
input.onGesture(Gesture.TiltRight, function () {
    led.plotBrightness(golyoX, golyoY, 100)
    golyoX += 1
    led.plotBrightness(golyoX, golyoY, 100)
})
input.onGesture(Gesture.TiltLeft, function () {
    led.plotBrightness(golyoX, golyoY, 100)
    golyoX += -1
    led.plotBrightness(golyoX, golyoY, 100)
})
let golyoY = 0
let golyoX = 0
golyoX = 0
golyoY = 0
led.plotBrightness(golyoX, golyoY, 100)
basic.forever(function () {
    led.toggle(golyoX, golyoY)
    basic.pause(200)
})
