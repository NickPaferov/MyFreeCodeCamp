/*function booWho(bool) {
    return bool === true || bool === false
}

// test here
booWho(null)*/


function booWho(bool) {
    return typeof bool === "boolean"
}

// test here
booWho(null)