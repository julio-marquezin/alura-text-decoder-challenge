const input = document.getElementById('input-text');
const output = document.getElementById('output-text');
const regexValidator = /^[a-z\s]+$/;
const keys = {};

const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');

init();

function init() {
    input.addEventListener('input', handleInput);
    output.readonly = true;

    initKeys();
    initButtons();
}

function initKeys() {
    keys['a'] = 'ai';
    keys['e'] = 'enter';
    keys['i'] = 'imes';
    keys['o'] = 'ober';
    keys['u'] = 'ufal';    
}

function initButtons() {
    encryptBtn.addEventListener('click', encrypt);
    decryptBtn.addEventListener('click', decrypt);
    copyBtn.addEventListener('click', copy);

    disabledButtons();
}

function disabledButtons() {
    encryptBtn.disabled = true;
    decryptBtn.disabled = true;
    copyBtn.disabled = true;
}

function handleInput() {

}

function encrypt() {

}

function decrypt() {

}

function copy() {

}