
function setup() {
    createCanvas(800, 800);
    noLoop();
  }
  
  function draw() {
    for (let i=-100; i<width+100; i+=200) {
      for (let j=-100; j<height+100; j+=200){
        noStroke();
        fill(random(255), random(255), random(255));
        rectMode(CENTER);
        rect(i, j, 200, 200);
        push();
        translate(i, j);
        scale(0.28);
        for (let n=0; n<30; n++) {
          stroke(random(255), random(255), random(255));
          for (let a = 0; a < 360; a+=2) {
            let x = random(50, 150);
            let xx = random(150, 350); 
            push();
            rotate(radians(a));
            strokeCap(SQUARE);
            strokeWeight(4);
            line(x,0,xx,0)
            pop();
          }
        }
        pop();
      }
    }
  }