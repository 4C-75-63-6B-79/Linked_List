import LinkedList from "./linked_list.js";

let linkList = new LinkedList();
console.log('created a new empty link list');
console.log(`link list size: ${linkList.size()} | link list: ${linkList.toString()} `);

console.log(`${linkList.find(0)}`);

console.log('adding 0 to the linklist');
linkList.append(0);
console.log(`link list size: ${linkList.size()} | link list: ${linkList.toString()} `);

console.log('adding 1 to the linklist');
linkList.append(1);
console.log(`link list size: ${linkList.size()} | link list: ${linkList.toString()} `);

console.log('adding 2 to the linklist');
linkList.append(2);
console.log(`link list size: ${linkList.size()} | link list: ${linkList.toString()} `);

console.log('adding 3 to the linklist');
linkList.append(3);
console.log(`link list size: ${linkList.size()} | link list: ${linkList.toString()} `);

console.log('adding 4 to the linklist');
linkList.append(4);
console.log(`link list size: ${linkList.size()} | link list: ${linkList.toString()} `);

console.log('adding -1 to the front of linklist');
linkList.prepend(-1);
console.log(`link list size: ${linkList.size()} | link list: ${linkList.toString()} `);

console.log(`head of link list is (${linkList.head().value}) -> ${linkList.head().nextNode}`);

console.log(`tail of link list is (${linkList.tail().value}) -> ${linkList.tail().nextNode}`);

console.log(`node at index 2 is ${linkList.at(2) !== null ? linkList.at(2).value : null}`);
console.log(`node at index 7 is ${linkList.at(7) !== null ? linkList.at(2).value : null}`);

console.log(`link list size: ${linkList.size()} | link list: ${linkList.toString()} `);
console.log(`removing the last node in linklist using pop ${linkList.pop()}`);
console.log(`link list size: ${linkList.size()} | link list: ${linkList.toString()} `);

console.log('running pop function 6 times');
linkList.pop();linkList.pop();linkList.pop();linkList.pop();linkList.pop();linkList.pop();
console.log(`link list size: ${linkList.size()} | link list: ${linkList.toString()} `);

console.log('adding 0 to the linklist');
linkList.append(0);
console.log(`link list size: ${linkList.size()} | link list: ${linkList.toString()} `);

console.log('adding 1 to the linklist');
linkList.append(1);
console.log(`link list size: ${linkList.size()} | link list: ${linkList.toString()} `);

console.log('adding 2 to the linklist');
linkList.append(2);
console.log(`link list size: ${linkList.size()} | link list: ${linkList.toString()} `);

console.log('adding 3 to the linklist');
linkList.append(3);
console.log(`link list size: ${linkList.size()} | link list: ${linkList.toString()} `);

console.log('adding 4 to the linklist');
linkList.append(4);
console.log(`link list size: ${linkList.size()} | link list: ${linkList.toString()} `);

console.log('adding -1 to the front of linklist');
linkList.prepend(-1);
console.log(`link list size: ${linkList.size()} | link list: ${linkList.toString()} `);

console.log(`node at index 2 is ${linkList.at(2).value}`)

console.log(`checking if 3 is in the link list: ${linkList.contains(3) === true ? 'yes' : 'false'}`);
console.log(`checking if 8 is in the link list: ${linkList.contains(8) === true ? 'yes' : 'false'}`);


console.log(`link list size: ${linkList.size()} | link list: ${linkList.toString()} `);
console.log(`finding the index of value 3 in link list ${linkList.find(3) || 'not present in list'}`);
console.log(`finding the index of value 8 in link list ${linkList.find(8) || 'not present in list'}`);

console.log(`inserting the value of -0.5 at index 2`);
linkList.insert(-0.5, 6);
console.log(`link list size: ${linkList.size()} | link list: ${linkList.toString()} `);
console.log(`finding the index of value -0.5 in link list ${linkList.find(-0.5) !== null ? linkList.find(-0.5) : 'not present in list'}`);

console.log(`link list size: ${linkList.size()} | link list: ${linkList.toString()} `);
console.log(`delete node at index 7 ${linkList.removeAt(7).value}`);
console.log(`link list size: ${linkList.size()} | link list: ${linkList.toString()} `);