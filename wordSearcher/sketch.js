function setup(){
    noCanvas();

    var seed = select("#seed");
    var submit = select("#submit")
    submit.mousePressed(function(){
      createP(seed.value())
    })

}