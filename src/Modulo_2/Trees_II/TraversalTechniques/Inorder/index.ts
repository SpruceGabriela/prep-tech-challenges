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

function inorder(root: TreeNode | null, list: number[]) {
  if(root === null) {
      return null;
  }

  inorder(root.left, list);
  list.push(root.val);
  inorder(root.right, list);
}

function inorderTraversal(root: TreeNode | null): number[] {
  let arr: number[] = [];
  inorder(root, arr);
  return arr;
};