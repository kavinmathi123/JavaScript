let nums = [2, 9, 11, 15];
let target = 9;
let Ans = [];
let ArrayTar = function (nums, target) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {  // Start from index 0
        for (let j = i + 1; j < n; j++) {  // Start j from i+1 to avoid repeating pairs
            if (nums[j] == target - nums[i]) {  // If the pair sums to target
                Ans[0] = i;  // Store index i
                Ans[1] = j;  // Store index j
                return Ans;  // Return immediately after finding the first pair
            }
        }
    }
    return Ans;  // Return empty if no pair is found
}
console.log(ArrayTar(nums, target));  // Output: [0, 1]

