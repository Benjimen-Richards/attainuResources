class solution:
    def a(self,n):
        dp=[-1]*(2^96)
        return self.recursion(n,dp)
    def recursion(self,n,dp):
            if n<1:
                return 0
            if n==1:
                return 1
            if n==2:
                return 2
            if dp[n]!=-1:
                return dp[n]
            dp[n]=self.recursion(n-1,dp)+self.recursion(n-2,dp)
            return dp[n]
        
if __name__ == "__main__":
    n=34
    s=solution()
    print(s.a(n))
