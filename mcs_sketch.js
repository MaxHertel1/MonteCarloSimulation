let resolution = 600;
let p_in = 0;
let p_out = 0;
let step = 0;
let amount_Samples = 10000;
let txtOutput;

function setup() {
  createCanvas(resolution, resolution);
  frameRate(100);
  background(0);
  circle(resolution / 2, resolution / 2, resolution)
  txtOutput = createElement("h2", "");
  
  noStroke()
  //noLoop();
}


function draw() {
  let x;
  let y;

  for (let i = 0; i < amount_Samples; i++){
    x = random(-1, 1);
    y = random(-1, 1);

    let d_x = map(x, -1, 1, 0, resolution);
    let d_y = map(y, -1, 1, 0, resolution);

    if (x * x + y * y <= 1) {
      p_in = p_in + 1;
      c = color(0, 255, 0)
    } else {
      p_out = p_out + 1;
      c = color(255, 0, 0)
    }
    fill(c)
    circle(d_x, d_y, 0.5);
    noStroke();

    step++
  }
  
  txtOutput.html(4 * p_in / step);
  //console.log(step + ": " + 4 * p_in / step)
}
