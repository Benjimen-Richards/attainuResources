#count of given list
class node:
    def __init__(self,val):
        self.val=val
        self.next=None

def add(head,x):
    if head is None:
        return node(x)
    cur=head
    while cur.next!=None:
        cur=cur.next
    cur.next=node(x)
    return head
def f(head):
    cur=head
    while cur!=None:
        print(cur.val)
        cur=cur.next
def count(head):
    cur=head
    count=0
    while cur:
        count+=1
        cur=cur.next
    return count
    
        
if __name__ == "__main__":
    head=None
    head=add(head,1)
    head=add(head,2)
    head=add(head,3)
    head=add(head,4)
    head=add(head,5)
    head=add(head,6)
    print('count of given list',count(head))
