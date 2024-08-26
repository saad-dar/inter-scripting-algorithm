function truthCheck(collection, pre) {
    let result = collection.every(col => {
        console.log(col[pre])
        if (col[pre]) {
            return true
        }
    })
    console.log(result)
    return result;
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");