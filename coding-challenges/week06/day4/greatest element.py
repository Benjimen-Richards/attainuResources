#greatest element of given array
class xstack:
    def __init__(self):
        self.stack=[]
    def push(self,x):
        return self.stack.append(x)
    def pop(self):
        return self.stack.pop()
    def empty(self):
        return len(self.stack)==0
    def peek(self):
        return self.stack[len(self.stack)-1]
def solution(array):
    s=xstack()
    idx=0
    while idx<len(array):
        number=array[idx]
        if s.empty():
            s.push(number)
        else:
            while not s.empty() and s.peek()<number :
                print(s.peek(),number)
                s.pop()
            s.push(number)
        idx+=1
    while not s.empty():
        print(s.peek(),-1)
        s.pop()

if __name__ == "__main__":
    solution([2,1,5,3,7])