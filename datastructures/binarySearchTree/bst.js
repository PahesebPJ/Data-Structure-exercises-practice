class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertValue(this.root, newNode);
        }
    }

    insertValue(root, newNode) {
        if(newNode.value < root.value) {
            if(root.left === null) {
                root.left = newNode;
            } else {
                this.insertValue(root.left, newNode);
            }
        }else if(newNode.value > root.value) {
            if(root.right === null) {
                root.right = newNode;
            }else {
                this.insertValue(root.right, newNode);
            }
        }
    }

    searchValue(root, value) {
        if(root != null) {
            if(value < root.value) {
                return this.searchValue(root.left, value);
            }else if(value > root.value) {
                return this.searchValue(root.right, value);
            }else {
                return true;
            }
        }else {
            return false;
        }
    }

    preOrder(root) {
        if(root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if(root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if(root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    levelOrder() {
        const queue = [];
        if(this.isEmpty()) {
            return this.root;
        }else {
            queue.push(this.root);
            let current;
            while(queue.length) {
                current = queue.shift();
                console.log(current.value);
                if(current.left) {
                    queue.push(current.left);
                }
                if (current.right){
                    queue.push(current.right);
                }
            }
        }
    }

    min(root) {
        if(root.left) {
            return this.min(root.left);
        }else {
            return root.value;
        }
    }

    max(root) {
        if(root.right) {
            return this.max(root.right);
        }else {
            return root.value;
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if(root === null) {
            return root;
        }
        if(value < root.value) {
            root.left = this.deleteNode(root.left, value);
        }else if(value > root.value) {
            root.right = this.deleteNode(root.right, value);
        }else {
            if(!root.left && !root.right) {
                return null;
            }
            if(!root.left) {
                return root.right;
            } else if(!root.right) {
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
}