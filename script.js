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
    let validInput = validateInput();

    encryptBtn.disabled = !validInput;
    decryptBtn.disabled = !validInput;
}

function validateInput() {
    const inputText = input.value.trim();

    if (inputText === '') return false;

    return (regexValidator.test(inputText));
}

function encrypt() {
    let encryptedText = input.value;

    for (let [key, value] of Object.entries(keys)) {
        const regex = new RegExp(key, 'g');
        encryptedText = encryptedText.replace(regex, value);
    }

    output.value = encryptedText;
}

function decrypt() {
    let decryptedText = input.value;

    for (let [key, value] of Object.entries(keys)) {
        const regex = new RegExp(value, 'g');
        decryptedText = decryptedText.replace(regex, key);
    }
    
    output.value = decryptedText;
}

function copy() {

}