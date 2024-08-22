// function fearNotLetter(str) {
//     for (let i = 0; i < str.length; i++) {
//         /**code of current character */

//         const charCode = str.charCodeAt(i);

//         console.log(charCode);
//         /* if code of current character is not equal to first character + no of iteration then a letter was skipped */
//         if (charCode !== str.charCodeAt(0) + i) {
//             /* if current character skipped past a character find previous character and return */
//             return String.fromCharCode(charCode - 1)
//         }
//     }
//     return undefined
// }

function fearNotLetter(str) {
    let currCharCode = str.charCodeAt(0);
    let missing = undefined;

    str.split("").forEach(letter => {
        if(letter.charCodeAt(0) === currCharCode) {
            currCharCode++;
        } else {
            missing = String.fromCharCode(currCharCode);
        }
    });

    return missing;
}

console.log(fearNotLetter("abce"));