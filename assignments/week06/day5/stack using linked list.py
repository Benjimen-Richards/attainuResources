class linkedlist:
    def __init__(self,value):
        self.value=value
        self.next=None

class stack:
    def __init__(self):
        self.head=None
    
    def push(self,x):
        
        if self.head==None:
            self.head=linkedlist(x)
        
        else:
            new=linkedlist(x)
            new.next=self.head
            self.head=new

    def pop(self):
        if self.head==None:
            return None
        
        else:
            pop=self.head
            self.head=self.head.next
            pop.next=None
            return pop.value

    def display(self):
        cur=self.head
        while cur!=None:
            print(cur.value,'->',end=" ")
            cur=cur.next

    def peek(self):
        if self.head==None:
            return None
        
        else:
            return self.head.value
    
if __name__ == "__main__":
    s=stack()
    s.push(1)
    s.push(2)
    s.push(3)
    s.push(4)
    s.push(5)
    s.push(6)
    print('stack eleemnts are:')
    s.display()
    print('\npoped',s.pop())   
    print('peek',s.peek())
    print('stack eleemnts are:')
    s.display()
   