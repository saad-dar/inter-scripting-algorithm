function convertHTML(str) {
    // split the characters
    var temp = str.split('');

    for(let i =0 ; i< temp.length ; i++) {
        switch(temp[i]) {
            case '<':
                temp[i] = "&lt;";
                break;
            case '&':
                temp[i] = "&amp;";
                break;
            case '>':
                temp[i] = "&gt;";
                break;
            case '"':
                temp[i] = "&quot;";
                break;
            case "'":
                temp[i] = "&apos;";
                break;
        }
    }
    temp = temp.join("");
    return temp;
}

function convertHTML(str) {
    // use object lookup to daclare as many HTML entities as needed

    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
    }

    // using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

console.log(convertHTML("Dolce & Gabbana"));