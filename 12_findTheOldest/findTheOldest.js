const findTheOldest = function (people) {
  const oldestPerson = people.reduce((oldest, person) => {
    if (Object.keys(oldest).length === 0) {
      return person
    }
    const age = person.yearOfDeath - person.yearOfBirth
    if (age > (oldest.yearOfDeath - oldest.yearOfBirth)) {
      return person
    } else {
      return oldest
    }
  },
  {})
  return oldestPerson
}

// Do not edit below this line
module.exports = findTheOldest
