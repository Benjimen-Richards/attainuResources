#paranthesis generation


class Solution(object):
   def generate1(self, n):
      result = []
      self.generate2(n,n,"",result)
      return result
   def generate2(self, left,right,temp,result):
      if left == 0 and right == 0:
         result.append(temp)
         return
      if left>0:
         self.generate2(left-1,right,temp+'(',result)
      if right > left:
         self.generate2(left, right-1, temp + ')', result)
ob = Solution()
print(ob.generate1(int(input('enter a number\n'))))