import { BinarySearchTree } from "./datastructures/binarySearchTree/bst.js";

//Try your code here
function main() {
    let bst = new BinarySearchTree();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);
    bst.insert(14);
    bst.insert(17);
    console.log(bst.min(bst.root));
    console.log(bst.max(bst.root));
}

main();