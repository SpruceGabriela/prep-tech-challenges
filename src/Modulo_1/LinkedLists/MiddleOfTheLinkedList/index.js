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
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function middleNode(head) {
    if (head === null)
        return null;
    let first = head;
    let second = head;
    while (second !== null && second.next !== null) {
        first = first.next;
        second = second.next.next;
    }
    return first;
}
;
// complexidade: O(1) memoria e O(N) tempo
/*
  Explicação:

  slow and fast pointers, um incrementa de um em um, o segundo de dois em dois.
  Quando  o segundo atingir o final, significa que o primeiro atingiu o meio.
  Verificar se o second existe e se o second.next é diferente de null.

  primeira iteração:
  first = 1;
  second = 1;

  segunda iteração:
  first = 2
  second = 3

  terceira iteração:
  first = 3
  second = 5
  
  quarta iteração:
  first = 4
  second = null -> nao muda o first de 3 pq nao cai na condicional e retorna first

  retorna o first por que o second seria null
*/
/*
  outra resolução:

  function middleNode(head: ListNode | null): ListNode | null {
      if(head === null) return null;
      let testHead = head;
      let tempArray = [];

      while(testHead) {
          tempArray.push(testHead)
          testHead = testHead.next;
      }

      let middleIndex = Math.floor(tempArray.length / 2);
      return tempArray[middleIndex];
  }

  desta forma, cria-se um array temporário que recebe o proximo node da linked list por cada  iteração do while, depois, é calculado o meio do array usando o length do temp array, e o retorno é essa posição.
  Esse algoritmo, por sua vez, tem a complexidade de tempo e espaço O(n), por conta da iteração em cada node da linked list + a criação de um array.
*/ 
