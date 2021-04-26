//Write a function to check that a binary tree is a valid binary search tree.

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

function isBinaryTree(tree, max, min) {
    let rightResult;
    let leftResult;
    if(max && max < tree.value) {
        return false;
    }
    if(min && min > tree.value) {
        return false;
    }

    if(tree.right) {
        rightResult = isBinaryTree(tree.right, max, tree.value);
    }
    if(tree.left) {
        leftResult = isBinaryTree(tree.left, tree.value, min);
    }
    if(rightResult === false || leftResult === false) {
        return false;
    }
    return true;
}



//test cases

let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);

console.log(isBinaryTree(treeRoot)); // should be true;

treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(20);
leftNode.insertRight(60);
rightNode = treeRoot.insertRight(80);
rightNode.insertLeft(70);
rightNode.insertRight(90);
console.log(isBinaryTree(treeRoot))// should be false; 
