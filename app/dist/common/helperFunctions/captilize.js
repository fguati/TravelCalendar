'use strict';
export default function captilize(str) {
    const listOfWords = str.split(' ');
    const listOfCaptilizedWords = listOfWords.map(word => capitilizeWord(word));
    const outString = listOfCaptilizedWords.join(' ');
    return outString;
}
function capitilizeWord(word) {
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.substring(1).toLowerCase();
    return firstLetter + restOfWord;
}
//# sourceMappingURL=captilize.js.map