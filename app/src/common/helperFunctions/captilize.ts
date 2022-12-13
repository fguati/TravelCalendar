'use strict'

export default function captilize(str: string): string {
    const listOfWords = str.split(' ')
    const listOfCaptilizedWords = listOfWords.map(word => capitilizeWord(word))
    const outString = listOfCaptilizedWords.join(' ')

    return outString
}

function capitilizeWord(word: string): string {
    const firstLetter = word[0].toUpperCase()
    const restOfWord = word.substring(1).toLowerCase()
    return firstLetter + restOfWord
}
