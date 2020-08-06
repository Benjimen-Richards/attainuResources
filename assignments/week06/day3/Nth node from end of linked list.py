#L = 9, N = 2
#value[] = {1,2,3,4,5,6,7,8,9}
class node:
    def __init__(self,val):
        self.val=val
        self.next=None
class linkedlist:
    def add(self,head,x):
        if head is None:
            return node(x)
        cur=head
        while cur.next!=None:
            cur=cur.next
        cur.next=node(x)
        return head
    def print(self,head):
        cur=head
        while cur!=None:
            print(cur.val)
            cur=cur.next
    def nthnode(self,head,number):
        cur=head
        count=0
        while cur!=None:
            count+=1
            cur=cur.next
        l=(count)-number
        if l>0:
            cur=head
            while l>0:
                cur=cur.next
                l-=1
            res=cur
            return res.val
        elif l==0:
            return head.val
        else:
            return -1

        
if __name__ == "__main__":
    l,nth=map(int,input('enter length of list and nth node \n').strip().split())
    n=list(map(int,input(f"Enter list with {l} element \n").strip('][').split(',')))
    x=node(n[0])
    y=linkedlist()
    if len(n)<=l:
        for i in range(1,l):
            x=y.add(x,n[i])
        print('nth node backwards is ',y.nthnode(x,nth))
    else:
        print('list exceeds required size\n')
