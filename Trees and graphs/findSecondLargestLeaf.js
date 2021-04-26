class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insertLeft(value) {
      this.left = new BinaryTreeNode(value);
      return this.left;
    }
  
    insertRight(value) {
      this.right = new BinaryTreeNode(value);
      return this.right;
    }
  }

function findSecondLargestLeaf(tree, prevHead, largest) {
    if(!largest) {
        if(!tree.right) {
            //found the largest leaf
            return findSecondLargestLeaf(tree, prevHead, tree.value);
        } else {
            return findSecondLargestLeaf(tree.right, tree.value, null);
        }
    } else {
        if(!tree.left) {
            return prevHead;
        } else {
            if(!tree.left.right){
                return tree.left.value;
            } else {
                const max = findTreeMaximum(tree.left.right);
                console.log(max);
                return max.value;
            }
        }
    }
}

function findTreeMaximum(tree) {
    if(!tree.right) {
         return tree;
    }
    findTreeMaximum(tree.right);
}

let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
leftNode = rightNode.insertLeft(60);
leftNode.insertRight(65);
leftNode = leftNode.insertLeft(55);
leftNode.insertRight(58);

console.log(findSecondLargestLeaf(treeRoot));