//Q2 :
//  Implementing a Queue Data Structure using Two Stacks


class QueueStacks{
      constructor (){
        this.stack1 =[];
        this .stack2 =[];
      }



enqueue(ele){
    this.stack1.push(ele);
}

dequeue() {
    if (this.isEmpty()) {
        return "Queue is empty";
    }

    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }

    return this.stack2.pop(); 
}



front(){
    if(this.isEmpty()){
        return "Queue is empty";
    }

    if(this.stack2.length === 0){
        while(this.stack1.length>0){
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2[this.stack2.length -1]
}




isEmpty(){
    return this.stack1.length === 0 && this.stack2.length ===0;
}


size(){
    return this.stack1.length +this.stack2.length 
}


printQueue(){
    let queueEle = [...this.stack2.reverse() , ...this.stack1]
    console.log(queueEle.join(''));
}

}


let queue = new QueueStacks();
queue.enqueue(27);
queue.enqueue(27);
queue.enqueue(27);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(33);
queue.enqueue(33);
queue.enqueue(40)
queue.printQueue();  