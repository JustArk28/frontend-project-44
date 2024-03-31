import readlineSync from 'readline-sync';

const startGame = (gameFunction, rules) => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${name}\n${rules}`);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = gameFunction();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}.`);
      return;
    }
  }
  console.log(`Congratulations, ${name}.`);
};
export default startGame;
