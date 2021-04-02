// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {}
    let maxNum = -Infinity
    let maxChar=""
    
    for (let char of str){
      if (!chars[char]){
        chars[char] = 1
      } else{
        chars[char]++
      }
    }
  
    for (let property in chars){
     if (chars[property] > maxNum){
       maxNum = chars[property]
       maxChar=property
     }
    }
return maxChar
}
module.exports = maxChar;
