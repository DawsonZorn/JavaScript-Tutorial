// let userName = prompt("Enter your name: ");
// if (userName != '') {
//   alert("Hello " + userName);
// }

let goat = 'Messi';
let newGoat = goat.toUpperCase();
console.log(newGoat);
let message = `Hello, ${goat}`;

let favoritePlayers = ['Messi', 'Mitoma', 'Robben'];
console.log(favoritePlayers[0]); // Messi

let age = 22;
for (let i = 0; i <= age; i++) {
  if (i = age) {
    console.log('We are same age');
  }
}

for (let i = 0; i < favoritePlayers.length; i++) {
  console.log(favoritePlayers[i]);
}


let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
for (let i = 0; i < alphabet.length; i++) {
  console.log(alphabet[i]);

  if (alphabet[i] === 'e') {
    console.log('E is found');
    break;
  }
}

let grade = prompt('Enter your grade: ');
switch (grade) {
  case 'B':
    console.log('Very good you got a B!');
    break;
  case 'C':
    console.log('Not bad you got a C!');
    break;
  case 'D':
    console.log('Okay you got a D!');
    break;
  case 'A':
    console.log('Amazing you got a A!');
    break;
  default:
    console.log('You failed');
}

function greet(name) {
  console.log(`Hello, ${name}`);
}

const myName = greet('Dawson');
console.log(myName);


let pi = 3.14;
const calcArea = (radius) => {
  return pi * radius ** 2;
}

const area = calcArea(5);
console.log(area);

//callbacks and foreach

const myFunc = (callbackFunc) => {
  let value = 50;
  callbackFunc(value);
};

myFunc(value => {
  console.log(value);
});

let pokemons = ['Charizard', 'Bulbasaur', 'Squirtle', 'Pikachu', 'Jigglypuff'];
//function will run for each element in the array
// pokemons.forEach(function (pokemon) {
//   console.log(pokemon);
// }); now convert to arrow function
// pokemons.forEach((pokemon, index) => {
//   console.log(index, pokemon);
// });

//or use a callback function like this
// const logPokemons = (pokemon, index) => {
//   console.log(`${index} - ${pokemon}`);
// };
// pokemons.forEach(logPokemons);

//Now to display it to the HTML page
const ul = document.querySelector('.pokemon');
let html = ``;
pokemons.forEach(pokemon => {
  html += `<li style="color: purple">${pokemon}</li>`;
});

console.log(html);
ul.innerHTML = html;