import readlineSync from 'readline-sync';
const greeting = () => {
return 'Welcome to the Brain Games!'
};
console.log(greeting());

const name = readlineSync.question('May I have your name? ');

export {greeting, name};

