//datatype - Array

// const superHeroes = ['Iron Man', 'Spiderman', 'Capt. America', 'Thor']

// console.log(superHeroes);
// console.log(superHeroes[0]);
// console.log(superHeroes[2])
// console.log(superHeroes.length)
// console.log(superHeroes[superHeroes.length-1])

// console.log(`We have ${superHeroes.length} super heroes`)
// console.log('we have '+ superHeroes.length + ' super heroes')

// const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

// console.log(numbers)
// numbers[1] = 'something'
// console.log(numbers)

//Start
// numbers.shift()
// console.log(numbers.shift())
// console.log(numbers)
// numbers.unshift('Something')
// console.log(numbers)

//End
// numbers.pop() // Also returns the value
// console.log(numbers)

// numbers.push('Seven')
// console.log(numbers)

//Middle
// numbers.splice(2, 2, 'Something', 'something2')
// console.log(numbers)

function isPalindrome(word)
{
  // Please write your code here.
  var text = word.toLowerCase();
  var len = word.length;
  var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (text[i] !== text[len - 1 - i]) {
            return false;
        }
    }

    return true;
}
var word = 'Ded'
console.log(isPalindrome(word))