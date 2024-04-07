import getRandomNumber from '../utiles.js';

export const rules = 'Find the greatest common divisor of given numbers.';
const getGcd = (number1, number2) => {
  let firstNumber = number1;
  let secondNumber = number2;
  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }
  return firstNumber + secondNumber;
};
export const gameGcd = () => {
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);
  const question = `Question: ${number1} ${number2} `;
  const correctAnswer = getGcd(number1, number2).toString();
  return [question, correctAnswer];
};
