let mao1 = 0
let mao2 = 0
/**
 * se m1=m2
 * 
 *   empate
 * 
 * senão se (m1=1 e m2=3) ou (m1=2 e m2=1) ou (m1=3 e m2=2)
 * 
 *                 m1 ganhou
 * 
 *            senão
 * 
 *                 m2 ganhou
 */
input.onGesture(Gesture.Shake, function () {
    mao1 = randint(1, 3)
    mao2 = randint(1, 3)
    if (mao1 == 1) {
        // Rock
        basic.showIcon(IconNames.SmallSquare)
    } else if (mao1 == 2) {
        // Paper
        basic.showIcon(IconNames.Square)
    } else {
        // Scissors
        basic.showIcon(IconNames.Scissors)
    }
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
    if (mao2 == 1) {
        // Rock
        basic.showIcon(IconNames.SmallSquare)
    } else if (mao2 == 2) {
        // Paper
        basic.showIcon(IconNames.Square)
    } else {
        // Scissors
        basic.showIcon(IconNames.Scissors)
    }
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
    if (mao1 == mao2) {
        // Rock
        basic.showNumber(0)
    } else {
        if (mao1 == 1 && mao2 == 3 || (mao1 == 2 && mao2 == 1 || mao1 == 3 && mao2 == 2)) {
            // Scissors
            basic.showNumber(1)
        } else {
            // Paper
            basic.showNumber(2)
        }
    }
})
