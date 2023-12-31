// packages for this application

const inquirer = require("inquirer");
const fs = require("fs");
// importing shapes from shapes.js
const { Circle, Triangle, Square} = require("./lib/shapes");



// prompt user to answer questions

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Text: Enter up to 3 characters',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Text Color: Enter a color keyword (OR a hexadecimal number)',
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
            name: 'shapeColor',
            message: 'Enter your desired shape color (OR a hexadecimal number)',
        },

    ]);
};

function writeToFile(fileName, data) {
    let svgString = '';
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
    svgString += `${data.shape}`;

    let shapeChoice;
    if (data.shape === 'Triangle') {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}"/>`;
    } else if (data.shape ==='Square') {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${data.shapeColor}"/>`;
    } else {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="100" r="80" fill="${data.shapeColor}"/>`;
    }

    svgString += `<text x="150" y="125" font-size="20" text-anchor="middle" fill="${data.textColor}">${data.text}</text>`;
    svgString += '</svg>';

    // fs to generate svg file
    fs.writeFile('logo.svg', svgString, (err) => {
        err ? console.log(err) : console.log('Generated logo.svg!');
    });    

};


promptUser()
    .then((data) => {
    if (data.text.length > 3) {
        console.log('Please enter no more than 3 characters');
    } else {
        writeToFile('logo.svg', data);
    }
});

