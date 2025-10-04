function Stab_füllen () {
    würfelnblockieren = 1
    if (Anzahl_Pixel == 0) {
        strip.clear()
        strip.show()
    }
    if (übertragenblockieren == 0) {
        for (let index1 = 0; index1 <= 4; index1++) {
            for (let Index = 0; Index <= 4; Index++) {
                led.plot(Index, index1)
            }
            basic.pause(1000)
        }
        music.play(music.createSoundExpression(
        WaveShape.Square,
        1,
        5000,
        255,
        0,
        300,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
        basic.clearScreen()
        strip.setPixelColorRange(0, informatiktheater.colors(NeoPixelColors.White), Anzahl_Pixel)
        strip.setPixelColorRange(Anzahl_Pixel, informatiktheater.colors(NeoPixelColors.Green), Würfel)
        strip.show()
        Anzahl_Pixel += Würfel
        Würfel = 0
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
        basic.showIcon(IconNames.Square)
    }
    if (Anzahl_Pixel >= 60) {
        basic.showIcon(IconNames.Happy)
        music.setVolume(255)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
        for (let index = 0; index < 6; index++) {
            strip.showRainbow(1, 255)
            strip.show()
            basic.pause(500)
            strip.clear()
            strip.show()
            basic.pause(200)
        }
        strip.showRainbow(1, 255)
        Zielerreicht = 1
    }
    würfelnblockieren = 0
}
input.onButtonPressed(Button.A, function () {
    if (programm == 0) {
    	
    } else if (programm == 1) {
    	
    } else if (programm == 2) {
    	
    } else if (programm == 3) {
    	
    } else if (programm == 4) {
    	
    } else if (programm == 5) {
    	
    } else if (programm == 6) {
    	
    } else if (programm == 7) {
        radio.sendString("rot")
        strip.showColor(informatiktheater.colors(NeoPixelColors.Red))
        strip.show()
    } else if (programm == 8) {
    	
    } else if (programm == 9) {
        if (Zielerreicht != 1) {
            Stab_füllen()
        }
    } else {
    	
    }
})
function würfeln () {
    übertragenblockieren = 1
    if (würfelnblockieren == 0) {
        music.play(music.createSoundExpression(WaveShape.Sine, 500, 500, 255, 0, 50, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        Würfel = randint(1, 6)
        if (Würfel == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (Würfel == 2) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . #
                `)
        } else if (Würfel == 3) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . #
                `)
        } else if (Würfel == 4) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                `)
        } else if (Würfel == 5) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
                `)
        } else if (Würfel == 6) {
            basic.showLeds(`
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
                `)
        }
    }
    übertragenblockieren = 0
}
input.onGesture(Gesture.Shake, function () {
    if (programm == 0) {
    	
    } else if (programm == 1) {
    	
    } else if (programm == 2) {
    	
    } else if (programm == 3) {
        Zufallsfarben()
    } else if (programm == 4) {
    	
    } else if (programm == 5) {
    	
    } else if (programm == 6) {
    	
    } else if (programm == 7) {
    	
    } else if (programm == 8) {
    	
    } else if (programm == 9) {
        würfeln()
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    if (programm == 0) {
    	
    } else if (programm == 1) {
    	
    } else if (programm == 2) {
    	
    } else if (programm == 3) {
    	
    } else if (programm == 4) {
    	
    } else if (programm == 5) {
    	
    } else if (programm == 6) {
    	
    } else if (programm == 7) {
        radio.sendString("blau")
        strip.showColor(informatiktheater.colors(NeoPixelColors.Blue))
        strip.show()
    } else if (programm == 8) {
    	
    } else {
    	
    }
})
function Zufallsfarben () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
    Farbe = randint(0, 4)
    if (Farbe == 0) {
        strip.showColor(informatiktheater.colors(NeoPixelColors.White))
        for (let Index = 0; Index <= strip.length(); Index++) {
            strip.setPixelColorRange(Index * 2, informatiktheater.colors(NeoPixelColors.Red), 1)
        }
        strip.show()
    } else if (Farbe == 1) {
        strip.showColor(informatiktheater.colors(NeoPixelColors.Green))
        for (let Index = 0; Index <= strip.length(); Index++) {
            strip.setPixelColorRange(Index * 8, informatiktheater.colors(NeoPixelColors.Blue), 4)
        }
        strip.show()
    } else if (Farbe == 2) {
        strip.showColor(informatiktheater.colors(NeoPixelColors.Red))
        for (let Index = 0; Index <= 30; Index++) {
            strip.setPixelColorRange(Index * 1, informatiktheater.colors(NeoPixelColors.Green), 1)
        }
        strip.show()
    } else if (Farbe == 3) {
        strip.showColor(informatiktheater.colors(NeoPixelColors.Blue))
        for (let Index = 0; Index <= strip.length(); Index++) {
            strip.setPixelColorRange(Index * 12, informatiktheater.colors(NeoPixelColors.White), 6)
        }
        strip.show()
    } else {
        strip.showColor(informatiktheater.colors(NeoPixelColors.Yellow))
        for (let Index = 0; Index <= strip.length(); Index++) {
            strip.setPixelColorRange(Index * 4, informatiktheater.colors(NeoPixelColors.Blue), 2)
        }
        strip.show()
    }
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "1") {
        programm = 1
    } else if (receivedString == "2") {
        programm = 2
    } else if (receivedString == "3") {
        programm = 3
        Zufallsfarben()
    } else if (receivedString == "4") {
        programm = 4
        strip.clear()
        strip.show()
    } else if (receivedString == "5") {
        programm = 5
        strip.clear()
        strip.show()
    } else if (receivedString == "6") {
        programm = 6
        strip.clear()
        strip.showRainbow(1, 255)
    } else if (receivedString == "7") {
        programm = 7
    } else if (receivedString == "8") {
        programm = 2
        Punkte = 0
        Position = 30
        strip.clear()
        strip.setPixelColorRange(Position, informatiktheater.colors(NeoPixelColors.Green), 3)
        strip.show()
        programm = 8
    } else if (receivedString == "9") {
        programm = 9
        strip.clear()
        strip.show()
        Würfel = 0
        Anzahl_Pixel = 0
        Zielerreicht = 0
    } else if (receivedString == "0") {
        programm = 0
        strip.clear()
        strip.show()
    } else if (receivedString == "A") {
        programm = 10
    } else if (receivedString == "B") {
        programm = 11
    } else if (receivedString == "C") {
        programm = 12
    } else if (receivedString == "D") {
        programm = 13
    } else if (receivedString == "*") {
        programm = 14
    } else if (receivedString == "#") {
        programm = 15
    } else if (receivedString == "grün") {
        strip.showColor(informatiktheater.colors(NeoPixelColors.Green))
        strip.show()
    } else if (receivedString == "rot") {
        strip.showColor(informatiktheater.colors(NeoPixelColors.Red))
        strip.show()
    } else if (receivedString == "blau") {
        strip.showColor(informatiktheater.colors(NeoPixelColors.Blue))
        strip.show()
    }
    basic.showString(receivedString)
    basic.pause(200)
    basic.clearScreen()
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    if (programm == 0) {
    	
    } else if (programm == 1) {
    	
    } else if (programm == 2) {
    	
    } else if (programm == 3) {
    	
    } else if (programm == 4) {
    	
    } else if (programm == 5) {
    	
    } else if (programm == 6) {
    	
    } else if (programm == 7) {
        radio.sendString("grün")
        strip.showColor(informatiktheater.colors(NeoPixelColors.Green))
        strip.show()
    } else if (programm == 8) {
    	
    } else {
    	
    }
})
function SchäreSteiPapier () {
    strip.clear()
    music.play(music.createSoundExpression(WaveShape.Sine, 1, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    music.stopAllSounds()
    Farbe = randint(0, 2)
    if (Farbe == 0) {
        strip.setPixelColorRange(0, informatiktheater.colors(NeoPixelColors.Green), 40)
    } else if (Farbe == 1) {
        strip.setPixelColorRange(0, informatiktheater.colors(NeoPixelColors.Red), 20)
    } else {
        strip.setPixelColorRange(0, informatiktheater.colors(NeoPixelColors.Blue), 60)
    }
    strip.show()
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    programm += 1
    if (programm > 15) {
        programm = 0
    }
    basic.showNumber(programm)
    if (programm == 0) {
        strip.clear()
        strip.show()
    } else if (programm == 1) {
        strip.clear()
        strip.show()
    } else if (programm == 2) {
    	
    } else if (programm == 3) {
        Zufallsfarben()
    } else if (programm == 4) {
        strip.clear()
        strip.show()
    } else if (programm == 5) {
        strip.clear()
        strip.setPixelColorRange(50, informatiktheater.colors(NeoPixelColors.Violet), 10)
        strip.show()
        basic.pause(10)
        strip.show()
    } else if (programm == 6) {
        strip.showRainbow(1, 255)
    } else if (programm == 7) {
        Programm_1()
    } else if (programm == 8) {
        strip.clear()
        strip.show()
        Punkte = 0
        Position = 30
        strip.clear()
        strip.setPixelColorRange(Position, informatiktheater.colors(NeoPixelColors.Green), 3)
        strip.show()
    } else if (programm == 9) {
        strip.clear()
        strip.show()
        Würfel = 0
        Anzahl_Pixel = 0
        Zielerreicht = 0
    } else {
        strip.clear()
        strip.setPixelColorRange(0, informatiktheater.colors(NeoPixelColors.Blue), 1)
    }
    basic.pause(200)
    basic.clearScreen()
})
function Programm_1 () {
    strip.showColor(informatiktheater.rgb(50, 0, 0))
    strip.show()
}
function Programm_off () {
    strip.showColor(informatiktheater.colors(NeoPixelColors.Black))
    strip.show()
}
function balancieren () {
    strip.clear()
    strip.setPixelColorRange(Position, informatiktheater.colors(NeoPixelColors.Red), 1)
    strip.show()
    Position += input.acceleration(Dimension.X) / 50
    if (Position > strip.length() || Position < 0) {
        music.play(music.createSoundExpression(WaveShape.Square, 5000, 0, 47, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        for (let index = 0; index < 4; index++) {
            strip.showColor(informatiktheater.colors(NeoPixelColors.Red))
            strip.show()
            basic.pause(100)
            strip.showColor(informatiktheater.colors(NeoPixelColors.Green))
            strip.show()
            basic.pause(100)
        }
        Punkte += 1
        basic.showNumber(Punkte)
        strip.clear()
        Position = strip.length() / 2
        strip.setPixelColorRange(Position, informatiktheater.colors(NeoPixelColors.Green), 3)
        strip.show()
        basic.pause(2000)
    }
}
let Lage = 0
let blau = 0
let gruen = 0
let Punkte = 0
let Farbe = 0
let Würfel = 0
let übertragenblockieren = 0
let Anzahl_Pixel = 0
let würfelnblockieren = 0
let Zielerreicht = 0
let Position = 0
let programm = 0
let strip: informatiktheater.Strip = null
strip = informatiktheater.create(HiwonderPins.P2, 60, PowerSource.Intern)
radio.setGroup(1)
programm = 0
Position = 30
Zielerreicht = 0
Programm_off()
basic.showNumber(programm)
music.stopAllSounds()
strip.setPixelColorRange(0, informatiktheater.colors(NeoPixelColors.Blue), 1)
// Programme:
// 0: blauer Punkt wandert mit Knopf A + B 
// 1: VU Meter weiss
// 2: Grün Blau mischen sich je nach Lage des Stabes
// 3: Zufallsmuster
// 4: Schere Stei Papier
// 5: 
basic.forever(function () {
    if (programm == 0) {
        if (input.buttonIsPressed(Button.A)) {
            strip.rotate(1)
            strip.show()
            basic.pause(10)
        } else if (input.buttonIsPressed(Button.B)) {
            strip.rotate(-1)
            strip.show()
            basic.pause(10)
        }
    } else if (programm == 1) {
        strip.clear()
        strip.showColor(informatiktheater.rgb(0, 0, 50))
        strip.setPixelColorRange(0, informatiktheater.colors(NeoPixelColors.White), Math.map(input.soundLevel(), 40, 180, 0, 60))
        strip.show()
        basic.pause(0)
    } else if (programm == 2) {
        gruen = Math.map(input.acceleration(Dimension.X), -1300, 500, 0, 255)
        blau = Math.map(input.acceleration(Dimension.X), 500, -1300, 0, 255)
        strip.showColor(informatiktheater.rgb(0, Math.constrain(gruen, 0, 255), Math.constrain(blau, 0, 255)))
        strip.show()
        basic.pause(50)
    } else if (programm == 3) {
    	
    } else if (programm == 4) {
        if (Lage == 1) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # . # # #
                . # . . .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # . #
                . . . # .
                . . # . .
                `)
        }
        if (input.acceleration(Dimension.X) < 0) {
            if (Lage == 0) {
                Lage = 1
                SchäreSteiPapier()
            }
        } else {
            Lage = 0
            strip.clear()
            strip.show()
        }
    } else if (programm == 5) {
        if (input.buttonIsPressed(Button.A)) {
            strip.clear()
            strip.setPixelColorRange(0, informatiktheater.colors(NeoPixelColors.Red), 10)
            strip.show()
            basic.pause(10)
        } else if (input.buttonIsPressed(Button.B)) {
            strip.clear()
            strip.setPixelColorRange(50, informatiktheater.colors(NeoPixelColors.White), 10)
            strip.show()
            basic.pause(10)
        }
        if (input.buttonIsPressed(Button.AB)) {
            strip.clear()
            strip.show()
            basic.pause(40)
        }
        strip.rotate(input.acceleration(Dimension.X) / -120)
        strip.show()
    } else if (programm == 6) {
        strip.rotate(input.acceleration(Dimension.X) / 200)
        strip.show()
        basic.pause(10)
    } else if (programm == 7) {
    	
    } else if (programm == 8) {
        balancieren()
    } else if (programm == 9) {
        if (Zielerreicht == 1) {
            strip.rotate(1)
            strip.show()
        }
    } else {
    	
    }
})
