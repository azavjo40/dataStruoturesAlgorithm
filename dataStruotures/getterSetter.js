const person = {
  data: {
    name: "Azam",
    lastName: "Sufiev",
    age: 25,
  },
  get getPerson() {
    return this.data
  },
  set changePerson(newData) {
    this.data = newData
  },
}
const newData = {
  name: "Adam",
  lastName: "Sultonov",
  age: 20,
}
console.log(person.getPerson) //{ name: 'Azam', lastName: 'Sufiev', age: 25 }
person.changePerson = newData //change data
console.log(person.getPerson) //{ name: 'Adam', lastName: 'Sultonov', age: 20 }
