"use strict"


const colorBox = document.querySelector(`.color-box`);
const displayColor = document.querySelector(`.display-color`);
const buttonNewColor = document.querySelector(`.new-color`);
const buttonCopyText = document.querySelector(`.copy-color`);


const randomNumbers = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomNumbers(0, 255)}, ${randomNumbers(0, 255)}, ${randomNumbers(0, 255)})`;

buttonNewColor.addEventListener(`click`, () =>{
    colorBox.style.backgroundColor = randomColor();
    displayColor.value = randomColor();
});

buttonNewColor.addEventListener(`keypress`, (e) =>{
    if(e.key === `Enter`){
        colorBox.style.backgroundColor = randomColor();
        displayColor.value = randomColor();
    }
});

buttonCopyText.addEventListener(`click`, () =>{
    displayColor.select();
    document.execCommand(`copy`);
});