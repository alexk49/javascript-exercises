const getAge = function (yearOfBirth, yearOfDeath) {
  if (!yearOfDeath) {
    yearOfDeath = new Date().getFullYear()
  }
  return yearOfDeath - yearOfBirth
}

const findTheOldest = function (people) {
  const oldestPerson = people.reduce((oldest, person) => {
    if (Object.keys(oldest).length === 0) {
      return person
    }
    const personAge = getAge(person.yearOfBirth, person.yearOfDeath)
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
    if (personAge > oldestAge) {
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
