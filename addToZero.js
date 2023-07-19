// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
function addsTo (arr) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
          if (i !== j && arr[i] + arr [j] === 0 ) { 
            return true
          }
        }
        
      }
      return false
}


  console.log(addsTo(array))
  console.log(addsTo([1, 4, 11, 2, 37, -4]))
  console.log(addsTo([0, 21, 33, 6, 0, -9]))
  console.log(addsTo([0, 1, 2, 3, 4, 5]))


  

