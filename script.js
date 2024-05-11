// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }
//
// const fruits = ['Mango', 'Poly', 'Ajax'];
// logItems(fruits);
//1


// function calculateEngravingPrice(message, pricePerWord) {
//
//     const words = message.split(' ');
//
//     const totalPrice = words.length * pricePerWord;
//
//     return totalPrice;
// }
//
// const message = "Hello world";
// const pricePerWord = 10;
// const totalPrice = calculateEngravingPrice(message, pricePerWord);
// console.log(totalPrice);
//2


// function findLongestWord(string) {
//     const words = string.split(' ');
//
//     let longestWord = '';
//
//     for (const word of words) {
//         if (word.length >= longestWord) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }
//
// const string = "The quick brown fox jumped over the lazy dog";
// const longestWord = findLongestWord(string);
// console.log(longestWord);
//3


// function formatString(string) {
//     if (string.length <= 40) {
//         return string
//     } else {
//         return string.slice(0, 40) + '...';
//     }
// }
//
// const longString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// const shortString = "Short string";
// console.log(formatString(longString));
// console.log(formatString(shortString));
//4

// function checkForSpam(message) {
//     const lowerCaseMessage = message.toLowerCase();
//
//     if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// console.log(checkForSpam('Buy now, sale!')); // Виведе true
// console.log(checkForSpam('Get the best spam deals!')); // Виведе true
// console.log(checkForSpam('Just a regular message')); // Виведе false
//5

const numbers = [];
let input;

do {
    input = prompt('Введіть число:');
    if (input !== null) {
        const number = Number(input);
        if (!isNaN(number)) {
            numbers.push(number);
        } else {
            alert('Ви ввели не число, спробуйте ще раз.');
        }
    }
} while (input !== null);

if (numbers.length > 0) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
    console.log('Масив чисел порожній.');
}