class solution:
    
    def coinchange(self,coins,amount):
        dp=[0]+[float('inf')]*(amount)
        for c in coins:
            for val in range(c,amount+1):
                dp[val]=min(dp[val],dp[val-c]+1)

        if dp[amount]!=float('inf'):
            return dp[amount]
        else:
            return -1


if __name__ == "__main__":
    s=solution()
    print(s.coinchange([1,2,5],11))
