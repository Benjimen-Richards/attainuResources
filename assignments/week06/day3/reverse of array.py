#L = 9, N = 2
#value[] = {1,2,3,4,5,6,7,8,9}
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
def reverse(head):
    cur=head
    prev=None
    while cur:
        new=cur.next
        cur.next=prev
        prev=cur
        cur=new
    return prev
    
    


    
        
if __name__ == "__main__":
    head=None
    head=add(head,1)
    head=add(head,2)
    head=add(head,3)
    head=add(head,4)
    head=add(head,5)
    head=add(head,6)
    new=reverse(head)
    f(new)