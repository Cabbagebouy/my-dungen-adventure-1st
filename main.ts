controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 b b 1 b c c c . 
        . . b 1 3 3 3 3 3 b 1 1 b c c c 
        . . b 1 1 3 3 3 3 b b b b b c c 
        . . c 1 1 3 3 3 3 c b b b b b f 
        . c c 3 3 3 3 3 3 c c b b b b f 
        c c b 3 3 3 3 3 b b c c b b b f 
        c b b b b b b b b b b c b b c . 
        f b b b b 3 3 b b b b b b b c . 
        f b b b b 1 1 b b b b b b c f . 
        f b b b b 1 1 b b b b c c d f . 
        f f b b b b b b b c c d d c . . 
        . f f f c c c c c d d d c f . . 
        . . f f b b f c f c c c b f f . 
        . . f b b b f . . f b d d d f . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`fbbfbnsf`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 1 1 1 3 c c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 1 1 3 3 b b c c c c b b f 
        . c c 3 3 b b d d d d b c c b f 
        c b 3 3 b b d c d d c d d c b f 
        c 3 3 b b d d c d d c d d d c . 
        f 3 3 c b d b d d d d b d d c . 
        f b c c c d d b b b b d d d f . 
        f b c c c d d f f f f b b d f . 
        f f b b c c f b d d f d d c . . 
        . f f f c c f d d b f d c . . . 
        . . . . . . b b b b f c . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c c . . . . . . . 
        . . . c c 3 3 3 c c . . . . . . 
        . . c 1 1 3 3 3 3 c c . . . . . 
        . b 3 1 1 3 3 3 1 1 3 b . . . . 
        . b 3 3 3 3 3 3 1 1 3 b . . . . 
        c 3 3 c c c c c c c 3 3 c . . . 
        c 3 c c c d d d c c c 3 c . . . 
        c 3 c b d c d c d b c 3 c . . . 
        . c b d d c d c d d b c . . . . 
        . c d d b d d d b d d c . . . . 
        . f d d d b b b d d d f . . . . 
        . f d d d d d f f f f . . . . . 
        . . f f f f f b b d d c . . . . 
        . . f d b b f d d d d c . . . . 
        . . f d d b f c c c c . . . . . 
        `)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c . . . . . . . 
    . . . c c 3 3 3 c c . . . . . . 
    . . c 1 1 3 3 3 3 c c . . . . . 
    . b 3 1 1 3 3 3 1 1 3 b . . . . 
    . b 3 3 3 3 3 3 1 1 3 b . . . . 
    c 3 3 c c c c c c c 3 3 c . . . 
    c 3 c c c d d d c c c 3 c . . . 
    c 3 c b d c d c d b c 3 c . . . 
    . c b d d c d c d d b c . . . . 
    . c d d b d d d b d d c . . . . 
    . f d d d b b b d d d f . . . . 
    . f d d d d d d d d d f . . . . 
    . . f f f f d f f f f . . . . . 
    . . f d b b f b b d d f . . . . 
    . . f d d b f b d d d f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
forever(function () {
    music.playMelody("C5 G C5 E C5 G C5 E ", 500)
    music.playMelody("C5 G C5 E C5 G C5 E ", 500)
})
