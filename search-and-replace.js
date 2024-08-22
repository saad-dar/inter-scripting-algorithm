// function myReplace(str, before, after) {

//     // find index where before is on string
//     var index = str.indexOf(before)
//     // check to see if first letter is uppercase or not
//     if(str[index] === str[index].toUpperCase()) {
//         // change the 'after' word to be capitalized before we use it
//         after = after.charAt(0).toUpperCase() + after.slice(1);
//     } else {
//         after = after.charAt(0).toLowerCase() + after.slice(1);
//     }
//     return str.replace(before, after);
// }

function myReplace(str, before, after) {
    // check if first letter of 'before' is capital/small and change the 'after' to match
    if(/^[A-Z]/.test(before)) {
        after = after[0].toUpperCase() + after.subString(1)
    } else {
        after = after[0].toUpperCase() + after.subString(1)
    }

    // returing string with argument 'before' replaced by argument 'after' with corrent case
    return str.replace(before, after);
}
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));