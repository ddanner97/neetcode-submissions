class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {

        const product: number[] = new Array(nums.length).fill(1)

        let prefix: number = 1
        for (let i: number = 0; i < product.length; i++) {
            product[i] = prefix
            prefix *= nums[i]
        }

        let suffix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            product[i] *= suffix;
            suffix *= nums[i];
        }

        return product

    }
}
