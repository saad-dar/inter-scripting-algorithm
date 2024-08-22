// function spinalCase(str) {
//     // Create a variable for the white space and underscores.
//     var regex = /\s+|_+/g

//     // Replace low-upper case to low-space-uppercase
//     str = str.replace(/([a-z])([A-Z])/g, "$1 $2")

//     // Replace space and underscore with -
//     return str.replace(regex, "-").toLowerCase();
// }
  

// function spinalCase(str) {
//     // Replace low-upper case to low-space-uppercase
//     str = str.replace(/([a-z])(A-Z)/g, "$1 $2");

//     return str.toLowerCase().split(/(?:_| )+/).join('-');
// }

function spinalCase(str) {

    return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}
console.log(spinalCase('This Is Spinal Tap'));

