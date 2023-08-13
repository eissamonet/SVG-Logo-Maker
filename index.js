// packages for this application
const inquirer = requirer('inquirer');
const fs = require('fs');

// importing shapes from shapes.js
const { Circle, Triangle, Square} = require('./lib/shapes');
const { type } = require('os');

// Constructor class
class svg{
    constructor(){
        this.textElement = ""
        this.shapeElement = ""
    }
    render(){
        return '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg'
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
    setTextElement(text, color){
        this.textElement = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>'
    }
}

// prompt user to answer questions

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters',
        },
        {
            type: 'input',
            name: 'text-color',
            message: 'Enter a color keyword (OR a hexadecimal number)',
        },
        {   type: 'list',
            name: 'shape',
            message: 'Choose your desired shape',
            choices: [
                'Circle',
                'Triangle',
                'Square',
            ]
        },
        {
            type: 'input',
            name: 'shape-color',
            message: 'Enter your desired shape color (OR a hexadecimal number)',
        }

    ]);
};