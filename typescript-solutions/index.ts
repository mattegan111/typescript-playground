
//***********************//

 // Introducing typescript which adds many type safety features on top of javascript
 // Typescript is a superset of Javascript which means all valid javascript code is valid typescript code
 // But typescript just does much much more

//***********************//

// TODO open live server
console.log('hello world')


// async function doSomething() {
//   await console.log('hello world')
// }

// doSomething()


//***********************//

// let numVal = 0

// function numToUpper() {
//   let upperStr = numVal.toUpperCase()
// }


// let boolVal: boolean = false

// function increment(num: number) {
//   num++
//   console.log(num)
// }

// increment() // TODO try quick fix on func params, then add boolVal here as arg


//***********************//

// type oddNumbersUnderTen = 1 | 3 | 5 | 7 | 9
// let oddNumber: oddNumbersUnderTen = 3

// function displayOddNumber(param: oddNumbersUnderTen) {
//   console.log(param)
// }

// displayOddNumber(oddNumber)


// type thingsThatLookLikeDonuts = "o" | "O" | "0" | 0 | { donut: 'O' }
// let donut : thingsThatLookLikeDonuts = 'o'

// function lookAtThisDonut(param: thingsThatLookLikeDonuts) {
//   console.log(param)
// }

// lookAtThisDonut(donut)



//***********************//

// // TODO convert to interface and demonstrate 'extends'
// type person = {
//   fullName: string
//   age: number
//   greet: () => void
// }

// let personObj = {
//   fullName: 'Matthew Egan',
//   age: 28,
//   greet: () => { console.log('Hi I am ' + personObj.name) } //TODO fix personObj.name error
// }

// function handleSayHi(person: person) {
//   // TODO say hi
//   person.greet()
// }

// handleSayHi(personObj)


//***********************//
