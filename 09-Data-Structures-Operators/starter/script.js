'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   orderPasta:function(ing1,ing2,ing3){
//     console.log(`Here is your delicious pasta with ${ing1},${ing2}and${ing3}`);
//   }
// };
// // const newArr=[...restaurant.mainMenu,...restaurant.starterMenu]
// // console.log(newArr);
 
// const ingredients=[prompt("let's make pasta! Ingredient1"),
// prompt("Ingredient 2?"),
// prompt("Ingredient 3")];
// (restaurant.orderPasta(...ingredients));

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1=game.players[0]
const players2=game.players[1]
const [gk1,...fieldPlayers1]=players1;
const [gk2,...fieldPlayers2]=players2;
const allPlayers=[...players1,...players2]
const players1Final=[...players1,'Thiago','Coutinho','Perisic'];
const team1=game.odds.team1;
const draw=game.odds.team1;
const team2=game.odds.team2;
// let numPlayers=function(players){
//   console.log(players.length);
//  for(const item of players) 
//   console.log(item);
// }
// numPlayers(game.scored);
/*
const playersScored=game.scored.entries();
for(const [i, j] of playersScored)
console.log(`Goal${i+1}:${j}`);
let avg=0;
for(const odd of Object.values(game.odds))
  avg+=odd;
  avg/= Object.values(game.odds).length;

for(const[team, odd] of Object.entries(game.odds))
  console.log(team, odd);


  const oderSet=new set([
    'pasta',
    'pizza',

  ])*/


  const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);
//  const events = [...new Set(gameEvents.values())]
 
//  console.log(events);
//  gameEvents.delete(64)
//  console.log(gameEvents);
//  console.log(`An Event happened,an average , every ${90/gameEvents.size} minutes`);
//  for(const[min, events] of gameEvents){
//    (min<=45)?console.log(`First half ${min} : ${events}`):(console.log(`Second half ${min} : ${events}`));
//  }
  



//  const capitalizeName=function(name){
//    const names = name.split(' ');
//    console.log(names);
//    const namesUpper=[]
//    for(const n of names){
//       namesUpper.push(n[0].toUpperCase()+n.slice(1))
//    };
//    console.log(namesUpper);
//   }
//  capitalizeName('amit sharma')
 

 document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener("click",function(){
  
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n')
  
  for(const [i, item] of rows.entries()){ 
    const [first,second]=item.toLowerCase().trim().split("_");
   
   const result = `${first}${second.replace(second[0],second[0].toUpperCase())}`

    console.log(result);
  }
})


const name="AMIT"
console.log(name.toLowerCase());