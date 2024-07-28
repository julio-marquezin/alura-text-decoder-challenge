// Variables
const input = document.getElementById('input-text');
const output = document.getElementById('output-text');
const regexValidator = /^[a-z\s]+$/;
const keys = {};

const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');

const notice = document.getElementById('notice');
const outputView = document.getElementById('output-container');
const noticeDisplay = notice.style.display;
const outputDisplay = outputView.style.display;

// Initialization
init();

function init() {
    input.addEventListener('input', handleInput);
    output.setAttribute('readonly', true);
    outputView.style.display = 'none';

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

// Utils
function disabledButtons() {
    encryptBtn.disabled = true;
    decryptBtn.disabled = true;
    copyBtn.disabled = true;
}

// Scrolling
function scrollToInput() {
    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function scrollToOutput() {
    output.scrollIntoView({ behavior: 'smooth' });
}

// Input
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

function clearInput() {
    input.value = '';
}

// Show
function showInput() {
    disabledCopy();
    scrollToInput();
    showNotice();
}

function showOutput() {
    outputView.style.display = outputDisplay;
    notice.style.display = 'none';
    clearInput();
    disabledButtons();
    enableCopy();
    scrollToOutput();
}

function showNotice() {
    outputView.style.display = 'none';
    notice.style.display = noticeDisplay;

    disabledButtons();
    scrollToInput();
}

// Encryption/Decryption
function encrypt() {
    let encryptedText = input.value;

    for (let [key, value] of Object.entries(keys)) {
        const regex = new RegExp(key, 'g');
        encryptedText = encryptedText.replace(regex, value);
    }

    output.innerText = encryptedText;
    showOutput();
}

function decrypt() {
    let decryptedText = input.value;

    for (let [key, value] of Object.entries(keys)) {
        const regex = new RegExp(value, 'g');
        decryptedText = decryptedText.replace(regex, key);
    }
    
    output.innerText = decryptedText;
    showOutput();
}

// Copy
function enableCopy() {
    copyBtn.disabled = false;
}

function disabledCopy() {
    copyBtn.disabled = true;
}

async function copy() {
    const outputText = output.value;
    await navigator.clipboard.writeText(outputText);
    showInput();
}