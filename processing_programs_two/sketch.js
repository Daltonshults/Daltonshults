var distance, a, b, c, d, e, f;
function setup() {
  createCanvas(400, 400);
  a=250
  b=250
  c=250
  d=0
  e=249
  f=50
}

function draw() {
  background(220);
  fill(a, 250, 0);
  rect(0, 200, 200, 200);
  fill(d, 175, 150);
  rect(200, 200, 200, 200);
  fill(100, 154, e  );
  rect(0, 0, 200, 200);
  fill(255, f, 50);
  rect(200, 0, 200, 200);
  fill(250, 100, 250);
  ellipse(200, 200, 50);
  fill(b, 100, 250);
  rect(200, 200, 75, 75);
  fill(c, 100, 250);
  rect(125, 125, 75, 75);
  fill( 250, 240, 183 );
  ellipse(125, 125, 50);
  ellipse(275, 275, 50);
  fill(0, 0, 0);
  ellipse(225, 175, 50, 50);
  ellipse(175, 225, 50, 50);
  
 if((0<mouseX)&&(200>mouseX)&&(200<mouseY)&&(400>mouseY)){
   a=25}
  else{
  a= 250 } 
  
 if((200<mouseX)&&(275>mouseX)&&(200<mouseY)&&(275>mouseY)){
   b=145}
  else{
  b= 250 }
  
 if((125<mouseX)&&(200>mouseX)&&(125<mouseY)&&(200>mouseY)){
   c=145}
  else{
  c= 250 }
  
 if((200<mouseX)&&(400>mouseX)&&(200<mouseY)&&(400>mouseY)){
   d=250}
  else{
  d= 0 } 

 if((0<mouseX)&&(200>mouseX)&&(0<mouseY)&&(200>mouseY)){
   e=185}
  else{
  e= 249 }
  
 if((200<mouseX)&&(400>mouseX)&&(0<mouseY)&&(200>mouseY)){
   f=150}
  else{
  f= 50 }
    
    
  
  
}