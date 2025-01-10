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

// console.log(html);
ul.innerHTML = html;

//Objects
let user = {
  name: 'Dawson',
  age: 22,
  email: 'email@outlook.com',
  //storing objects in arrays
  blogs: [
    { title: 'Why I love football', likes: 30 },
    { title: '10 things to do in Valheim', likes: 50 }
  ],
  logBlogs() {
    console.log('This user has made the following blogs: ');
    this.blogs.forEach(blog => {
      console.log(blog.title, blog.likes);
    })
  },
  sport: 'Football',
  favoriteTeam: 'Bayern Munich',
  favoriteGames: ['Halo Reach', 'Call of Duty Black Ops 1', 'Skyrim', 'Valheim', 'Cyberpunk 2077', 'CS:GO'],
  login: function () {
    console.log('User logged in');
  },
  logGames: function () {
    console.log('User has played the following games: ');
    this.favoriteGames.forEach(game => { //pass game as a callback function to display each game in array
      //to use this inside a function you need to use a regular function and not an arrow function as it will just refer to the default window object for this
      console.log(game);
    });
  }
};
// functions in objects can also be written like this: logGames () {} instead of logGames: function () {}
console.log(user);
console.log(user.favoriteTeam);

user.favoriteTeam = 'Barcelona';
console.log(user.favoriteTeam); // or console.log(user['favoriteTeam']);

console.log(typeof user); //object

user.login();

user.logGames();
user.logBlogs()

//making an object on its own
const games = [
  { title: 'Halo Reach', genre: 'FPS', rating: 9 },
  { title: 'Call of Duty Black Ops 1', genre: 'FPS', rating: 8 },
  { title: 'Skyrim', genre: 'RPG', rating: 10 }
];

//Built in JavaScript math objects
console.log(Math.PI); //pi
console.log(Math.E); //Euler's number
const areaCircle = 7.7;
console.log(Math.round(areaCircle)); //rounds to nearest whole number
console.log(Math.floor(areaCircle)); //rounds down
console.log(Math.ceil(areaCircle)); //rounds up
console.log(Math.trunc(areaCircle)); //removes decimal
//random number between 0 and 1
const random = Math.random();
console.log(random);
//random number between 1 and 100
console.log(Math.round(random * 100));