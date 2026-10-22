function setup() {
  createCanvas(800, 800);
  
  Texture = createGraphics(800, 800);
  
  for (let i = 0; i < 150000; i++) {
    let x = random(width);
    let y = random(height);

    if (random(1) > 0.5) {
      Texture.stroke(0, random(1, 3));
    } else { 
      Texture.stroke(245, 235, 210, random(1, 4));
    }
    
    Texture.strokeWeight(random(0.5, 1.5));
    let size = random(10, 40);

    if (random(1) > 0.5) {
      Texture.line(x, y, x + size, y);
    } else {
      Texture.line(x, y, x, y + size);
    }
  }
}

function draw() {
  background(0, 0, 0);

  let red = sin(frameCount * 0.02) * 50;

  fill(238 + red, 36, 0);
  quad(0, 0, 362, 0, 362, 316, 0, 316);
    
  fill(237, 241, 237);
  quad(373, 0, 800, 0, 800, 316, 373, 316);
  quad(0, 334, 362, 334, 362, 511, 0, 511);
  quad(373, 334, 800, 334, 800, 511, 373, 511);
  quad(86, 527, 362, 527, 362, 800, 86, 800);
  quad(373, 770, 608, 770, 608, 800, 373, 800);
  quad(620, 527, 800, 527, 800, 800, 620, 800);

  fill(250, 209, 0);
  quad(0, 527, 75, 527, 75, 800, 0, 800);

  fill(31, 32, 117);
  quad(373, 527, 608, 527, 608, 757, 373, 757);


  image(Texture, 0, 0);

}