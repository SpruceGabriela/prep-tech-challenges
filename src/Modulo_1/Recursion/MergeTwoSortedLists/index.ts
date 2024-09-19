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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if(list1 === null) return list2;
  if (list2 === null) return list1;
  if(list1.val < list2.val) {
      list1.next = mergeTwoLists(list1.next, list2);
      return list1;
  } else {
      list2.next = mergeTwoLists(list2.next, list1);
      return list2;
  }

  // const dummyHead = new ListNode(0);
  // let current = dummyHead;

  // while(list1 !== null && list2 !== null) {
  //     if(list1.val <= list2.val) {
  //         current.next = list1;
  //         list1 = list1.next;
  //     } else {
  //         current.next = list2;
  //         list2 = list2.next;
  //     }

  //     current = current.next;
  // }

  // if(list1 === null) current.next = list2;
  // if(list2 === null) current.next = list1;

  // return dummyHead.next;
};

//linear tempo
//recursivo, entao linear (chama a função na memoria n vezes)