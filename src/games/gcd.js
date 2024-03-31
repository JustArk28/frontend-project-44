import getRandomNumber from '../utiles.js';

export const rules = 'Find the greatest common divisor of given numbers.';
const nod = (number1, number2) => {
  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return number1 + number2;
};
export const gameGcd = () => {
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);
  const question = `Question: ${number1} ${number2} `;
  const correctAnswer = nod(number1, number2).toString();
  return [question, correctAnswer];
};
