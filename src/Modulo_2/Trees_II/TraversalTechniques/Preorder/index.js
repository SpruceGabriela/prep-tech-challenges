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
function preorder(root, list) {
    if (root === null) {
        return null;
    }
    list.push(root.val);
    preorder(root.left, list);
    preorder(root.right, list);
}
function preorderTraversal(root) {
    let arr = [];
    preorder(root, arr);
    return arr;
}
;
