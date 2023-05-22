// Node definition
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

// Linked list creation with linking
const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
a.next = b
b.next = c
c.next = d

// Traverse and print all 
const printAll = (head) => {
   let current = head;
   while(current !== null){
    console.log(current.value)
    current = current.next;
   }
}
printAll(a)

// Traverse and print all with recursion
const printAllRec = (head) => {
  if(head === null){
    return;
  }
  console.log(head.value);
  printAllRec(head.next);
}
printAllRec(a);