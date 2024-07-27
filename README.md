# Alura Text Decoder Challenge

## Description

The **Alura Text Decoder Challenge** is a project developed as part of the challenges proposed by the Alura learning platform. The goal of this project is to create a text decoder capable of encrypting and decrypting messages using simple cipher algorithms.

## Algorithm

- **Initialization**:
  
  A dictionary of substitution rules (`keys`) is initialized, where each vowel is mapped to a unique string:
  
  - 'a' → 'ai'
  - 'e' → 'enter'
  - 'i' → 'imes'
  - 'o' → 'ober'
  - 'u' → 'ufal'
 
- **Substitution**:
  
  Each character in the input text is replaced according to the substitution rules in the `keys` dictionary.
  For each character in the input text:
  
  - If the character is a key in the `keys` dictionary, it is replaced with the corresponding value.
  - If the character is not a key, it remains unchanged.

## Features
- **Custom Cipher**: Implementation of a custom cipher algorithm for encrypting and decrypting texts.
- **Validation**: Ensures input text consists only of lowercase letters and spaces.
- **Simple Interface**: User-friendly interface for interacting with the decoder.
- **Auto-Scrolling**: Automatically scrolls to input or output areas for better user experience.
- **Clipboard Support**: Allows copying the encrypted or decrypted text to the clipboard.

## How to Use
1. Clone the repository to your local machine:
    ```sh
    git clone https://github.com/julio-marquezin/alura-text-decoder-challenge.git
    ```
2. Navigate to the project directory:
    ```sh
    cd alura-text-decoder-challenge
    ```
3. Open the `index.html` file in your web browser to run the application.

## Contributing
Feel free to contribute to this project by following these steps:
1. Fork the project.
2. Create a new branch:
    ```sh
    git checkout -b my-new-feature
    ```
3. Make your changes and commit them:
    ```sh
    git commit -m "Add my new feature"
    ```
4. Push to the original repository:
    ```sh
    git push origin my-new-feature
    ```
5. Create a Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
