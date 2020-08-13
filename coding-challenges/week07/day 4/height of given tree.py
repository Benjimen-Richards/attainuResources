'''  1
    /  \
   2    3
'''
#counting leaves in a binary tree

class node:
    def __init__(self,val):
        self.val=val
        self.left=None
        self.right=None


def countLeaves(root):
    if root is None:
        return 0
        
    if root.left is None and root.right is None:
        return 1
        
    left=countLeaves(root.left)
    right=countLeaves(root.right)
    
    return  max(left,right)+1


if __name__ == "__main__":
    root=node(1)
    root.left=node(2)
    root.right=node(3)
    print('height of given tree is:',countLeaves(root))

