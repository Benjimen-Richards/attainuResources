'''   1
    /   \
   2     3
    \
    5
'''
#counting leaves in a binary tree

class node:
    def __init__(self,val):
        self.val=val
        self.left=None
        self.right=None


def treepath(root,temp,res):
    if root is None:
        return 0
        
    if root.left is None and root.right is None:
        temp.append(str(root.val))
        res.append(temp[:])
        temp.pop()

    temp.append(str(root.val))
    treepath(root.left,temp,res)
    treepath(root.right,temp,res)
    temp.pop()
    return res

def values(root):
    res=[]
    temp=[]
    treepath(root,temp,res)
    ans=[]
    for i in res:
        ans.append('->'.join(i))
    return ans


if __name__ == "__main__":
    root=node(1)
    root.left=node(2)
    root.right=node(3)
    root.left.right=node(5)
    print('path of tree is',values(root))



 
