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

//let grade = prompt('Enter your grade: ');
// switch (grade) {
//   case 'B':
//     console.log('Very good you got a B!');
//     break;
//   case 'C':
//     console.log('Not bad you got a C!');
//     break;
//   case 'D':
//     console.log('Okay you got a D!');
//     break;
//   case 'A':
//     console.log('Amazing you got a A!');
//     break;
//   default:
//     console.log('You failed');
// }

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
function logNewGames() {
  console.log('Games I have played: ');
  games.forEach(game => {
    console.log(game.title, game.genre, game.rating);
  });
}
logNewGames();
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

//Stack and Heap is a memory management system in JavaScript that stores variables and functions in memory during runtime primitive data types are stored in the stack and reference data types are stored in the heap


//Interacting with a browser with the DOM (Document Object Model)

//reference to paragraph element
const para = document.querySelector('p');
console.log(para);
//to select error class
const error = document.querySelector('.error');
//if there was a div with the class of error you would then use querySelector('div.error'); to make sure it doesnt take the first div or first error class
// to select an element highlight the element in the console and right click and copy selector to get the css selector

//grabbing mulitple elements
const paras = document.querySelectorAll('p'); //returns a node list that is similar to an array but you cannot use array methods on it like push or pop but you can use forEach
paras.forEach(para => {
  console.log(para);
})

//getting an element by its ID
const title = document.getElementById('page-title');

//getting elements by their class name
const errors = document.getElementsByClassName('error'); //since its not a query selector its implied we are getting elements by class name so dont need to add .error
//it also returns an html collection which is similar to a node list but you cannot use array methods on it like a forEach loop

//getting elements by their tag name
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs[1]);

//changing text content and html inside elements
const p2 = document.querySelector('p');
console.log(p2.innerText); //gets the text inside the element
p2.innerText = 'Hello, I have been changed'; //changes the text inside the element if you want to append to it you can do += instead
//p2.innerHTML = '<h1>Hello, I am a new h1</h1>'; changes the html inside the element

const paragraphs2 = document.querySelectorAll('p');
paragraphs2.forEach(para => {
  console.log(para.innerText); //prints all paragraph text to the console
  para.innerText += ' This is new text'; //appends the message onto the already existing text
})
const content = document.querySelector('.content'); //reference to the content class
const people = ['Naruto', 'Sasuke', 'Sakura'];
people.forEach(person => { //loops through the people array and appends each person to the content class
  content.innerHTML += `<p>${person}</p>`;
});

//getting and setting attributes
const link = document.querySelector('a');

console.log(link.getAttribute('href')); //gets the href attribute of the link

link.setAttribute('href', 'https://www.youtube.com'); //changes the href attribute of the link
link.innerText = 'YouTube'; //changes the text inside the link

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class')); //gets the class attribute of the paragraph
mssg.setAttribute('class', 'success'); //changes the class attribute of the paragraph from error to success
mssg.setAttribute('style', 'color: green;'); //changes the style attribute of the paragraph to green
// so no style is overwritten you can use the style property instead of setAttribute
mssg.style.color = 'blue';
//where a property like font-size is used you can use camel case like fontSize
mssg.style.fontSize = '2em';
// mssg.style.fontSize = ''; //removes the font size

//adding and removing classes
const title2 = document.querySelector('h1');
title2.classList.add('title'); //adds the title class to the h1 element
title2.classList.remove('title'); //removes the title class from the h1 element

//toggling classes
const toggle = document.querySelector('p');
toggle.forEach(para => {
  if (para.classList.contains('error')) {
    para.classList.add('error');
  }
  if (para.classList.contains('success')) {
    para.classList.add('success');
  }
});

const contentDiv = document.querySelector('content');
contentDiv.classList.toggle('noContent'); //toggles the noContent class on the content div can toggle on and off if added again its toggled off