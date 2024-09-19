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
function invertTree(root) {
    if (root === null) {
        return null;
    }
    if (root.left !== null || root.right !== null) {
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
    }
    invertTree(root.left);
    invertTree(root.right);
    return root;
}
;
//caso exista left e right, criar uma variavel temporaria p/left e realizar o swap
//chamar a função recursivamente para cada novo nó left e right
