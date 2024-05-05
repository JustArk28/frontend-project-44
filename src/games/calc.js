import getRandomNumber from '../utiles.js';

export const rules = 'What is the result of the expression?';

const calculate = (number1, number2, sign) => {
  switch (sign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Unknown operator!');
  }
};

const signs = ['+', '-', '*'];

export const gameCalc = () => {
  const operator = signs[getRandomNumber(0, signs.length - 1)];
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const question = `Question: ${number1} ${operator} ${number2} `;
  const correctAnswer = calculate(number1, number2, operator).toString();
  return [question, correctAnswer];
};
