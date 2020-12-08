// Array with Team scores
let teamOGArray = [96, 108, 89];                // Array for team OG
let teamAArray = [88, 91, 110];                 // Array for team Alliance

let averageOG = 0;                              // Reset average, buffer for current team avg
let averageA = 0;

for (let i = 0; i < 3; i++) {                   // Iterates 3 times = to number of elements

    if (teamOGArray[i] >= 100) {
        averageOG = averageOG + teamOGArray[i];
    }                                           // Else don't add anything?

    if (teamAArray[i] >= 100) {
        averageA = averageA + teamAArray[i];
    }

}

averageOG = averageOG / 3;                      // Works out average, total / number of items
averageA = averageA / 3;

console.log(averageOG);
console.log(averageA);





//teamArray = teamAArray;                       // Adds up Team Alliance's score on second run


// What does the program have to do 

// 1. Work out an average score for each team, only count the rounds score if it's over 100

// 2. 


