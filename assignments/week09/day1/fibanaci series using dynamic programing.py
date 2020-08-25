#fibanaci series using dynamic programing

class solution:
    dp=[-1]*10000

    def fibnaco(self,n):
        if n==0:
            return 0
        if n==1:
            return 1

        ans=self.fibnaco(n-1)+self.fibnaco(n-2)
        self.dp[ans]=ans
        if self.dp[ans]!=-1:
            return self.dp[ans]
        

if __name__ == "__main__":
    n=9
    s=solution()
    print('fibanaco of given number:',s.fibnaco(n))