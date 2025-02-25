//Q5:
//Create a function that takes a LinkedList and deletes the middle node in it and returns it

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function deleteMiddleNode(head) {
    if (!head || !head.next) return null; 

    let slow = head, fast = head, prev = null;

    while (fast && fast.next) {
        prev = slow;         
        slow = slow.next;   
        fast = fast.next.next; 
    }

   
    prev.next = slow.next;

    return head; 
}


function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}


function printLinkedList(head) {
    let current = head;
    let output = [];
    while (current) {
        output.push(current.value);
        current = current.next;
    }
    console.log(output.join(" -> "));
}

// Example Usage
let head = createLinkedList([1, 2, 3, 4, 5]);
console.log("Original");
printLinkedList(head);

head = deleteMiddleNode(head);
console.log(" after deleting:");
printLinkedList(head);
