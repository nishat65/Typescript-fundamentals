"use strict";
// Floyd's hare and tortoise algo
let a = [1, 4, 3, 3, 5];
function detectCycle(nums) {
    let tortoise = nums[0];
    let hare = nums[0];
    // first phase tortoise will move 1 step at a time and hare will move 2   
    while (tortoise !== hare) {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    }
    tortoise = 0;
    // In  second phase both will move one step at a time
    while (tortoise !== hare) {
        tortoise = nums[tortoise];
        hare = nums[hare];
    }
    return hare;
}
// console.log(detectCycle(a));
// Brute force
const longestOnes = (arr, k) => {
    let max = 0;
    for (let i = 0; i < arr.length; ++i) {
        let cur = 0;
        for (let j = i, zero = 0; j < arr.length; ++j) {
            if (arr[j] === 0 && ++zero > k)
                break;
            ++cur;
        }
        cur > max && (max = cur);
    }
    return max;
};
// important solution in sliding window algo
let re = longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);
// console.log(re);
let nums = [-1, 0, 1, 2, -1, -4];
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    let pairSums = [];
    for (let i = 0; i < nums.length; i++) {
        let start = i + 1;
        let end = nums.length - 1;
        while (start < end) {
            let sum = nums[i] + nums[end] + nums[start];
            if (sum === 0) {
                pairSums.push([nums[i], nums[start], nums[end]]);
                if (nums[start] === nums[start + 1])
                    start++;
                if (nums[end] === nums[end - 1])
                    end--;
                start++;
                end--;
            }
            else if (sum < 0)
                start++;
            else
                end--;
        }
        while (nums[i + 1] === nums[i])
            i++;
    }
    return pairSums;
}
;
console.log(threeSum(nums));
// one pass algorithm/dutch flag algorithm
function sortColors(nums) {
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    let l = 0;
    let r = nums.length - 1;
    let i = 0;
    while (i <= r) {
        const n = nums[i];
        if (n === 0) {
            swap(i, l);
            l++;
            i++;
        }
        else if (n === 2) {
            swap(i, r);
            r--;
        }
        else {
            i++;
        }
    }
    console.log(nums);
}
// sortColors([0, 2, 1])
function Armstrong(num) {
    let n = num;
    let sum = 0;
    while (true) {
        let r = n % 10;
        sum = sum + Math.pow(r, 3);
        n = Math.floor(n / 10);
        if (n === 0)
            break;
    }
    if (num === sum)
        return true;
    return false;
}
const aN = Armstrong(407);
console.log(aN);
//# sourceMappingURL=app.js.map