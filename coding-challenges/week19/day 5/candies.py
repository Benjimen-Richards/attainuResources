# There are N children standing in a line. Each child is assigned a rating value.
# You are giving candies to these children subjected to the following requirements:
# • Each child must have at least one candy.
# • Children with a higher rating get more candies than their neighbors.
# What is the minimum candies you must give?
# Example 1:
# Input: [1,0,2]
# Output: 5
# Explanation: You can allocate to the first, second and third child with 2, 1, 2
# candies respectively.
# Example 2:
# Input: [1,2,2]
# Output: 4
# Explanation: You can allocate to the first, second and third child with 1, 2, 1
# candies respectively.
#  The third child gets 1 candy because it satisfies the above two
# conditions.
def solve(list):
    if not list:
        return 0
    candies = [1]
    for i in range(len(list)-1):
        if list [i] < list [i+1]:
            candies.append(candies[-1]+1)
        else:
            candies.append(1)
    for i in reversed(range(len(list)-1)):
        if list [i] > list [i+1]:
            candies[i] = max(candies[i],candies[i+1]+1)
        
    return sum(candies)



if __name__ == "__main__":
    ratings = [1,2,2]
    print(solve(ratings))