# Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of
# the two sorted array

# Input: nums1 = [1,3], nums2 = [2]
# Output: 2.00000
# Explanation: merged array = [1,2,3] and median is 2

if __name__ == "__main__":
    nums1 = [1, 2]
    nums2 = [3]
    result = sorted(nums1 + nums2)
    n = len(result)
    if(n % 2 == 0):
        print('even')
        mean = int(n/2)
        average = result[mean-1]+result[mean]
        print('median =', int(average)/2)
    else:
        print("odd")
        mean = n//2
        print(result[mean])
