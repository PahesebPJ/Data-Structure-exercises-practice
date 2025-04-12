function rev(node) {
    if(node.left || node.right) {
        const tempNode = node.left;
        node.left = node.right;
        node.right = tempNode;    
    }
}

export function invertTree(root) {
    if(!root) {
        return root;
    }
    const queue = [];
    queue.push(root);
    let current;
    while(queue.length){
        current = queue.shift();
        rev(current);
        if(current.left) {
            queue.push(current.left);
        }
        if(current.right) {
            queue.push(current.right);
        }
    }
    return root;
};