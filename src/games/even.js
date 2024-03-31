import getRandomNumber from '../utiles.js';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => !(num % 2);
export const gameEven = () => {
  const num = getRandomNumber(1, 20);
  const question = `Question: ${num}`;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};
