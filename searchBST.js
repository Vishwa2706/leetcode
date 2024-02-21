function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

 var searchBST = function(root, val) {
    if (!root || root.val === val) {
        return root;
    }

    if (val < root.val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
}

// Example usage:
// Create a binary search tree
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

const val = 2;
console.log(searchBST(root, val)); // Output: TreeNode { val: 2, left: TreeNode { val: 1, left: null, right: null }, right: TreeNode { val: 3, left: null, right: null } }
