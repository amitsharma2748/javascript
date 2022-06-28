// Remember, we're gonna use strict mode in all scripts now!
"use strict";

let guessed = Math.floor(Math.random() * 20);
console.log(guessed);
let n = prompt("Enter the number");
if (n === guessed) {
  console.log("correct");
}
elseif(n > guessed);
{
  console.log("smaller");
}

elseif;
{
  console.log("greater");
}
