
//create a filter function
function filter(arr,task) {
    var arr2 = [];
    for (let index = 0; index < arr.length; index++) {
        task(arr[index])===true? arr2.push(arr[index]): index = index;
        }
    return arr2;
};


/*1*/
let result = filter([1,2,3,4,15], function(val) { return val<10; }); //this filters each value in the array and only allows values that is less than 10
console.log(result); //this should log [1,2,3,4]

/*2*/
result = filter([1,2,3,4,15], function(val) { return val<3; }); //only allows values that is less than 3
console.log(result); //this should log [1,2]