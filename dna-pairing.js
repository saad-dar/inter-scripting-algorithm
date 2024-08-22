// function pairElement(str) {

//     // function to match each character with base pair
//     const matchWithBasePair = function (char) {
//         switch (char) {
//             case "A":
//                 return ["A", "T"];
//             case "T":
//                 return ["T", "A"];
//             case "C":
//                 return ["C", "G"];
//             case "G":
//                 return ["G", "C"];
//         }
//     }

//     // find the pair for every character in string
//     const pairs = []
//     for (let i=0; i<str.length; i++) {
//         pairs.push(matchWithBasePair(str[i]))
//     }
//     return pairs;
// }


function pairElement(str) {
    const pairs = {
        A : 'T',
        T : 'A',
        C : 'G',
        G : 'C'
    }

    // map string character to array of characters and matching pairs
    return str.split('').map(x => [x, pairs[x]]);
}
console.log(pairElement("GCG"));