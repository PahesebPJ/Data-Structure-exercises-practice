export const isPalindrome = (head) => {
    let current = head;
    let str = '';
    while(current) {
        str += current.value;
        current = current.next;
    }
    const reverseStr = str.split('').reverse().join('');
    if(reverseStr === str ) return true;
    return false;
}

export const isPalindromeTwoPointerApproach = (head) => {
    let fast = head, slow = head,reverse = null, prev, mid;
    while(fast != null && fast.next != null){
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
        prev.next = reverse;
        reverse = prev;
    }
    mid = prev;
    if(fast != null){
        slow = slow.next;
    }
    while(slow != null){
        if(slow.val != mid.val){
            return false;
        }
        slow = slow.next;
        mid = mid.next;
    }
    return true;
}