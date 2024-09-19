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
function deleteNode(root, key) {
    if (root === null) {
        return null;
    }
    if (root.val > key) {
        root.left = deleteNode(root.left, key);
    }
    else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    }
    else {
        if (!root.left) {
            return root.right;
        }
        else if (!root.right) {
            return root.left;
        }
        let it = root.right;
        while (it.left) {
            it = it.left;
        }
        [root.val, it.val] = [it.val, root.val];
        root.right = deleteNode(root.right, it.val);
    }
    return root;
}
;
