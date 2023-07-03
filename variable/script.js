console.log("hi")

function setup(){

    //var 有一个hoisting的功能是function scope的 什么意思呢
    //就是在function运行之前 他把所有东西自动重新定义一遍
    // 也就像 var i, i;
    //很有可能就会报错因为有两个一样的变量

    for( var i = 0; i < 100; i++){
        //do something...
    }
    for( var i = 0; i < 100; i++){
        //do something...
    }



    //so useee let!!

    //let is only available inside a block!
    //什么又是block呢
    //就是一个（）里面，一个{}里面
    //例如
    //for(let i = 0; i < 100; i++){
        //console.log(i)
    //}
    //就不可以
    //因为i在那个括号里 就不可以拿出来用



    //拿什么是const呢 就是常量永远是一样的
    //const y = 100;
    //y = 50;
    //console.log(y)
    //就会有error 是因为constant的值是不可以改变的
    //如果你要用它 他就是永远你最开始定义的值
    //这也不是完全没有用
    //1. 可以帮助你查看你不想改变的值有没有改变 2.代码会跑的更快比起用let



}
