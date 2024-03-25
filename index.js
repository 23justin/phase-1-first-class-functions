 function receivesAFunction (callback) {
    callback ("James");
 }callback()
function returnsANamedFunction() {
  return function named() {
    console.log("James.")
  }
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log('James.')
  }
}