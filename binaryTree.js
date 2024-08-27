class Node {
  constructor(data = null, leftChild = null, rightChild = null) {
    data, leftChild, rightChild;
  }
}

class BinaryTree {
  constructor(array) {
    const sortedArray = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(sortedArray);
  }

  buildTree(sortedArray) {
    if (sortedArray.length === 0) return null;

    const middleNode = Math.floor(sortedArray.length / 2);
    const newNode = new Node(sortedArray[middleNode]);
    newNode.leftChild = this.buildTree(sortedArray.slice(0, middleNode));
    newNode.rightChild = this.buildTree(sortedArray.slice(middleNode + 1));
    return newNode;
  }
}

const array = [1, 5, 4, 7, 2, 3, 9, 8, 10];
const tree = new BinaryTree(array);
console.log(tree);
