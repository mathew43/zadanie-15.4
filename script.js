//zadanie 1

const a = 'Hello';
const b = 'World';

const sayHello = (first, second) => console.log(`${first} ${second}`)
sayHello(a, b)

//zadanie 2
const multiply = (first = 2, second = 3) => console.log(first * second);
multiply();

//zadanie 3

const average = (...args) => {
  let added = 0
  for (let i = 0; i < args.length; i++){
    added += args[i];
  }
  return added/ args.length
}

console.log(average(1, 3, 5, 8))

//zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades))

//zadanie 5

const tab = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = tab;
console.log(`${firstName} ${lastName}`);
