controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
    	
    }
    info.stopCountdown()
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f 2 2 f . . . . . . 
    . . . . f f 2 2 2 f f . . . . . 
    . . . f f 2 2 2 2 2 f f . . . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . f f 2 2 2 2 2 2 2 2 f . . . 
    . . f 2 2 2 2 2 2 2 2 2 f . . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . f 2 2 2 2 4 4 2 2 2 2 f . . 
    . . f 2 2 4 4 4 4 4 4 2 2 f . . 
    . . f 4 4 4 5 5 5 5 4 4 4 f . . 
    . f f 4 4 4 5 5 5 5 5 4 4 f f . 
    . f f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 50)
mySprite.setStayInScreen(true)
info.setScore(15)
info.startCountdown(3)
