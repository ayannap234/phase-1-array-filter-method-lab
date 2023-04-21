// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
// const findMatching = (p,q) => p.filter(p => p.toLowerCase() === q.toLowerCase())
// const fuzzyMatch = (p,q) => p.filter(p => p.charAt(0) === q.charAt(0))
// const matchName = (p,q) => p.filter(p => p.name === q)

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
console.log(findMatching())

function fuzzyMatch(drivers,name){
    return drivers.filter(driver => driver[0] === name[0])
}

function matchName(drivers,name){
  
    const matches= drivers.filter(driver => driver.name === name);

    return matches
}