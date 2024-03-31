import getRandomNumber from '../utiles.js';

export const rules = 'What number is missing in the progression?';

const makeProgression = (start, step, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

export const gameProgression = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 10);
  const progression = makeProgression(start, step, progressionLength);
  const indexElement = getRandomNumber(0, progression.length);
  const correctAnswer = progression[indexElement].toString();
  progression[indexElement] = '..';
  const question = `Question: ${progression.join(' ')}`;
  return [question, correctAnswer];
};
