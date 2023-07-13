//based on the score, pick the value
var fruits = [
  {name: "mango", score: 15},
  {name: "cherry", score: 2},
  {name: "blueberry", score:1},
  {name: "melon", score: 1},
  {name: "tomato", score: 1}
]

//把所有的score都转换成百分比
function setup(){
  let sum = 0;

  for(i = 0; i < fruits.length; i++){
    sum += fruits[i].score;
  }
  for(i = 0; i < fruits.length; i++){
    fruits[i].prob = fruits[i].score / sum;
  }
  console.log(fruits)
}

//算法
//在零到一任意随机取一个数字
//然这个数字去减一个数列的值 挨着挨着减掉
//直到小于零了 
//他就默认最后一个减到的是数值最大的

//一个例子： 一串数值的可能性是0.1, 0.7, 0.2（加起来是1）
//随便一个数抽到减去0.1就小于0的可能性很小
//但剪了一个0.7 很容易就小于0了
function pickOne(list){
  let index = 0;
  let r = random(1);
  while(r > 0){
    r = r - list[index].prob;
    index++
  }

  //小于1了index++让他多走到了下一个element 所以要减回来
  index--;

  return list[index]
}


