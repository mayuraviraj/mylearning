// Node definition
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

// Linked list creation with linking
const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
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
//printAll(a)

// Traverse and print all with recursion
const printAllRec = (head) => {
  if(head === null){
    return;
  }
  console.log(head.value);
  printAllRec(head.next);
}

const getSum = (head) => {
  let current = head;
  let sum = 0;
  while(current != null){
    sum += current.value;
    current = current.next; 
  }
  return sum;
}

const getSumRec = (head, sum) => {
  if(head == null){
    return sum;
  }

  sum = sum + head.value;
  return getSumRec(head.next, sum);
}
//printAllRec(a);
//console.log(getSum(a));
console.log(getSumRec(a, 0));