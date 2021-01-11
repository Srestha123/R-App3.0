
var database,user,bgimg,submit,fimg,gameState="form",submit2,ch,challenge;

function preload()
{
bgimg=loadImage("rimg.png");
fimg=loadImage("fimg.png");

}
function setup() {
createCanvas(600,800 );
dn=new Inputs();
submit=createButton('submit');
submit.position(600,750);
challenge=createButton('challenge');
challenge.position(500,800);
submit.mousePressed(agv);
submit2=createButton("submit");
submit2.position(600,800);
//user=new Users();

}
function draw(){
   challenge.mousePressed(fff);
       
      
         submit2.mousePressed(vvv); 
if(gameState==="form"){
    dn.display();
}
  
  
}
function agv(){
gameState="feedback";
if(gameState==="feedback"){
imageMode(CENTER);
    image(fimg,300,400,600,800);
    dn.fb();
}
}
function fff(){
    ch=new Challenge();
    ch.dailyChallenge();
    submit2.show();
}
function vvv(){
    ch.fd();
}
