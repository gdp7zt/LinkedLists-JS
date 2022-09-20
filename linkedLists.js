class LinkedList {
    constructor(){
        this.head = null;
    }

    append(value){
        let newNode = new Node(value);
        if(!this.head) this.head = newNode;
        else{
            let temp = this.head;
            while(temp.nextNode !== null){
                temp = temp.nextNode;
            }
            temp.nextNode = newNode;
        }
    }

    prepend(value){
        let newNode = new Node(value);
        if(!this.head) this.head = newNode;
        else {
            let temp = this.head;
            this.head = newNode;
            newNode.nextNode = temp;
        }
    }

    size(){
        let size = 1;
        if(!this.head) return null;
        let temp = this.head;
        while(temp.nextNode !== null){
            temp = temp.nextNode;
            size++;
        }
        return size;
    }

    headNode(){
        if(this.head === null) return null;
        return this.head.value;
    }

    tail(){
        if(this.head === null) return null;
        let temp = this.head;
        while(temp.nextNode !== null){
            temp = temp.nextNode;
        }
        return temp.value;
    }

    at(index){
        if(this.head === null) return null;
        if(index-1 > this.size()) return null;
        let temp = this.head;
        for(let i = 0; i < index; i++){
            temp = temp.nextNode;
        }
        return temp;
    }

    pop(){
        if(this.head === null) return null;
        let temp = this.head;
        if(this.head.nextNode === null){
            this.head = null;
        }
        this.at(this.size() - 2).nextNode = null;
    }

    contains(value){
        if(this.head === null) return false;
        let temp = this.head;
        while(temp.nextNode !== null){
            if(value === temp.value) return true;
            temp = temp.nextNode;
        }
        if(value === temp.value) return true;
        return false;
    }

    find(value){
        if(this.head === null) return null;
        let temp = this.head;
        let counter = 0;
        while(temp.nextNode !== null){
            if(temp.value === value) return counter;
            temp = temp.nextNode;
            counter++;
        }
        if(temp.value === value) return counter;
        return null;
    }

    toString(){
        if(this.head === null) return null;
        let string = '';
        let temp = this.head;
        while(temp.nextNode !== null){
            string += `${temp.value} -> `;
            temp = temp.nextNode;
        }
        string += `${temp.value} -> null`;
        console.log(string);
        return string;
    }

    insertAt(value, index){
        if(this.head === null) return null;
        let newNode = new Node(value);
        let temp = this.head;
        if(index === 0){
            newNode.nextNode = this.head;
            this.head = newNode;
            return;
        }
        for(let i = 1; i < index; i++){
            temp = temp.nextNode;
        }
        newNode.nextNode = temp.nextNode;
        temp.nextNode = newNode;
    }

    removeAt(index){
        if(this.head === null) return null;
        if(index > this.size() || index < 0) return;
        let temp = this.head;
        if(index === 0) {
            this.head = this.head.nextNode;
        }
        for(let i = 1; i < index; i++){
            temp = temp.nextNode;
        }
        temp.nextNode = temp.nextNode.nextNode;
    }
}

class Node {
    constructor(value){
        this.value = null;
        if(value) this.value = value;
        this.nextNode = null;
    }
}