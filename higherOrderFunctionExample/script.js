//higher order function is a function also executes a funcgtion or return a function

//ONE: EXECUTE FUNCTION
//callback: do something then do another thing

// function sing(callback){
//     console.log("la la la")
//     callback()
        
// }
// function meow(){
//     console.log("meow")
// }
// sing(meow)



//TWO: RETURN A FUCTION
// function multiplier(factor){
//     return function(x){
//         return x * factor;
//     }
//     //和上面那坨一个功效 用的arrow function哈哈哈哈 
//     //return x => x * factor
// }
// let doubler = multiplier(2)
// console.log(doubler(4));

//let doubler = multiplier(2) 就会return一个function 会是undefined结果
//doubler(4)
//才会执行小function 从而得到8



//SOME HIGH ODER FUNCTION EXAMPLES
//ONE: MAP()
//The map() method creates a new array 
//populated with the results of calling a provided function on every element in the calling array.
// let vals = [4,1,2,4,5,6,0];
// console.log(vals)

// function doubler(x){
//     return x * 2
// }
//     //apply the new array value to the previous defined vals array
// vals = vals.map(doubler);
//     //可以代替前面那一坨
//     //vals = vals.map(x => x * 2);
// console.log(vals);