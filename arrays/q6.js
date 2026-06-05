// Input: missing element in array

// Output: 5

class Solution {
    missingNumber(nums) {
        // number loop
        for (let i = 0; i <= nums.length; i++) {
            let found = false
            for (let j = 0; j <= nums.length; j++) {
                if (i == nums[j]) {
                    found = true;
                    break;
                }
            }

            if (!found) {
                return i
            }

        }
    }
}
let nums = [0, 2, 3, 1, 4]

const obj = new Solution()
obj.missingNumber(nums)