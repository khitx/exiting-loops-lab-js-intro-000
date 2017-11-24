function breakOut(array, changeValue, stopValue) {
  for (var i = 0; array.length - 1; i++) {
    if (array[i] === stopValue) {
      break
    }
    else {
      array[i] = changeValue
    }
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
	for (let i = 0; i < array.length; i++) {
  		if (array[i] === skipValue) {
   		continue
  		}
		else {
 			array[i] = changeValue
        }
	}
	return array
}
///*
//describe('findBy(array, findFn)', function() {
//  it('finds the a value that satisfies `findFn`', function() {
//    const c = Math.floor(Math.random() * 100)

//    expect(findBy([1, 1, 1, 1, c, 1, 2], n => n === c)).toEqual(c)
//  })

//  it('returns `null` if no match found', function() {
///    expect(findBy(["dog", "cat", "cow"], a => a === "moose")).toEqual(null)
//  })
//})
//})
///*
function findBy(array, findFn) {
  //debugger
  console.log(array)
  console.log(findFn)
  //console.log(n)
  //console.log(c)
  for (let i = 0; i < array.length; i++) {
//console.log(toSring(array[i]))
//console.log(toString(findFn()))
//console.log(n)
//console.log(c)
console.log(array[i])
console.log(findFn(array[i]))
//  		if (toString(array[i]) != toString(findFn())) {
        //if (array[i] != toString(findFn())) {
        //if (array[i] != findFn()) {
        if (!findFn(array[i])) {
          //return findFn
          //console.log(n)
          //console.log(c)
          console.log('if')
   		   continue
  		}
		  else {
          console.log('else')
 			    return array[i]
      }
      //return array[i]
	}
  return null
}
