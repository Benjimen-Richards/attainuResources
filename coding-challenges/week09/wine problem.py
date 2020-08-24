class solution:
    dp=[[[-1 for x in range(100)] for x in range(100)] for x in range(100)]

    def solve(self,a,start,end,year):
        if start>end:
            return 0
        if self.dp[start][end][year]!=-1:
            return self.dp[start][end][year]

        ans=max(
                a[start]*year+self.solve(a,start+1,end,year+1),
                a[end]*year+self.solve(a,start,end-1,year+1)
                )
        return ans

if __name__ == "__main__":
    a=[2,4,6,2,4]
    s=solution()
    print(s.solve(a,0,len(a)-1,1))
