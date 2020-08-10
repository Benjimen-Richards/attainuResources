class node:
    def __init__(self,val):
        self.val=val
        self.next=None

class queue:
    def __init__(self):
        self.front=None
        self.rear=None
    
    def push(self,x):
        if self.rear is None:
            self.front=self.rear=node(x)
        
        else:
            self.rear.next=node(x)
            self.rear=self.rear.next
    def pop(self):
        if self.front!=None:
            self.front=self.front.next
        
    def display(self):
        cur=self.front
        while cur:
            print(cur.val)
            cur=cur.next

if __name__ == "__main__":
    q=queue()
    q.push(9)
    q.push(2)
    q.push(3)
    q.push(4)
    q.push(5)
    q.display()