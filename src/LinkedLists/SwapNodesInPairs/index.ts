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

function swapPairs(head: ListNode | null): ListNode | null {
  if(head === null) return null;
  if(!head.next) return head;

  const dummy = new ListNode(0);
  dummy.next = head;
  
  let prev: ListNode | null = dummy;
  let current: ListNode | null = head;

  while(current && current.next) {
      let first: ListNode | null = current;
      let second: ListNode | null = current?.next;

      first.next = second?.next;
      second.next = first;
      if(prev?.next) {
        prev.next = second;
      }

      prev = first;
      current = first.next
  }

  return dummy.next;
};

//complexidade tempo O(n) e espaço O(1)

/*
  Explicação:

  usei a técnica do Dummy pela primeira vez para fazer o calculo visual ficar mais simples.

  criei o prev (dummy) e o current (head) para iniciar
  no while, testar se o current e o current.next existem

  criei  first e o second (no primeiro exemplo, seriam 1 e 2)
  como a linked list não é como o array, trocar a posição dos Nodes envolve trocar para onde os devidos ponteiros "next" estão apontando:
  fazendo então, o next do current começar a apontar para o next do second e o second.next para o first ja faz essa troca. O prev irá apontar agora para o second, ja que ele se torna o primeiro item, (2, 1)

  para andar com a iteração, o prev vira o nosso first (1) e o current (1) vira o first.next (3) e assim continua, retornando o dummy.next para iniciar do head.
*/