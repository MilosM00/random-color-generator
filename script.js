"use strict";


const colorBox = document.querySelector(`.color-box`);
const displayColor = document.querySelector(`.display-color`);
const buttonNewColor = document.querySelector(`.new-color`);
const buttonCopyText = document.querySelector(`.copy-color`);


const randomNumbers = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomNumbers(0, 255)}, ${randomNumbers(0, 255)}, ${randomNumbers(0, 255)})`;

buttonNewColor.addEventListener(`click`, () =>{
    color();
});

buttonNewColor.addEventListener(`keypress`, (e) =>{
    if(e.key === `Enter`){
        color();
    }
});

buttonCopyText.addEventListener(`click`, () =>{
    displayColor.select();
    document.execCommand(`copy`);
});

const color = function(){
    colorBox.style.backgroundColor = randomColor();
    displayColor.value = randomColor();
};

// Random Color Generator
// When you press the new color button, new color will be generated and it will be displayed on a square.
// You can copy it by pressing the copy button.
// Colors are displayed in RGB type.
