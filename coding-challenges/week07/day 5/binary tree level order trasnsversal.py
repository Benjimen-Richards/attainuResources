#Binary Tree Level Order Traversal
class TreeNode:
    def __init__(self,val):
        self.val=val
        self.left=None
        self.right=None

def getheight(root):
    if root is None:
        return 0

    return max(getheight(root.right),getheight(root.left))+1

def values(root,level,ans):
    if root is None:
        return

    if level==1:
        ans.append(root.val)
        return

    values(root.left,level-1,ans)
    values(root.right,level-1,ans)
    
def levelOrder(root):
    if root is None:
        return []

    res=[]
    height=getheight(root)
    for i in range(1,height+1):
        temp=[]
        values(root,i,temp)
        res.append(temp)

    print(res)
        

if __name__ == "__main__":
    root=TreeNode(3)
    root.left=TreeNode(9)
    root.right=TreeNode(20)
    root.right.left=TreeNode(15)
    root.right.right=TreeNode(7)
    levelOrder(root)