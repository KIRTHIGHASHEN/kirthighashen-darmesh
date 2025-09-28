basic.showLeds(`
    # . # . #
    # . # . .
    # # # . #
    # . # . #
    # . # . #
    `)
music.play(music.createSoundExpression(
WaveShape.Square,
632,
1,
100,
0,
1,
SoundExpressionEffect.Vibrato,
InterpolationCurve.Linear
), music.PlaybackMode.UntilDone)
basic.showArrow(ArrowNames.SouthEast)
basic.showString("Ronaldo    shuuuuu")
basic.forever(function () {
    music.play(music.stringPlayable("E C A D B G C5 F ", 495), music.PlaybackMode.UntilDone)
})
