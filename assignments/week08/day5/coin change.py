def solve(coins,amount):
    dp=[0]+[float('inf')]*(amount+1)
    for coin in coins:
        for val in range(coin,amount+1):
            dp[val]=min(dp[val],dp[val-coin]+1)
    if dp[amount]!=float('inf'):
        return dp[amount]
    else:
        return[-1] 


if __name__ == "__main__":
    print(solve([1,2,5],11))