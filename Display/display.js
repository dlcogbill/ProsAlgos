class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(val) {
        var new_node = new Node(val);

        if(!this.head) {
            this.head = new_node;
            return this;
        }
        //point the new node to the head
        new_node.next = this.head;
        //change the head to new node
        this.head = new_node;
        //return pointer to head
        return this.head;
    }

    removeFront() {
        if(!this.head) {
            return null;
        }
        this.head = this.head.next;
        return this.head;
    }

    front() {
        if (!this.head) {
            return null;
        }else return this.head.data;
    }

    display() {
        if (!this.head) {
            return null;
        }
        var runner = this.head;
        var output = '';

        while(runner !== null) {
            output += runner.data + ' ';
            runner = runner.next;
        }
        console.log(output);
    }
}

SLL1 = new SLL();
SLL1.addFront(76);
SLL1.addFront(2);
SLL1.display();
SLL1.addFront(11.41);
SLL1.display();