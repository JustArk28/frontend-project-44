import getRandomNumber from '../utiles.js';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
export const gamePrime = () => {
  const num = getRandomNumber(1, 20);
  const question = `Question: ${num}`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};
