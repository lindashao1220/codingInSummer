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

//map本来就是一个function了 在function里面执行一个function

// let vals = [4,1,2,4,5,6,0];
// console.log(vals)

// function doubler(x){
//     return x * 2
// }
//   //apply the new array value to the previous defined vals array
// vals = vals.map(doubler);
//     //可以代替前面那一坨
//     //vals = vals.map(x => x * 2);
// console.log(vals);


//  //ALSO ADD FILL(): 创建一个array 先在每个空里面fill0 然后在random值map进哪个array
// let vals = new Array(100);
// vals = vals.fill(0).map(x => Math.random());
// console.log(vals)



//TWO: REDUCE()
//The reduce() method reduces the array to a single value


//In the case of reduce(callbackFn, initialValue)
//The reduce() method goes through each element of the array 
//and calls the callback function with two arguments: the current element and the accumulator.
//The reduce() method then takes the result that was returned by the callback function 
//and uses it as the new value of the accumulator for the next iteration. 
//This process continues until the reduce() method has gone through all the elements of the array.

// let vals = [21,2,3,4,5,6];
// function findMax(acc, val){
//     if(val > acc){
//         acc = val
//     }
//     return acc;
// }
// let biggest = vals.reduce(findMax, 0)
// console.log(biggest)

// let vals = [21,2,3,4,5,6];
// // function sum(acc, val){
// //     console.log(acc)
// //     return acc + val;
// // }
// let answer = vals.reduce((acc, val)=> acc + val,0);
// console.log(answer)


//THREE: FILTER()
// let vals = [21,2,3,4,5,6];

// // function isEven(num){
// //     return (num % 2 == 0)
// // }
// // vals = vals.filter(isEven)
// // make a new array so have to assign again to vals
// vals  = vals.filter(x => x % 2 == 0)
// console.log(vals)


// let s = "it is so beautiful, so I love it very much"
// let words = s.split(/\W+/).filter(word => word.length >= 3)
// console.log(words)



//FOUR: SORT() it is a method help you figure out the simple sorting
//when it gets harder
//write your own code
// //ea: sort it by y value
// let vals = [{
//     x: 9,
//     y: 3
// },{
//     x: 4,
//     y: 10
// }]
// function compare(a, b){
//     return a.y - b.y;
// }
// vals.sort(compare);
// console.log(vals)


// //sort it out by length
// let s = "it is so beautiful, so I love it very much, xxxxx"
// let words = s.split(/\W+/).filter(word => word.length >= 3)
// //sort 算出来一个数字 然后根据这个数字开始排序
// words.sort((a, b) => b.length - a.length)
// console.log(words)



let particles;

function setup(){
    let canvas = createCanvas(640,480);
    canvas.parent("canvasContainer");
    particles = Array(10).fill(null).map(p => new Particle())
}

function draw(){
    background(0);

    let p = new Particle();
    particles.push(p)
    for (let particle of particles){
        particle.update();
        particle.show();
    }

    function keep(p){
        return !p.finished();
    }
    particles = particles.filter(keep)

    let sumx = particles.reduce((x, p) => x + p.x, 0)
    let sumy = particles.reduce((y, p) => y + p.y, 0)

    let centerX = sumx / particles.length;
    let centerY = sumy / particles.length;
    fill(255, 0 ,0)
    ellipse(centerX,centerY, 24)
    // for(let i = particles.length -1 ; i >= 0 ; i--){
    //     particles[i].update()
    //     particles[i].show()
    //     if(particles[i].finished()){
    //         particles.splice(i ,1)
    //     }
    // }
    // for (let i = 0; i < 5; i++){
    //     let 
    // }
}


class Particle{
    constructor(){
        this.x = 320;
        this.y = 400;
        this.vx = random(-1, 1);
        this.vy = random(-3, -1);
        this.alpha = 255;
        }
    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.alpha--;
    }
    finished(){
        return this.alpha < 0;
    }
    show(){
        stroke(100);
        fill(255, this.alpha);
        ellipse(this.x, this.y, 20);
    }
  
}
