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

function validate(node: TreeNode | null, minValue: number | null, maxValue: number | null): boolean {
  if (node === null) {
      return true;
  }

  if ((minValue !== null && node.val <= minValue) || (maxValue !== null && node.val >= maxValue)) {
      return false;
  }

  return validate(node.left, minValue, node.val) && validate(node.right, node.val, maxValue);
}

function isValidBST(root: TreeNode | null): boolean {
  return validate(root, null, null); 
};