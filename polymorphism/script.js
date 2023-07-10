//classes have 3 characteristics
//encapsualte(like a coockie cutter)
//inheritace
//polymorphism
// which means particle can actually be something different at the same time
// this examples show how particles cna be as circles but also rect at the SAME TIME!!

let particles = [];

function setup(){
    let canvas = createCanvas(640,480);
    canvas.parent("canvasContainer");
    for(let i = 0; i < 10; i++){
        if(random(1) < 0.5){
            particles[i] = new Particle(300,300)
        } else {
            particles[i] = new Confetti(300,300)
        }
    }
}

function draw(){
    background(0);
    for(let p of particles){
       p.update();
       p.show();
    }

}


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

