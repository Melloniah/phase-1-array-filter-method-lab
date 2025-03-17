


const drivers = ["Betty", "Mercy", "Mellow", "Dennis"]


function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}



console.log(findMatching(drivers, "Mercy")); 
console.log(findMatching(drivers, "Dennis")); 

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}
console.log(fuzzyMatch(drivers, "Me")); // ["Mercy", "Mellow"]
console.log(fuzzyMatch(drivers, "De")); // ["Dennis"]
console.log(fuzzyMatch(drivers, "B"));  // ["Betty"]
console.log(fuzzyMatch(drivers, "Z"));  // [] (No matches)


const dere = [
    { name: "Betty", hometown: "Nairobi" },
    { name: "Mercy", hometown: "Mombasa" },
    { name: "Mellow", hometown: "Kisumu" },
    { name: "Dennis", hometown: "Eldoret" }
];


function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}



console.log(matchName(dere, "Mercy")); // [{ name: "Mercy", hometown: "Mombasa" }]
console.log(matchName(dere, "Dennis")); // [{ name: "Dennis", hometown: "Eldoret" }]
console.log(matchName(dere, "Alice")); // [] (No match)