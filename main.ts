let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . b b b b . . . . . . . . 
    . . . b 3 3 3 3 b b b b . . . . 
    . . b b 3 3 3 3 3 1 1 b b c c . 
    . . b 1 1 3 3 3 3 1 1 1 3 c c c 
    . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
    . . c 1 1 3 3 b b c c c c b b f 
    . c c 3 3 b b d d d d b c c b f 
    c b 3 3 b b d d d d d d d c b f 
    c 3 3 b b d 1 c d d 1 c d d c . 
    f 3 3 c b d d c d d d c d d c . 
    f b c c c d d d d d d d d d f . 
    f b c c c d d f f b b b b d f . 
    f f b b c c f b d d b d d c . . 
    . f f f c c f d d b b d c . . . 
    . . . . . . b b b b f c . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
