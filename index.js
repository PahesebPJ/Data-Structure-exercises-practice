import LinkedList from "./linkedList/LinkedList.js";
import { isPalindrome } from "./linkedList/exercises/palindromeLinkedList.js";

//Try your code here
function main() {
    let linkedList = new LinkedList();
    let linkedList2 = new LinkedList();

    linkedList.addTop(1);
    linkedList.addTop(2);
    linkedList.addTop(2);
    linkedList.addTop(1);
    
    linkedList2.addTop(2);
    linkedList2.addTop(1);

   console.log(isPalindrome(linkedList.head));
   console.log(isPalindrome(linkedList2.head));
}

main();