class node:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def sum_result(root,res):
        if root is None:
            return 0

        res.append(root.val)
        sum_result(root.left,res)
        sum_result(root.right,res)
        return sum(res)

if __name__ == "__main__":
    root=node(1)
    root.left=node(2)
    root.right=node(3)
    root.left.right=node(5)
    res=[]
    print('sum of given tree:',sum_result(root,res))