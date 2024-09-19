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
function postorder(root, list) {
    if (root === null) {
        return null;
    }
    postorder(root.left, list);
    postorder(root.right, list);
    list.push(root.val);
}
function postorderTraversal(root) {
    let arr = [];
    postorder(root, arr);
    return arr;
}
;
