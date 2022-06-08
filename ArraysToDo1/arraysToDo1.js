function pushFront(arr, val){
    var newArr = [val, ...arr];
    return newArr;
}

function popFront(arr){
    var [val, ...newArr] = arr;
    console.log("Popped Array:   ", newArr);
    return val;
}

function insertAt(arr,index,val) {
    var newArr = [];
    for(i = 0; i < index; i++){
        newArr[i] = arr[i];
    }
    newArr.push(val);
    for(i = index; i < arr.length; i++){
        newArr.push(arr[i]);
    }
    return newArr;
}

function removeAt(arr,index){
    var newArr = [];
    var val = arr[index];
    for (i = 0; i < index; i++){
        newArr.push(arr[i]);
    }
    for(i = index; i < arr.length - 1; i++){
        newArr.push(arr[i + 1]);
    }
    console.log(val, " removed at index ", index);
    console.log("New Array :     ", newArr);
    return val;
}

function swapPairs(arr){
    var val = 0;
    if ( arr.length%2 == 0 ){
        for(i = 0; i < arr.length; i+=2){
            val = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = val;
        }
    } else {
        for(i = 0; i < arr.length - 1; i+=2){
            val = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = val;
        }
    }

    console.log("Swapped Array:  ", arr);
}

function removeDups(arr){
    var newArr = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] != arr[i+1]){
            newArr.push(arr[i])
        }
    }
    console.log("Remove multis:  ", newArr);
}

var testArr = [5,7,2,3];
var testArr2 = [3,7,2,3,8,4]
var testValue = 8;

console.log("Original Array: ", [5,7,2,3]);
testArr = pushFront([5,7,2,3],8)
console.log("New Array :     ", testArr, "Value pushed to front:   ", 8);

console.log("Original Array: ", [99]);
testArr = pushFront([99],7)
console.log("New Array :     ", testArr, "Value pushed to front:   ", 7);



console.log("Original Array: ", [0,5,10,15], "Value popped from front: ", popFront([0,5,10,15]));
console.log("Original Array: ", [4,5,7,9], "Value popped from front: ", popFront([4,5,7,9]));

testValue = 311;
testIndex = 2;
console.log("Original Array: ", [100,200,5]);
testArr = insertAt([100,200,5],testIndex,testValue);
console.log("New Array: ", testArr );
console.log("Index to insert: ", testIndex);
console.log("Value inserted: ", testValue);

testValue = 42;
testIndex = 1;
console.log("Original Array: ", [9,33,7]);
testArr = insertAt([9,33,7],testIndex,testValue);
console.log("New Array: ", testArr );
console.log("Index to insert: ", testIndex);
console.log("Value inserted: ", testValue);

testIndex = 1;
console.log("Original Array: ", [1000,3,204,77]);
removeAt([1000,3,204,77], testIndex);

testIndex = 3;
console.log("Original Array: ", [8,20,55,44,98]);
removeAt([8,20,55,44,98], testIndex);

console.log("Original Array: ", [1,2,3,4]);
swapPairs([1,2,3,4]);

console.log("Original Array: ", [-2,-2,3.14,5,5,10]);
removeDups([-2,-2,3.14,5,5,10]);

console.log("Original Array: ", [9,19,19,19,19,19,29]);
removeDups([9,19,19,19,19,19,29]);