const printHello = require('./printHello')

describe('Print hello', () => {
    it('Should print hello to you', () => {
        const response = printHello.printHelloToYou();

        expect(response).toBe('Hello to you!');
    })

    it('Should print Hello to your name', () => {
        const response = printHello.printHelloToYou('Kevin');

        expect(response).toBe('Hello Kevin!');
    })
})

