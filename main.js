import LinkedList from "./linked-list.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("bird");
list.prepend("alpacac");
list.append("cat");
console.log(list.tail());
console.log(list.size());
console.log(list.at(0));
console.log(list.at(1));
console.log(list.at(4));
list.pop();
console.log(list.contains("bird"));
console.log(list.contains("saosifoaid"));
console.log(list.find("bird"));
console.log(list.toString());
