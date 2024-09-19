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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) return null;
  if (root.val === val) return root;

  // numa arvore binaria de busca, todos os elementos à esquerda serão menores.

  //Então se o val que buscamos for menor que root.val, 
  //sabemos que a resposta vai estar sempre do lado esquerdo
  //caso não, buscar no lado direito, que sempre será maior

  if(val < root.val) {
      return searchBST(root.left, val);
  } else {
      return searchBST(root.right, val);
  }
};