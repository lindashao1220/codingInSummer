//classes have 3 characteristics
//encapsualte(like a coockie cutter)
//inheritace
//polymorphism

let particles;

function setup(){
    let canvas = createCanvas(640,480);
    canvas.parent("canvasContainer");
    p = new Particle(300, 300)
    p1 = new Confetti(200, 300)
}

function draw(){
    background(0);
    p.update();
    p.show();
    p1.update();
    p1.show();
}

//how to make a square particle instead?
//how to make inheritate? make it somehow "entended"?
//so Particle will be super/parent class, and squareP will be child/sub class


class Particle{
    constructor(x,y){
        this.x = x;
        this.y = y;
        }
    update(){
        this.x += random(-1, 1);
        this.y += random(-1, 1);
    }
    show(){
        stroke(100);
        ellipse(this.x, this.y, 20);
    }
  
}

class Confetti extends Particle{
    constructor(x, y){
        
        //copy the Particle class
        super(x, y);

        //augment the funtion
        this.bright = random(255);
        this.r = 10
    }

    update(){
        //do what you will do in Particle classs
        super.update();

        this.r += random(-2, 2);
    }

    show(){
        strokeWeight(1);
        stroke(255);
        fill(this.bright);
        square(this.x, this.y, this.r)
    }
}

