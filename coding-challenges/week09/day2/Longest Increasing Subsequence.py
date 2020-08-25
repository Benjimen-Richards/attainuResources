def solve(nums):
        if not nums:
            return 0
        res =[1]*len(nums)
        res[-1] = 1
        for i in reversed(range(len(nums))):
            for j in range(i+1, len(nums)):
                if nums[i] < nums[j]:
                    res[i] = max(res[i], res[j] + 1)
        return max(res)

if __name__ == "__main__":
    a=[10,9,2,5,3,7,101,18]
    print(solve(a))