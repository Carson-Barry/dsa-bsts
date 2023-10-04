class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {

    if (!this.root) {
      this.root = new Node(val);
    }
    else {
      let currentNode = this.root;
      while (true) {
        
        if (val >= currentNode.val) {
          if (currentNode.right === null) {
            currentNode.right = new Node(val);
            break;
          }
          else {
            currentNode = currentNode.right;
          }
        }
        else {
          if (currentNode.left === null) {
            currentNode.left = new Node(val);
            break;
          }
          else {
            currentNode = currentNode.left;
          }
        }

      }
    }


    return this;

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {

    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val >= currentNode.val) {
      if (currentNode.right === null) {
        currentNode.right = new Node(val);
        return this;
      }
      this.insertRecursively(val, currentNode.right);
    }
    else {
      if (currentNode.left === null) {
        currentNode.left = new Node(val);
        return this;
      }
      this.insertRecursively(val, currentNode.left);
    }

    return this;

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

    let currentNode = this.root;

    while (true) {
      if (currentNode === null) return undefined;
      if (currentNode.val === val) return currentNode;
      if (val > currentNode.val) currentNode = currentNode.right;
      else currentNode = currentNode.left;
    }

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {


    if (currentNode === null) {
      return undefined;
    }
    else if (currentNode.val === val) {
      return currentNode;
    }
    else {
      if (val < currentNode.val) return this.findRecursively(val, currentNode.left)
      return this.findRecursively(val, currentNode.right)
    }

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }
}

module.exports = BinarySearchTree;
