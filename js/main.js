import * as operationsService from './services/operations-service.js';

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const heightInput = document.getElementById("number1");
heightInput.addEventListener('change', handleHeightInputChange);

let value1;

function handleHeightInputChange(event) {
    event.target.classList.remove("input-error");
    value1 = event.target.value.trim();
}

const weightInput = document.getElementById("number2");
weightInput.addEventListener('change', handleWeightInputChange);

let value2;

function handleWeightInputChange(event) {
    event.target.classList.remove("input-error");
    value2 = event.target.value.trim();
}

// ----------- CLEAR -----------

const clear = document.getElementById("btn-clear");
clear.addEventListener('click', handleInputClearClick);

function handleInputClearClick(event) {
    heightInput.classList.remove("input-error");
    heightInput.value = "";
    weightInput.classList.remove("input-error");
    weightInput.value = "";
    resultOperations.innerHTML = 0;
}

const result = document.getElementById("result-box");
const resultOperations = document.createElement("p");
resultOperations.innerHTML = 0;
result.appendChild(resultOperations);

// ----------- TEST NUMBER -----------

function testeNum () {
    if (isNumber(value1)) {
        value1 = Number (value1);
        
    } else {
        heightInput.classList.add("input-error");
    }

    if (isNumber(value2)) {
        value2 = Number (value2);
        
    } else {
        weightInput.classList.add("input-error");
    }
}

// ----------- SUM -----------

const add = document.getElementById("btn-plus");
add.addEventListener('click', handleInputSoma);

function handleInputSoma(event) {
    event.preventDefault;
    testeNum();
    if (isNumber(value1) && isNumber(value2)) {
        resultOperations.innerHTML = operationsService.addValue(value1, value2);
    }
};

// ----------- MULTIPLY -----------
const multiply = document.getElementById("btn-times");
multiply.addEventListener('click', handleInputMultiplyClick);

function handleInputMultiplyClick(event) {
    event.preventDefault;
    testeNum();
    if (isNumber(value1) && isNumber(value2)) {
        resultOperations.innerHTML = operationsService.multiplyValue(value1, value2);
    }
};