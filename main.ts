input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        . # . # .
        # # # # #
        . # . # .
        # . . # .
        `)
    music.playMelody("C G D F G A B C5 ", 100)
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
    soundExpression.giggle.play()
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 50)
    Tinybit.RGB_Car_Big2(0, 0, 255)
    soundExpression.happy.play()
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, 50)
    Tinybit.RGB_Car_Big2(0, 255, 0)
    soundExpression.hello.play()
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, 50)
    Tinybit.RGB_Car_Big2(255, 0, 0)
    soundExpression.mysterious.play()
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 50)
    Tinybit.RGB_Car_Big2(0, 255, 0)
    soundExpression.sad.play()
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 50)
    Tinybit.RGB_Car_Big2(0, 0, 255)
    soundExpression.slide.play()
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 45)
    Tinybit.RGB_Car_Big2(255, 0, 255)
    soundExpression.soaring.play()
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 50)
    Tinybit.RGB_Car_Big2(0, 255, 0)
    soundExpression.spring.play()
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 50)
    Tinybit.RGB_Car_Big2(0, 0, 255)
    soundExpression.twinkle.play()
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 50)
    Tinybit.RGB_Car_Big2(0, 255, 0)
    soundExpression.yawn.play()
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 50)
    Tinybit.RGB_Car_Big2(255, 0, 0)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.clearScreen()
    music.stopAllSounds()
    basic.pause(5000)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showIcon(IconNames.Heart)
})
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
basic.showIcon(IconNames.Heart)
basic.showString("Hello")
