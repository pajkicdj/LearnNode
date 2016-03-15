var prompt = require('sync-prompt').prompt;


function decrease(money, tot) {
  tot -= money;
  msg = ("You LOST $"+money+"! :( Your new total is: $"+tot);
  console.log(msg);
  return tot;
}

function increase(money, tot) {
  tot += money;
  msg = ("You WON $"+money+"! Your new total is: $"+tot);
  console.log(msg);
  return tot;
}

function doNothing(tot) {
  msg = ("you were OFF BY ONE!!! Your total remains the same: $"+tot);
  console.log(msg);
  return tot;
}

function close(pgs, cgs) {
  var up = cgs + 1;
  var down = cgs - 1;
  if (pgs === up || pgs === down) {
    return true;
  } else {
    return false;
  }
}

function outcome(personG, compG, amount, total) {
  var isClose = close(personG, compG); 
  if (personG === compG) {
    console.log('WON');
    return increase(amount, total);
  } else if (isClose === false) {
    return decrease(amount, total);
    console.log('WON');
  } else {
    doNothing(total);
    return total;
    console.log('NEUTRAL');
  }
}


var bet = 0;
var guess = 0;
var compGuess = 0;

var game = function(bankroll) {
  if (bankroll <= 0) {
    return console.log("YOU'RE BROKE!")
  }
  bet = +(prompt('How much do you want to bet? '));
  guess = +(prompt('What is your guess? '));
  compGuess = Math.floor((Math.random() * 10) + 1);
  console.log("------------RESULTS------------");
  console.log("Computer's Guess: "+ compGuess);
  console.log("Your Guess: "+ guess);
  console.log("------------------------------"); 
  bankroll = outcome(guess, compGuess, bet, bankroll);
  console.log("------------------------------");
  game(bankroll);
};


game(100);
// var bet = +(prompt('How much do you want to bet? '));
// var guess = +(prompt('What is your guess? '));
// //if ((NaN(bet) === false) && (NaN(guess) === false)) {
//   console.log("YAY");
//   console.log(typeof bet);
//   var compGuess = Math.floor((Math.random() * 10) + 1);
//   console.log(compGuess);
//   console.log(typeof guess);
//   console.log(typeof compGuess);
//   if (compGuess === guess) {
//     console.log("yay");
//   } else {
//     console.log("nooo");
//   }
// //} else {
// //   console.log("NOOOO");
// //   console.log(typeof bet);
// //   console.log(typeof guess);
// // }

// //outcome(6,6,5,10);

