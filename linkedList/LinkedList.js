//Definition of linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    } 

    getHead() {
        return this.head;
    }

    isEmpty() {
        return this.head === null;
    }

    getNodeByIndex(index) {
        let current = this.head;
        for(let i=0; i<index; i++) {
            current = current.next
        }
        return current;
    }

    getSize() {
        let current = this.head;
        let counter = 0;
        while(current) {
            current = current.next
            counter++;
        }

        return counter;
    }

    addTop(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    addTail(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
    }

    addNodeAt(index, value) {
        const newNode = new Node(value);
        let current = this.getNodeByIndex(index - 1);
        newNode.next = current.next;
        current.next = newNode;
    }

    removeHead() {
        this.head = this.head.next;
    }

    removeTail() {
        const nodeBeforeTail = this.getNodeByIndex(getSize() - 2);
        nodeBeforeTail.next = null;
        this.tail = nodeBeforeTail;
    }

    removeNodeAt(index) {
        if(index === 0) {
            removeHead();
            return;
        }
        
        if(index < 0 || index > this.getSize() - 1) {
            console.error("Error, node index does not exist");
        }

        let current = this.getNodeByIndex(index - 1);
        let deleteNode = current.next;
        current.next = deleteNode.next;
        deleteNode.next = null;
    }

    printList() {
        let current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
}