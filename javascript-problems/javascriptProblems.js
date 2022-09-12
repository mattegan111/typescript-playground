// Javascript is a bit 'loose and fast' compared to other languages
// We can 'get away' with stuff that other languages won't allow
// Maybe that's helped with mass adoption?
// But it does create risks

// Here is some bad code

let numVal = 0

function numToUpper() {
  let upperStr = numVal.toUpperCase()
}


// Here is some very sneaky bad code

let boolVal = false

function increment(num) {
  num++
  console.log(num)
}


// # When will we find out that this code doesn't work?
// No red squiggly in our IDE
// No errors in console when the page loads
// No errors when the button is clicked