'''valid paranthesis'''


class stack:
    def __init__(self):
        self.__stack=[]
    def push(self,x):
        return self.__stack.append(x) 
    def pop(self):
        return self.__stack.pop()
    def peek(self):
        return self.__stack[len(self.__stack)-1]
    def is_empty(self):
        return len(self.__stack)==0
            
def match(top,par):
    if top=='(' and par==')':
        return True
    if top=='[' and par==']':
        return True
    if top=='{' and par=='}':
        return True
    
def solution(array):
    s=stack()
    idx=0
    end=True
    while idx<len(array):
        ele=array[idx]
        if ele in '([}':
            s.push(ele)
        else:
            if s.is_empty():
                end=False
            else:
                top=s.pop()
                if not match(top,ele):
                    end= False
            
        idx+=1
    if s.is_empty()==True and end==True:
        return True
    else:
        return False
if __name__ == "__main__":
    print(solution(['(',')','[',']']))