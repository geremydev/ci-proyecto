const sayHello = require('../hello.js');
test('debería retornar Hola Mundo por defecto', () => {
    expect(sayHello()).toBe('Hola, Mundo!!');
});

test('Debería retornar Hola, John!', () => {
    expect(sayHello('John')).toBe('Hola, John!');
});

test('Debería retornar Hola, Geremy!', () => {
    expect(sayHello('Geremy')).toBe('Hola, Geremy!');
});

//Geremy Ferran 2022-2117