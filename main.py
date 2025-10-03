def Stab_füllen():
    global blockieren, Anzahl_Pixel, Würfel
    blockieren = 1
    if Anzahl_Pixel == 0:
        strip.clear()
        strip.show()
    for index1 in range(5):
        for Index in range(5):
            led.plot(Index, index1)
        basic.pause(1500)
    music.play(music.create_sound_expression(WaveShape.SQUARE,
            1,
            5000,
            255,
            0,
            300,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)
    basic.clear_screen()
    strip.set_pixel_color_range(0,
        informatiktheater.colors(NeoPixelColors.WHITE),
        Anzahl_Pixel)
    strip.set_pixel_color_range(Anzahl_Pixel,
        informatiktheater.colors(NeoPixelColors.GREEN),
        Würfel)
    strip.show()
    Anzahl_Pixel += Würfel
    Würfel = 0
    music.play(music.tone_playable(392, music.beat(BeatFraction.SIXTEENTH)),
        music.PlaybackMode.IN_BACKGROUND)
    basic.show_icon(IconNames.SQUARE)
    if Anzahl_Pixel >= 60:
        basic.show_icon(IconNames.HAPPY)
        music.set_volume(255)
        music._play_default_background(music.built_in_playable_melody(Melodies.ENTERTAINER),
            music.PlaybackMode.IN_BACKGROUND)
        for index in range(6):
            strip.show_rainbow(1, 255)
            strip.show()
            basic.pause(500)
            strip.clear()
            strip.show()
            basic.pause(200)
        strip.show_rainbow(1, 255)
    else:
        pass
    blockieren = 0

def on_button_pressed_a():
    if programm == 0:
        pass
    elif programm == 1:
        Stab_füllen()
    elif programm == 2:
        pass
    elif programm == 3:
        pass
    elif programm == 4:
        pass
    elif programm == 5:
        pass
    elif programm == 6:
        pass
    elif programm == 7:
        pass
    elif programm == 8:
        pass
    else:
        pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def würfeln():
    global Würfel
    if blockieren == 0:
        music.play(music.create_sound_expression(WaveShape.SINE,
                500,
                500,
                255,
                0,
                50,
                SoundExpressionEffect.VIBRATO,
                InterpolationCurve.LINEAR),
            music.PlaybackMode.UNTIL_DONE)
        Würfel = randint(1, 6)
        if Würfel == 1:
            basic.show_leds("""
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                """)
        elif Würfel == 2:
            basic.show_leds("""
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . #
                """)
        elif Würfel == 3:
            basic.show_leds("""
                # . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . #
                """)
        elif Würfel == 4:
            basic.show_leds("""
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                """)
        elif Würfel == 5:
            basic.show_leds("""
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
                """)
        elif Würfel == 6:
            basic.show_leds("""
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
                """)

def on_gesture_shake():
    if programm == 0:
        pass
    elif programm == 1:
        würfeln()
    elif programm == 2:
        pass
    elif programm == 3:
        pass
    elif programm == 4:
        pass
    elif programm == 5:
        pass
    elif programm == 6:
        pass
    elif programm == 7:
        pass
    elif programm == 8:
        pass
    else:
        pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def Zufallsfarben():
    global Farbe
    music.play(music.tone_playable(262, music.beat(BeatFraction.SIXTEENTH)),
        music.PlaybackMode.IN_BACKGROUND)
    Farbe = randint(0, 4)
    if Farbe == 0:
        strip.show_color(informatiktheater.colors(NeoPixelColors.WHITE))
        Index2 = 0
        while Index2 <= len(strip)():
            strip.set_pixel_color_range(Index2 * 2, informatiktheater.colors(NeoPixelColors.RED), 1)
            Index2 += 1
        strip.show()
    elif Farbe == 1:
        strip.show_color(informatiktheater.colors(NeoPixelColors.GREEN))
        Index3 = 0
        while Index3 <= len(strip)():
            strip.set_pixel_color_range(Index3 * 8, informatiktheater.colors(NeoPixelColors.BLUE), 4)
            Index3 += 1
        strip.show()
    elif Farbe == 2:
        strip.show_color(informatiktheater.colors(NeoPixelColors.RED))
        for Index4 in range(31):
            strip.set_pixel_color_range(Index4 * 1,
                informatiktheater.colors(NeoPixelColors.GREEN),
                1)
        strip.show()
    elif Farbe == 3:
        strip.show_color(informatiktheater.colors(NeoPixelColors.BLUE))
        Index5 = 0
        while Index5 <= len(strip)():
            strip.set_pixel_color_range(Index5 * 12,
                informatiktheater.colors(NeoPixelColors.WHITE),
                6)
            Index5 += 1
        strip.show()
    else:
        strip.show_color(informatiktheater.colors(NeoPixelColors.YELLOW))
        Index6 = 0
        while Index6 <= len(strip)():
            strip.set_pixel_color_range(Index6 * 4, informatiktheater.colors(NeoPixelColors.BLUE), 2)
            Index6 += 1
        strip.show()

def on_received_string(receivedString):
    global programm, Würfel, Anzahl_Pixel, Punkte, Position
    if receivedString == "1":
        programm = 1
        basic.show_number(programm)
        strip.clear()
        strip.show()
        Würfel = 0
        Anzahl_Pixel = 0
    elif receivedString == "2":
        programm = 2
        basic.show_number(programm)
        Punkte = 0
        Position = 30
        strip.clear()
        strip.set_pixel_color_range(Position, informatiktheater.colors(NeoPixelColors.GREEN), 3)
        strip.show()
        basic.pause(5000)
    elif receivedString == "3":
        programm = 3
        basic.show_number(programm)
        Zufallsfarben()
    elif receivedString == "4":
        programm = 4
        basic.show_number(programm)
        strip.clear()
        strip.show()
    elif receivedString == "5":
        programm = 5
    elif receivedString == "6":
        programm = 6
    elif receivedString == "7":
        programm = 7
    elif receivedString == "8":
        programm = 8
    elif receivedString == "9":
        programm = 9
    elif receivedString == "0":
        programm = 0
        strip.show_color(informatiktheater.rgb(50, 0, 0))
        basic.show_number(programm)
        strip.show()
    elif receivedString == "A":
        programm = 10
    elif receivedString == "B":
        programm = 11
    elif receivedString == "C":
        programm = 12
    elif receivedString == "D":
        programm = 13
    elif receivedString == "*":
        programm = 14
    elif receivedString == "#":
        programm = 15
    else:
        pass
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    if programm == 0:
        pass
    elif programm == 1:
        pass
    elif programm == 2:
        pass
    elif programm == 3:
        pass
    elif programm == 4:
        pass
    elif programm == 5:
        pass
    elif programm == 6:
        pass
    elif programm == 7:
        pass
    elif programm == 8:
        pass
    else:
        pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def SchäreSteiPapier():
    global Farbe
    strip.clear()
    music.play(music.create_sound_expression(WaveShape.SINE,
            1,
            5000,
            255,
            0,
            500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.IN_BACKGROUND)
    music.stop_all_sounds()
    Farbe = randint(0, 2)
    if Farbe == 0:
        strip.set_pixel_color_range(0, informatiktheater.colors(NeoPixelColors.GREEN), 40)
    elif Farbe == 1:
        strip.set_pixel_color_range(0, informatiktheater.colors(NeoPixelColors.RED), 20)
    else:
        strip.set_pixel_color_range(0, informatiktheater.colors(NeoPixelColors.BLUE), 60)
    strip.show()

def on_logo_long_pressed():
    global programm, Würfel, Anzahl_Pixel
    music.play(music.tone_playable(523, music.beat(BeatFraction.HALF)),
        music.PlaybackMode.UNTIL_DONE)
    if programm == 0:
        programm += 1
        Würfel = 0
        Anzahl_Pixel = 0
    elif programm == 1:
        programm += 1
    elif programm == 2:
        programm += 1
        Zufallsfarben()
    elif programm == 3:
        programm += 1
    elif programm == 4:
        programm += 1
        programm = 0
    else:
        programm = 0
        strip.show_color(informatiktheater.rgb(50, 0, 0))
        strip.show()
    basic.show_number(programm)
input.on_logo_event(TouchButtonEvent.LONG_PRESSED, on_logo_long_pressed)

def balancieren():
    global Position, Punkte
    strip.clear()
    strip.set_pixel_color_range(Position, informatiktheater.colors(NeoPixelColors.RED), 1)
    strip.show()
    Position += input.acceleration(Dimension.X) / 50
    if Position > len(strip)() or Position < 0:
        music.play(music.create_sound_expression(WaveShape.SQUARE,
                5000,
                0,
                255,
                255,
                500,
                SoundExpressionEffect.VIBRATO,
                InterpolationCurve.LINEAR),
            music.PlaybackMode.IN_BACKGROUND)
        for index2 in range(4):
            strip.show_color(informatiktheater.colors(NeoPixelColors.RED))
            strip.show()
            basic.pause(100)
            strip.show_color(informatiktheater.colors(NeoPixelColors.GREEN))
            strip.show()
            basic.pause(100)
        Punkte += 1
        basic.show_number(Punkte)
        strip.clear()
        Position = len(strip)() / 2
        strip.set_pixel_color_range(Position, informatiktheater.colors(NeoPixelColors.GREEN), 3)
        strip.show()
        basic.pause(2000)
Lage = 0
Position = 0
Punkte = 0
Farbe = 0
Würfel = 0
Anzahl_Pixel = 0
blockieren = 0
programm = 0
strip: informatiktheater.Strip = None
strip = informatiktheater.create(HiwonderPins.P2, 60, PowerSource.INTERN)
radio.set_group(1)
programm = 0
basic.show_number(programm)
music.stop_all_sounds()

def on_forever():
    global Lage
    if programm == 0:
        pass
    elif programm == 1:
        pass
    elif programm == 2:
        balancieren()
    elif programm == 3:
        pass
    elif programm == 4:
        basic.show_number(Lage)
        if input.acceleration(Dimension.X) < 0:
            if Lage == 0:
                Lage = 1
                SchäreSteiPapier()
        else:
            Lage = 0
            strip.clear()
            strip.show()
    elif False:
        pass
    else:
        pass
basic.forever(on_forever)
