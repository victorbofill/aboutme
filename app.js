// guessing game: coins
let userScore = 0; // can be removed when merged

const userName = prompt('Hi there! Will you please tell me your name?'); // can be removed when merged

alert('Alright, ' + userName + ', now we\'re going to play a little game! You try to guess a number, and I will \
tell you how close to the actual number you are. Now, you only have four guesses to get this right, so be careful! \
Are you ready?');

let userGuess = 'no guess';
let userGuessCounter = 3;
let nullCounter = 4; // allows users to escape out of prompts

while (userGuess != 17 && userGuessCounter != 0 && nullCounter != 0) {
    if(userGuess === 'no guess') {
        userGuess = prompt('Once while playing a video game with my friends, I collected a whole bunch of powerful coins. \
        Unfortunately I abandoned my friends and was killed by the enemy team, which sacrificed all of my coins to the \
        opposition. How many coins do you think I lost to the enemy team?');

        console.log('userGuess is : ' + userGuess);
    } else if (userGuess === null || userGuess === '') {
        userGuess = prompt ('Whoops, you didn\'t make a guess! Try again.');
        console.log('User entered invalid response: ' + userGuess);
        nullCounter--;
    } else if (userGuess === '18') {
        userGuess = prompt('You\'re so close, but just a little too high! I bet you can get it with one more guess...');
        userGuessCounter--;
        console.log('userGuess is : ' + userGuess);
    } else if (userGuess === '16') {
        userGuess = prompt('You\'re so close, but just a little too low! I bet you can get it with one more guess...');
        userGuessCounter--;
        console.log('userGuess is : ' + userGuess);
    } else if (userGuess > 18) {
        userGuess = prompt('No, it wasn\'t quite that high... ');
        userGuessCounter--;
        console.log('userGuess is : ' + userGuess);
    } else if (userGuess < 16) {
        userGuess = prompt('Oh, no, it was even more than that...');
        userGuessCounter--;
        console.log('userGuess is : ' + userGuess);
    }
}

if (userGuess === '17') {
    userScore++;
}

console.log('User\s score is: ' + userScore);

let coinMessage = 'You\'re right! ';

if (userGuess != 17 ) {
    coinMessage = 'You didn\'t quite find the right number. Do you want to know what it was? It was seventeen! ';
}

alert(coinMessage + 'I handed seventeen coins to the enemy team, and ended up losing the team for myself and my friends. \
They will never let me live it down.');

// guess the pet
const petArray = ['spooky', 'dot', 'rex', 'dirk', 'patches', 'gumbo', 'spot', 'cloudbear'];

userGuessCounter = 6;
userGuess = 'no guess';
let userCorrect = false;
let petMessage = '';

userGuess = prompt('OK, ' + userName + ' one last game! Do you think you can guess the name ofone of the pets I had growing up? \
You have six tries to get one right answer! Your choices are: Spooky, Dot, Rex, Dirk, Patches, Gumbo, Spot, and \
Cloudbear. Ready,go!').toLowerCase();

console.log('User\'s response was: ' + userGuess);

while (userGuessCounter != 0) {
    if (userGuess === petArray[1] || userGuess === petArray[4] || userGuess === petArray[6] ||
    userGuess === petArray[7]) {
        userGuess = prompt('No, that\'s not one of them. Why not give it another shot? Again, your choices are: \
        Spooky, Dot, Rex, Dirk,Patches, Gumbo, Spot, and Cloudbear!').toLowerCase();

        userGuessCounter--;

        console.log('User\'s incorrect response was: ' + userGuess);

    } else {
        userCorrect = true;
        userScore++;
        userGuessCounter = 0;
    }
}

console.log('User\'s score is: ' + userScore);

if (userCorrect === false) {
    alert('Uh oh, you\'ve run out of guesses! Oh well, I won\'t hold it against you.');
}

if (userGuess === petArray[0]) {
    petMessage = 'Spooky was my very first dog.';
}

if (userGuess === petArray[2]) {
    petMessage = 'Rex was a delightful half-breed pug I had growing up.';
}

if (userGuess === petArray[3]) {
    petMessage = 'Dirk was a hedgehod I had growing up.';
}

if (userGuess === petArray[5]) {
    petMessage = 'Gumbo was a rooster that I had growing up.';
}

if (userCorrect === true) {
    alert('That\'s right! ' + petMessage);
}

// final message, informing user of score
alert('Alright,' + userName + ', one more thing before you go. It looks like you got ' + userScore + ' questions right in our \
time together! How cool. Well, it was wonderful to meet you! Goodbye!');