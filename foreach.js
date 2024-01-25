//create a foreach function
function foreach(arr, task){
    var arr2 = [];// empty array of result
    for (let index = 0; index < arr.length; index++) {
        arr2[index]= task(arr[index])
    }
    return arr2;
}

//1 
let result = foreach([6,2,3,4,5], function(num) { return num*2; });
console.log(result); //this should log [12,4,6,8,10]
//2
result = foreach([1,2,3,"kodego", "bootcamp"], function(val) {
    if(typeof(val) === 'number') { 
        return 0;
    }
    else {
        return val;
    }
});
console.log(result); //this should log [0,0,0,"kodego","bootcamp"];
//3
result = foreach([1,2,3,"hello"], function(val) { return typeof(val); });
console.log(result); //this should log ["number", "number", "number", "string"];