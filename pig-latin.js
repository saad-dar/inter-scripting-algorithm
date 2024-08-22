// function translatePigLatin(str) {
//     let consonantRegex = /^[^aeiou]+/;

//     let myConsonants = str.match(consonantRegex);

//     return myConsonants !== null ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay") : str.concat("way")
// }

// function translatePigLatin(str) {
//     if (str.match(/^[aeiou]/)) return str + "way";

//     const consonantCluster = str.match(/^[^aeiou]+/)[0];
//     return str.substring(consonantCluster.length) + consonantCluster + "ay";
// }

function translatePigLatin(str) {
    return str
        .replace(/^[aeiou]\w*/, "$&way")
        .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

console.log(translatePigLatin("consonant"));