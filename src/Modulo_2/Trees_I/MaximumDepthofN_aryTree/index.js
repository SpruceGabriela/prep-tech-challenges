"use strict";
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *
 *     constructor(val?: number, children?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */
class _Node {
    constructor(val, children) {
        this.val = (val === undefined ? 0 : val);
        this.children = (children === undefined ? [] : children);
    }
}
function maxDepth(root) {
    //casos de borda e base
    if (root === null) {
        return 0;
    }
    if (!root.children) {
        return 1;
    }
    let maxDepthValue = 0;
    for (let i = 0; i < root.children.length; i++) {
        let depth = maxDepth(root.children[i]); //chamada recursiva
        maxDepthValue = Math.max(maxDepthValue, depth);
    }
    return maxDepthValue + 1;
}
;
//complexidade de tempo: linear
//complexidade de espaço: linear no pior caso (árvore desbalanceada) e log n melhor caso
