function rot13(str) {
    let alphaCharacters = str.match(/[A-Z]/g);

    str = str.split('').map((item) => {
        let code = item.charCodeAt();

        if (alphaCharacters.includes(item)) {
            code = code < 78 ? item.charCodeAt(0) + 13 : item.charCodeAt(0) - 13;
            console.log(code, String.fromCharCode(code))
            return String.fromCharCode(code);
        } else {
            return String.fromCharCode(code);
        }
    }).join('');

    return str;
}

console.log(rot13("SERR PBQR PNZC"));