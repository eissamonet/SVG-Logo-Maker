## SVG Logo Maker

![GitHub License](https://img.shields.io/badge/license-MIT-yellow)

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)



## Description

A Node.js command-line application will take in user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.

## User Story

AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria

- GIVEN a command-line application that accepts user input
- WHEN I am prompted for text
- THEN I can enter up to three characters
- WHEN I am prompted for the text color
- THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I am prompted for a shape
- THEN I am presented with a list of shapes to choose from: circle, triangle, and square
- WHEN I am prompted for the shape's color
- THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I have entered input for all the prompts
- THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
- WHEN I open the `logo.svg` file in a browser
- THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Installation

- [Jest](https://www.npmjs.com/package/jest)
- [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4)
- A `package.json` with the required dependencies. 


## Usage

The application will be invoked by using the following command:
node index.js.

<img width="1440" alt="Screenshot 2023-08-14 at 5 57 14 PM" src="https://github.com/eissamonet/SVG-Logo-Maker/assets/133728858/cbe6f7ce-2d03-4e08-b2e5-445351efa5c1">

You can also view a recording of the video, here: [SVG Logo Video](https://drive.google.com/file/d/1qv5hTnbU5wUlEJp16WHXDwp_sYoLhfAq/view)




