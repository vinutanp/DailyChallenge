//Q : write a function called countCharacter that takes two parameters: a string and a character to count
//the functin should return the number of times the specified character appears in the string

//handle both lowercase and uppercase
//function should be case sensitive.
//the character parameter can be any printable ASCII character

const countChar = (sentence, character) => {
    sentence = sentence.toLowerCase();
    character = character.toLowerCase();
    let count = sentence.split('');
    count = count.reduce((acc, curChar) => {
        if (curChar === character) {
            acc++
        }
        return acc
    }, 0);
    return count;
}

console.log(countChar("vinuUuuta", "u"));