"use strict";
function sortArrayByParity(nums) {
    let newArr = new Array(nums.length);
    let arrIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            newArr[arrIndex] = nums[i];
            arrIndex++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 1) {
            newArr[arrIndex] = nums[i];
            arrIndex++;
        }
    }
    return newArr;
}
;
//tempo: O(n)
//espaco: O(n)
