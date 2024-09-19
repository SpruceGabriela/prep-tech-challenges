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

// pega o meio utilizando a estrategia de fast and slow pointers

function getMiddle(head: ListNode) {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  while(fast && fast.next !== null) {
      if(slow) {
        slow = slow.next;
      }
      fast = fast.next.next;
  }
  return slow;
}

//juntar as listas left e right ordenadas

function mergeLists(left: ListNode | null, right: ListNode | null){
  const dummyHead = new ListNode(0);
  let current = dummyHead;

  while(left !== null && right !== null) {
      if(left.val < right.val) {
          current.next = left;
          left = left.next;
      } else {
          current.next = right;
          right = right.next;
      }

      current = current.next;
  }

  if(left === null) current.next = right;
  if(right === null) current.next = left;

  return dummyHead.next;
}

// o middle é usado apenas para saber o meio da lista
// depois, definir left e right e cortar o middle para o left nao ir ate o final

function sortList(head: ListNode | null): ListNode | null {
  if(!head || !head.next) return head;

  let middle = getMiddle(head);
  let left: ListNode | null = head;
  
  if(middle) {
    let right = middle.next;
    middle.next = null; 

    left = sortList(left);
    right = sortList(right);

    //aplicar recursao para sempre fazer o sort de left e right, senão ele não refaz o sort ate o final
    return mergeLists(left, right);
  }

  return null;
};