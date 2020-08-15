class node:
    def __init__(self,data):
        self.data = data
        self.next = None
        
def deleteAllOccurances(head, k):
    if not head:
        return 
    cur=head
    prev=None
    while cur and cur.data == k:
        head = cur.next
        cur = head
    
    while cur:
        while cur and cur.data !=k:
            prev=cur
            cur=cur.next  
        if not cur:
            return head

        prev.next=cur.next
        cur=prev.next

    return head
def f(head):
    cur=head
    while cur!=None:
        print(cur.data)
        cur=cur.next
            
root=node(2)
root.next=node(2)
root.next.next=node(1)
root.next.next.next=node(4)
root.next.next.next.next=node(4)

deleteAllOccurances(root,2)
f(root)
