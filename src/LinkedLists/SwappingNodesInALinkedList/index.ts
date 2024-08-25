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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  if(head === null) return null;

  let first: ListNode | null = head;
  let second: ListNode | null = head;

  for(let i = 1; i < k; i++) {
      first = first?.next ?? null;
  }

  let temp: ListNode | null = first;

  while(temp?.next !== null) {
      second = second?.next ?? null;
      temp = temp?.next ?? null;
  }

  if (first !== null && second !== null) {
    [first.val, second.val] = [second.val, first.val];
  }

  return head;
};

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