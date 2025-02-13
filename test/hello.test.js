const sayHello = require('../hello.js');
test('debería retornar Hola Mundo por defecto', () => {
    expect(sayHello()).toBe('Hola, Mundo!!');
});

test('Debería retornar Hola, [Nombre personalizado]', () => {
    expect(sayHello('John')).toBe('Hola, John!');
});

//Geremy Ferran 2022-2117