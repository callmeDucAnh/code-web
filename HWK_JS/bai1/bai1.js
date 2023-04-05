/* File script.js */
function appendChar(char) {
    document.getElementById('result').value += char;
}

function deleteLastChar() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, result.length - 1);
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    var result = document.getElementById('result').value;
    var calculatedResult = evaluateStringMath(result);
    document.getElementById('result').value = calculatedResult;
}

function evaluateStringMath(mathString) {
    return Function(`'use strict'; return (${mathString})`)();
}
