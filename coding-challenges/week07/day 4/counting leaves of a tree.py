'''    1
     /   \
   10    39
  /
5
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
    
    return left+right



if __name__ == "__main__":
    root=node(1)
    root.left=node(10)
    root.right=node(39)
    root.left.left=node(5)
    print('leaves of given tree are:',countLeaves(root))

