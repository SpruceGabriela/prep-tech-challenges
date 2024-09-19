"use strict";
function sortSentence(s) {
    let sentenceArray = s.split(" ");
    if (sentenceArray.length === 1) {
        return s.substring(0, s.length - 1);
    }
    let newArr = new Array(sentenceArray.length);
    for (let i = 0; i < sentenceArray.length; i++) {
        let currentWord = sentenceArray[i];
        let index = Number(currentWord[currentWord.length - 1]) - 1; //-1 no final pq o JS inicia o array com idx 0
        newArr[index] = currentWord.substring(0, currentWord.length - 1);
    }
    return newArr.join(" ");
}
;
//tempo: O(n)
//espaco: O(n)
