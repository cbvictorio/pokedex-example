import colorPicker from '@/utils/color-picker'

describe('Testing color picker function for pokemons types and colors', () => {
    test('Testing for normal type', () => {
        expect(colorPicker('normal')).toEqual('#B1B27D')
    })
    test('Testing for fire type', () => {
        expect(colorPicker('fire')).toEqual('#ED8B00')
    })
    test('Testing for fight type', () => {
        expect(colorPicker('fight')).toEqual('#C2351A')
    })
    test('Testing for water type', () => {
        expect(colorPicker('water')).toEqual('#7898F9')
    })
    test('Testing for flying type', () => {
        expect(colorPicker('flying')).toEqual('#B198F9')
    })
    test('Testing for grass type', () => {
        expect(colorPicker('grass')).toEqual('#88D043')
    })
    test('Testing for poison type', () => {
        expect(colorPicker('poison')).toEqual('#A644AF')
    })
    test('Testing for electric type', () => {
        expect(colorPicker('electric')).toEqual('#F6D700')
    })
    test('Testing for ground type', () => {
        expect(colorPicker('ground')).toEqual('#E2C862')
    })
    test('Testing for type psychic', () => {
        expect(colorPicker('psychic')).toEqual('#F46092')
    })
    test('Testing for rock type', () => {
        expect(colorPicker('rock')).toEqual('#BEAB16')
    })
    test('Testing for ice type', () => {
        expect(colorPicker('ice')).toEqual('#A7DDDF')
    })
    test('Testing for bug type', () => {
        expect(colorPicker('bug')).toEqual('#B1C200')
    })
    test('Testing for dragon type', () => {
        expect(colorPicker('dragon')).toEqual('#782FFE')
    })
    test('Testing for steel type', () => {
        expect(colorPicker('steel')).toEqual('#C1C0D8')
    })
    test('Testing for fairy type', () => {
        expect(colorPicker('fairy')).toEqual('#EDA3B5')
    })
    test('Testing for ghost type', () => {
        expect(colorPicker('ghost')).toEqual('#7A61A7')
    })
    test('Testing for dark type', () => {
        expect(colorPicker('dark')).toEqual('#7A634F')
    })
    test('Testing for random type with no arguments', () => {
        expect(colorPicker()).toEqual('#77AA9A')
    })
    test('Testing for random type with empty string', () => {
        expect(colorPicker('')).toEqual('#77AA9A')
    })
    test('Testing for random type with an argument different than string', () => {
        expect(colorPicker(1)).toEqual('#77AA9A')
    })
    test('Testing for random type with null argument', () => {
        expect(colorPicker(null)).toEqual('#77AA9A')
    })
    test('Testing for random type with undefined argument', () => {
        expect(colorPicker(undefined)).toEqual('#77AA9A')
    })
})