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
function getListMiddle(head) {
    let slow = head;
    let fast = head.next;
    while (fast && fast.next !== null) {
        if (slow) {
            slow = slow.next;
        }
        fast = fast.next.next;
    }
    return slow;
}
function reverseList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let next = current.next; //salva o next para nao perder ao inverter na proxima linha
        current.next = prev; //inverte para o current ser o prev: null <- head
        prev = current; //move o prev para a proxima posicao (para a proxima iteração)
        current = next; //move o current para ser o proximo
    }
    return prev;
}
function isPalindrome(head) {
    if (head === null || head.next === null)
        return true;
    let middle = getListMiddle(head);
    let isPalindrome = true;
    if (middle) {
        let secondHalf = reverseList(middle.next);
        let left = head; //ate o meio
        let right = secondHalf; //meio reverso
        while (right !== null) {
            if (left) {
                if (right.val !== left.val) {
                    isPalindrome = false;
                    break;
                }
                left = left.next;
                right = right.next;
            }
        }
    }
    return isPalindrome;
}
;
