import Node from "./node.js";

export default function LinkedList() {
    this.Head = null;
}

LinkedList.prototype.append = function (value) {
    if(!this.Head) {
        this.Head = new Node(value);
    } else {
        let node = this.tail();
        while(node.nextNode) {
            node = node.nextNode;
        }
        node.nextNode = new Node(value);
    }
}

LinkedList.prototype.prepend = function (value) {
    if(!this.Head) {
        this.Head = new Node(value);
    } else {
        const node = new Node(value, this.Head);
        this.Head = node;
    }
}

LinkedList.prototype.size = function() {
    let node = this.Head;
    let count = 0;
    while(node) {
        node = node.nextNode;
        count += 1;
    }
    return count;
}

LinkedList.prototype.head = function() {
    return this.Head;
}

LinkedList.prototype.tail = function() {
    let node = this.Head;
    while(node.nextNode) {
        node = node.nextNode;
    }
    return node;
}

LinkedList.prototype.at = function(index) {
    if(index >= 0 && index < this.size()) {
        let node = this.Head;
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
    if(this.Head === null) {
        return null;
    }
    let node = this.Head;
    if(node.nextNode === null) {
        this.Head = null;
        return node;
    }
    while(node.nextNode.nextNode !== null) {
        node = node.nextNode;
    }
    const tailNodeValue = node.nextNode.value;
    node.nextNode = null;
    return tailNodeValue;
}

LinkedList.prototype.contains = function(value) {
    let node = this.Head;
    while(node) {
        if(node.value === value) {
            return true;
        }
        node = node.nextNode;
    }
    return false;
}

LinkedList.prototype.find = function(value) {
    let node = this.Head;
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
    let node = this.Head;
    const values = [];
    while(node) {
        values.push(`( ${node.value} )`);
        node = node.nextNode;
    }
    values.push('null');
    return values.join(" -> ");
}

LinkedList.prototype.insert = function(value, index) {
    // if index greater than size node added at the end;
    if(index < 0) {
        return false;
    } else if(index === 0) {
        const node = new Node(value, this.Head);
        this.Head = node;
        return true;
    } else if(index === this.size()) {
        this.tail().nextNode = new Node(value);
        return true;
    } else if(index > this.size()) {
        return false;
    }
    const prevNode = this.at(index-1);
    const newNode = new Node(value, prevNode.nextNode);
    prevNode.nextNode = newNode;
    return true;
}

LinkedList.prototype.removeAt = function(index) {
    if(index >= this.size() || index < 0) {
        return false;
    } else if(index === 0) {
        const deleteNode = this.Head;
        this.Head = this.Head.nextNode;
        return deleteNode
    }
    const prevNode = this.at(index-1);
    const deleteNode = prevNode.nextNode;
    prevNode.nextNode = deleteNode.nextNode;
    deleteNode.nextNode = null;
    return deleteNode;
}