import { BinarySearchTree } from "./datastructures/binarySearchTree/bst.js";
import { invertTree } from "./datastructures/binarySearchTree/exercise/invertBinaryTree.js";

//Try your code here
function main() {
    let bst = new BinarySearchTree();
    bst.insert(4);
    bst.insert(2);
    bst.insert(7);
    bst.insert(1);
    bst.insert(3);
    bst.insert(6);
    bst.insert(9);
    console.log(invertTree(bst.root));
}

main();