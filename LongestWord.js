//Q: write a finction to find longest word that takes a string as input and returns the longest word in the string.if there are multiple longest words, return the first one encountered.

const longestWord = (word) => {
    if (word.trim().length === 0) {
        return null;
    }
    arr = word.split(" ");
    // arr = arr.sort((a, b) => b.length - a.length);
    // return arr[0];

    return arr.reduce((longest, current) => (longest.length>current.length? longest:current))
}

const Longest = longestWord("javascript coding challenge");
console.log("longest word", Longest, "with length", Longest.length)