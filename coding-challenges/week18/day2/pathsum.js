// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the
// given sum.
// Note: A leaf is a node with no children.
// Example:
// Given the below binary tree and sum = 22,
//  5
//  / \
//  4 8
//  / / \
//  11 13 4
// / \ / \
// 7 2 5 1
// Return:
// [
//  [5,4,11,2],
//  [5,8,4,5]
// ]
class Treenode{
    constructor(val)
    {
        this.val = val
        this.left = null
        this.right = null
    }
}
class BST{
    constructor()
    {
        this.root = null
    }
    insert(data){
        
        var node = new Treenode(data)
        if(this.root === null)
        {
            this.root = node
        }
        else{
            this.insert_element(this.root,node)
        }
    }
    insert_element(root,node)
    {
        if (node.val > root.val)
        {
            if(root.right === null)
                root.right = node
            else
                this.insert_element(root.right , node)
        }
        else{
            if(root.left === null)
                root.left = node
            else
                this.insert_element(root.left , node)
        }
    }
    getRootNode()
    {
        return this.root
    }
    preorder(root)
    {
        if (root){
            console.log(root.val)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
    pathsum(root,sum,res,temp)
    {
        if (sum === 0)
        {
            return
        }
        if(root===null)
        {
            temp.push(root.val)
            res.push(temp)
            temp = []
        }
        temp.push(root.val)
        this.pathsum(root.left,sum-root.val,res,temp)
        
        return res
    }
}

var Binary = new BST()
Binary.insert(5) 
Binary.insert(4) 
Binary.insert(8) 
Binary.insert(11) 
Binary.insert(13) 
Binary.insert(4) 
Binary.insert(7) 
Binary.insert(2) 
Binary.insert(5) 
Binary.insert(1) 
var root = Binary.getRootNode()
// Binary.preorder(root)
console.log(Binary.pathsum(root,22,[],[]))