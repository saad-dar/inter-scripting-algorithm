function steamrollArray(arr) {

    let flattenArray = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattenArray.push(...steamrollArray(arr[i]))
        } else {
            flattenArray.push(arr[i])
        }
    }

    console.log(flattenArray)
    return flattenArray;
}

steamrollArray([1, [2], [3, [[4]]]]);