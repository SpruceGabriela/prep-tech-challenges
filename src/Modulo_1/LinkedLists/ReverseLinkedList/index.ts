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

function reverseList(head: ListNode | null): ListNode | null {
  if(head === null) return null;

  let prev: ListNode | null = null;
  let current: ListNode | null = head;
  let next: ListNode | null = head;

  while(current !== null) {
      next = next!.next;
      current!.next = prev;
      prev = current;
      current = next;
  }

  return prev;
};

// complexidade: O(1) memoria e O(N) tempo

/* 
  Explicação:
  Resolução com 3 ponteiros: prev, current e next. O prev começa como null por ser anterior ao head. Current e next iniciam como o head na mesma posição.
  No while, apenas checar se o current não é nulo, pois queremos um current.next que seja null para indicar que é o final.
  A ideia é avançar e inverter os valores por iteração do while.
  Começando com o next: ele será atribuído ao seu próprio next, para guardar sempre o next.
  O current.next (pointer) vira e aponta para o prev (inversão propriamente dita).
  O prev vira o current e o current vira o next.

  Ao recomeçar a iteração, se vê que o swap andará em "blocos" para a frente, invertendo sempre o current.next para o anterior.

  Se retorna o prev por que o current precisa ser null para quebrar o loop, e o next é igual ao current.
  O ultimo que sobra é o prev, que no final da iteração, será o ultimo item, apontando para o Node antes do current.
*/