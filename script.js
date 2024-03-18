
const alpha_length = document.getElementById('alphabet');
const number_length = document.getElementById('numbers');
const symbol_length = document.getElementById('symbol');
const length_space = document.getElementById('main');

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '_'];
let password = [];

function gen() {
    const length = Number(alpha_length.value) + Number(number_length.value) + Number(symbol_length.value);

    for (let i = 0; i < Number(alpha_length.value); i++) {
        password.push(letters[Math.floor(Math.random() * 52)]);
    }

    for (let i = 0; i < Number(number_length.value); i++) {
        password.push(numbers[Math.floor(Math.random() * 10)]);
    }

    for (let i = 0; i < Number(symbol_length.value); i++) {
        password.push(symbols[Math.floor(Math.random() * 10)]);
    }

    for (let i = password.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [password[i], password[j]] = [password[j], password[i]];
    }

    const password_main = password.join('');
    length_space.innerHTML = `<p>The Passwords Length Will Be ${password_main} and length is: ${length}</p>`;
}
