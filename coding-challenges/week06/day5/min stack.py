'''["MinStack","push","push","push","getMin","pop","top","getMin"]'''
class MinStack(object):
    def __init__(self):
        self.min=float('inf')
        self.stack = []
    
    def push(self, x):
            a=min(x,self.min)
            self.stack.append(a)
            self.min=x
        
    def printf(self):
            print(self.stack)

    def pop(self):
            self.stack.pop()
            self.min = self.stack[-1]
    def top(self):
        print( self.stack[-1])
    def getMin(self):
        print(self.min)
m = MinStack()
m.push(-2)
m.push(0)
m.push(-3)
m.getMin()
m.pop()
m.top()
m.getMin()
