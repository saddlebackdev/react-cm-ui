// See https://www.educba.com/javascript-keycodes/ for a list of commonly used key codes

/*
enum KeyCode {
    Backspace = 8,
    Ctrl = 7,
    Dot = 190,
    Enter = 13,
    LeftArrow = 37,
    Letter_A = 65,
    Letter_C = 67,
    Letter_V = 86,
    Letter_X = 88,
    Letter_Y = 89,
    Letter_Z = 90,
    Minus = 189,
    NormalNumber_0 = 48,
    NormalNumber_9 = 57,
    NumberPad_0 = 96,
    NumberPad_9 = 105,
    RightArrow = 39,
    Tab = 9,
}
*/

// Poor Man's JS Enum; having trouble with TS
const KeyCode = Object.freeze({
    Backspace: 8,
    Ctrl: 7,
    Dot: 190,
    End: 35,
    Enter: 13,
    Home: 36,
    LeftArrow: 37,
    Letter_A: 65,
    Letter_C: 67,
    Letter_V: 86,
    Letter_X: 88,
    Letter_Y: 89,
    Letter_Z: 90,
    Minus: 189,
    NormalNumber_0: 48,
    NormalNumber_9: 57,
    NumberPad_0: 96,
    NumberPad_9: 105,
    NumberPad_Dot: 110,
    NumberPad_Minus: 109,
    RightArrow: 39,
    Tab: 9,
});

export default KeyCode;
