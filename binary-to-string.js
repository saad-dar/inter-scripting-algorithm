function binaryAgent(str) {
    let strArr = str.split(' ')
    let letterString = []
    for (let i = 0; i < strArr.length; i++) {
        letterString.push(String.fromCharCode(parseInt(strArr[i], 2)))
    }
    console.log(letterString.join(''))
    return letterString.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");