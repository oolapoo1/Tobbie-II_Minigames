input.onButtonPressed(Button.A, function () {
    if (true) {
        scrollPageNumber = scrollPageNumber + 1
    }
})
function concertGame () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        `)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.LoopingInBackground)
    TobbieII.leftward()
    TobbieII.rightward()
    TobbieII.rightward()
    TobbieII.leftward()
    TobbieII.forward()
    TobbieII.backward()
}
function scrollMenu () {
    if (scrollPageNumber == 1) {
        basic.showString("CONCERT")
        basic.pause(5000)
        concertGame()
        scrollPageNumber = 0
    }
    if (scrollPageNumber == 2) {
        basic.showString("SHAKE")
        basic.pause(5000)
        scrollPageNumber = 0
    }
}
let scrollPageNumber = 0
scrollPageNumber = 1
basic.showString("A=SCROLL")
let onScrollMenu = 1
basic.forever(function () {
    if (scrollPageNumber > 4) {
        scrollPageNumber = 1
    }
    if (onScrollMenu == 1) {
        scrollMenu()
    }
})
