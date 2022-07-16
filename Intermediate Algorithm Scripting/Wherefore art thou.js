function whatIsInAName(collection, source) {
    const arr = []
    // Only change code below this line
    const sourceKeys = Object.keys(source)
    for (let i = 0; i < collection.length; i++) {
        if (sourceKeys.every(key => collection[i].hasOwnProperty(key) &&
            collection[i][key] === source[key])) {
            arr.push(collection[i])
        }
    }
    // Only change code above this line
    return arr
}

whatIsInAName([{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null},
    {first: "Tybalt", last: "Capulet"}], {last: "Capulet"})