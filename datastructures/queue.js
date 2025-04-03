//622.Design circular queue leetcode
/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue = [];
    this.fixedSize = k;
    this.size = 0;
    this.rear = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isEmpty()) {
        this.queue.push(value);
        this.size++;
        return true
    }

    if(!this.isFull()) {
        this.queue.push(value);
        this.size++;
        this.rear >= this.fixedSize ? this.rear = 0 : this.rear++;
        return true
    }
    return false
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.size === 1) {
        this.queue.shift();
        this.size = 0;
        this.rear = 0;
        return true
    }

    if(!this.isEmpty()) {
        this.queue.shift();
        this.rear--;
        this.size--;
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.isEmpty() ? -1 : this.queue[0];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.isEmpty() ? -1 : this.queue[this.rear];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.size === this.fixedSize;
};