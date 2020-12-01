from math import factorial


def next_permutations(nums):
    if not nums:
        return
    i = len(nums)-2
    flag = False
    for p in range(factorial(len(nums))):
        while i >= 0:
            if nums[i] < nums[i+1]:
                flag = True
                break
            i -= 1
        if not flag:
            nums.sort()
        else:
            max = maxofsubset(nums, nums[i], i)
            nums[i], nums[max] = nums[max], nums[i]
            nums[i+1:] = nums[i+1:][::-1]
        return nums


def maxofsubset(arr, curElem, index):
    temp = -1
    idx = 0
    for i in range(index, len(arr)):
        if arr[i] > curElem:
            if temp == -1:
                temp = curElem
                idx = i
            else:
                temp = min(temp, arr[i])
                idx = i
    return idx


if __name__ == "__main__":
    nums = [1, 2, 5, 4, 3]
    print(next_permutations(nums))
