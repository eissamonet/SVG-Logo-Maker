// Importing shapes class constructors
const { Triangle, Circle, Square} = require('./shapes.js');


// a testing suite for shapes is created.
describe('Triangle',() => {
    it('should test for a triangle with a blue background', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
    });
});

describe('Circle',() => {
    it('should test for a circle with a pink background', () => {
        const shape = new Circle();
        shape.setColor('pink');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="pink"/>');
    });
});

describe('Square',() => {
    it('should test for a square with a red background', () => {
        const shape = new Square();
        shape.setColor('red');
        expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="red"/>');
    });
});