"use strict";
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function inorderTree(root, list) {
    if (root === null) {
        return;
    }
    inorderTree(root.left, list);
    list.push(root.val);
    inorderTree(root.right, list);
}
function balance(arr, left, right) {
    if (left > right) {
        return null;
    }
    let mid = Math.floor((left + right) / 2);
    let root = new TreeNode(arr[mid]);
    root.left = balance(arr, left, mid - 1);
    root.right = balance(arr, mid + 1, right);
    return root;
}
function balanceBST(root) {
    let arr = [];
    inorderTree(root, arr);
    return balance(arr, 0, (arr.length - 1));
}
;
