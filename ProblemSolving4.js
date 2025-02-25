//Q4
//Create a function that takes a LinkedList and reverses it
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtEnd(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next; // تخزين العنصر التالي
            current.next = prev; // عكس الرابط
            prev = current; // تحريك `prev` إلى العقدة الحالية
            current = next; // تحريك `current` إلى العقدة التالية
        }

        this.head = prev; // تعيين الرأس الجديد
    }

    printList() {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.data + " -> ";
            current = current.next;
        }
        console.log(output + "null");
    }
}

// 🔹 تجربة الكود
let list = new LinkedList();
list.insertAtEnd(1);
list.insertAtEnd(2);
list.insertAtEnd(3);


list.printList();

list.reverse();

list.printList();
