// Javascript is a bit 'loose and fast' compared to other languages
// We can 'get away' with stuff that other languages won't allow
// Maybe that's helped with mass adoption?
// But it does create risks

// Here is some bad code

let numVal = 0

function handleNumToUpper() {
  let upperStr = numVal.toUpperCase()
}

// # Will this ... work ...?


// Here is some very sneaky bad code

let boolVal = false

function handleIncrement(num) {
  num++
  console.log(num)
}


// # When will we find out that this code doesn't work?
// No red squiggly in our IDE
// No errors in console when the page loads
// No errors when the button is clicked


// Finally here is a common mistake

let personObj = {
  fullName: 'Matthew Egan',
  // greet: () => { console.log('Hi I am ' + personObj.name) }
}

function handleSayHi(person) {
  person.greet()
}
