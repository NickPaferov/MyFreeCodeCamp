/*
function findLongestWordLength(str) {
    let longest = str.split(' ').reduce((prev, cur) => prev.length < cur.length ? cur : prev)
    return longest.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");*/

function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
