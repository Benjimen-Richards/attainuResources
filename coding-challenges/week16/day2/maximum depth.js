class tree
{
    constructor(val)
    {
        this.val = val
        this.right = null
        this.left = null
    }
}

class Binary
{
    constructor()
    {
        this.root = null
    }
    insert(data)
    {
        let node = new tree(data)
        if (!this.root)
            this.root = node
        else
            this.insert_element(this.root,node)
    }
    insert_element(root,node)
    {
        if (node.val < root.val)
        {
            if (root.left === null)
            {
                root.left = node
            }
            else
                this.insert_element(root.left,node)
        }
        else
        {
            if (root.right === null)
            {
                root.right = node
            }
            else
                this.insert_element(root.right,node) 
        }
    }
    getroot()
    {
        return this.root
    }
    preorder(root)
    {
        if (root)
        {
            console.log(root.val)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
    getheight(root)
    {
        if (!root)
            return 0
        else
        {
            return Math.max(this.getheight(root.left),this.getheight(root.right))+1
        }
    }

}
var BST = new Binary()
BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.insert(7); 
BST.insert(22); 
BST.insert(17); 
BST.insert(13); 
BST.insert(5); 
BST.insert(9); 
BST.insert(27); 
                      
var root = BST.getroot()
BST.preorder(root)
console.log('tree height is:')
console.log(BST.getheight(root))
