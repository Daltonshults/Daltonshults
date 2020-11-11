function setup() {
    createCanvas(500, 500, WEBGL);
  }
  
  function draw() {
    background('rgb(98, 80, 110)');
    
    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;
  
    ambientLight(60, 60, 60);
    pointLight(255, 255, 255, locX, locY, 100);
    fill(255, 0, 89)
    ellipse(250, 250, 200);
    ellipse(-250, -250, 200);
    ellipse(-250, 250, 200);
    ellipse(250, -250, 200);
    fill(165, 171, 0)
    ellipse(0, 250, 100);
    ellipse(250, 0, 100)
    ellipse(-250,0, 100);
    ellipse(0, -250, 100);
    
    push()
    translate(-width / 2, -height / 2, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    specularMaterial('rgb(163, 68, 0)');
    box(100);
    pop()
    
    push()
    translate(-width / 4, -height / 4, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    ambientMaterial('rgb(0, 255, 208)');
    box(100);
    pop()
    
    push()
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    specularMaterial('rgb(163, 68, 0)');
    box(100);
    pop()
    
    push()
    translate(width / 4, height / 4, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    ambientMaterial('rgb(0, 255, 208)');
    box(100);
    pop()
    
    push()
    translate(width / 2, height / 2, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    specularMaterial('rgb(163, 68, 0)');
    box(100);
    pop()
    
    push()
    translate(-width / 4, height / 4, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    ambientMaterial('rgb(0, 255, 208)');
    box(100);
    pop()
    
    push()
    translate(-width / 2, height / 2, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    specularMaterial('rgb(163, 68, 0)');
    box(100);
    pop()
    
    push()
    translate(width / 4, -height / 4, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    ambientMaterial('rgb(0, 255, 208)');
    box(100);
    pop()
    
    push()
    translate(width / 2, -height / 2, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    specularMaterial('rgb(163, 68, 0)');
    box(100);
    pop()
    
  
    
    
  }