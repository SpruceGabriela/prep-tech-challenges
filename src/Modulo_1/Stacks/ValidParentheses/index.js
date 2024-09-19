"use strict";
function isValid(s) {
    const bracketsArr = s.split("");
    let stack = [];
    for (let i = 0; i < bracketsArr.length; i++) {
        const ch = bracketsArr[i];
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        }
        else {
            if (stack.length === 0)
                return false;
            let top = stack.pop();
            if (top === '(' && ch !== ')')
                return false;
            if (top === '{' && ch !== '}')
                return false;
            if (top === '[' && ch !== ']')
                return false;
        }
    }
    return (stack.length === 0);
}
;
//Complexidade de tempo: O(n)
//Complexidade de espaço: O(n)
