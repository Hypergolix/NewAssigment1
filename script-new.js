// Works out average
const averageOG = (96 + 108 + 89) / 3;            // Team OG average

const averageA = (88 + 91 + 110) / 3;             // Team Alliance average

console.log("OG avg: " + averageOG);
console.log("Alliance avg: " + averageA);

// Checks for tie or which team won
if (averageA < 100 && averageOG < 100) {

    console.log("Neither team won");

} else {
    if (averageOG === averageA) {                 // If equal, Tie 
        console.log("It's a tie")
    } else if (averageOG > averageA) {
        console.log("Team OG won!")
    } else {
        console.log("Team Alliance won!")
    }
}