import Node from "./node";

function LinkedList() {
    this.head = null;
}

LinkedList.prototype.append = function (value) {
    if(!this.head) {
        this.head = new Node(value);
    } else {
        let node = this.tail();
        while(node.nextNode) {
            node = node.nextNode;
        }
        node.nextNode = new Node(value);
    }
}

LinkedList.prototype.prepend = function (value) {
    if(!this.head) {
        this.head = new Node(value);
    } else {
        const node = new Node(value, this.head);
        this.head = node;
    }
}

LinkedList.prototype.size = function() {
    let node = this.head;
    let count = 0;
    while(node) {
        node = node.nextNode;
        count += 1;
    }
    return count;
}

LinkedList.prototype.head = function() {
    return this.head;
}

LinkedList.prototype.tail = function() {
    let node = this.head.nextNodeNode;
    while(node.nextNode) {
        node = node.nextNode;
    }
    return node;
}

LinkedList.prototype.at = function(index) {
    if(index < this.size) {
        let node = this.head;
        let count = 0
        while(count < index) {
            node = node.nextNode;
            count += 1;
        }
        return node;
    }
    return null;
}

LinkedList.prototype.pop = function() {
    let node = this.head;
    while(node.nextNode.nextNode) {
        node = node.nextNode;
    }
    const tailNodeValue = node.nextNode.value;
    node.nextNode = null;
    return tailNodeValue;
}

LinkedList.prototype.contains = function(value) {
    let node = this.head;
    while(node) {
        if(node.value === value) {
            return true;
        }
        node = node.nextNode;
    }
    return false;
}

LinkedList.prototype.find = function(value) {
    let node = this.head;
    let count = 0;
    while(node) {
        if(node.value === value) {
            return count;
        }
        count += 1;
        node = node.nextNode;
    }
    return null;
}

LinkedList.prototype.toString = function() {
    let node = this.head;
    const values = [];
    while(node) {
        values.push(`( ${node.value} )`);
        node = node.nextNode;
    }
    values.push(null);
    return values.join(" -> ");
}