/*
Symbol.split
Symbol.toStringTag
Symbol.iterator*/

const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator](){
        for(var i = 0; i < this.values.length; i++){
            yield this.values[i];
        }
    }
};


/*const uniqueId = Symbol('Hello');

const obj = {
    [uniqueId]: 'Hello'
};

console.log(obj);*/