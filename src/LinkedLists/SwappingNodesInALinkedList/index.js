"use strict";
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function swapNodes(head, k) {
    var _a, _b, _c;
    if (head === null)
        return null;
    let first = head;
    let second = head;
    for (let i = 1; i < k; i++) {
        first = (_a = first === null || first === void 0 ? void 0 : first.next) !== null && _a !== void 0 ? _a : null;
    }
    let temp = first;
    while ((temp === null || temp === void 0 ? void 0 : temp.next) !== null) {
        second = (_b = second === null || second === void 0 ? void 0 : second.next) !== null && _b !== void 0 ? _b : null;
        temp = (_c = temp === null || temp === void 0 ? void 0 : temp.next) !== null && _c !== void 0 ? _c : null;
    }
    if (first !== null && second !== null) {
        [first.val, second.val] = [second.val, first.val];
    }
    return head;
}
;
//Complexidade: tempo O(N) e espaço O(1) -> dois loopings, 2N, porém a constante é insignificante.
/*
Explicação:
Ao invés de fazer swapp no Node em si, pode se fazer no value, já que os ponteiros não mudam.

A técnica usa dois ponteiros e uma varivel temporária
Primeiro, criamos um for loop e incrementa o valor de first até  i ser < k
Depois, criamos uma variavel temporaria que inicia em first (posição k)
Por ultimo, criamos um while com a condicional de continuar apenas se temp.next existir, e atribuimos então second para second.next (que ainda estava na posição head na primeira iteração) e temp para temp.next (que estava na posição k). Quando temp acabar, second vai estar na posição length - k, de trás para frente, devido à posição de temp.

Utilizei a sintaxe do ES6 para redeclarar first e second.
*/ 
