

//Q1 : 
// Given an array arr[] of size N, you have to reverse the array using Stack 


 let arr=[27 , 28 , 29 , 30 , 31,32 ,33]
  

class Stack{
    constructor(){
        this.item=[];
    }


    push(ele){
        this.item.push(ele);
    }

    pop(ele){
        return this.item.length === 0 ? null : this.item.pop();

    }

    isEmpty(){
        return this.item.length === 0;

    }

}


function reverseArr(arr){
     let stack =new Stack();


     for (let i=0 ; i<arr.length ; i++){
        stack.push(arr[i]);
    
     }
     
     for( let i=0 ; i<arr.length ; i++){
        arr[i]=stack.pop();
     }

      return arr;
}


console.log(  'reverseArr' , reverseArr(arr))





