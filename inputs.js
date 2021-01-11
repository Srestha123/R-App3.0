class Inputs{
  constructor(){
    this.image=loadImage("rimg.png");
    this.name=createInput('name');
    this.wakeup=createInput('time');
    this.o1=createSelect();
    this.o1.option('AM');
    this.o1.option('PM');
    this.studyDuration=createSelect();
    this.studyDuration.option('less');
    this.studyDuration.option('1-3 hrs');
    this.studyDuration.option('4-6 hrs');
    this.studyDuration.option('6-10 hrs');
    this.studyDuration.option('more');
    this.studyDuration.selected('1-3 hrs');
    this.school=createSelect();
    this.school.option('3-5 hrs');
    this.school.option('6-8 hrs');
    this.school.option('more');
    this.school.selected('6-8 hrs');
    this.rest= createInput('duration');


   
  /*  this.c1=createRadio();
    this.c1.option("Done");
    this.c1.option("Not Done");*/



    this.o2=createRadio();
    this.o2.option('hrs');
    this.o2.option('mins');
    this.tv=createSelect();
    this.tv.option('1-3 hrs');
    this.tv.option('more');
    this.tv.option('less');
    this.specialClass=createInput('duration');
    this.o3=createRadio();
    this.o3.option('hrs');
    this.o3.option('mins');
    this.hobby=createInput('duration');
    this.o4=createRadio();
    this.o4.option('hrs');
    this.o4.option('mins');
    this.play=createInput('duration');
    this.o5=createRadio();
    this.o5.option('hrs');
    this.o5.option('mins');
    this.miscellaneous=createInput('duration');
    this.o6=createRadio();
    this.o6.option('hrs');
    this.o6.option('mins');
    this.sleep=createSelect();
    this.sleep.option('select sleep hours');
    this.sleep.option('8-12 hrs');
    this.sleep.option('more');
    this.sleep.option('less');
    this.challenge=createButton("daily challenge");
  }
  display(){
    imageMode(CENTER);
    image(this.image,displayWidth/2,displayHeight/2,displayWidth,displayHeight+150);
    this.name.position(600,200);
   // this.name.style("color", "blue");  
    this.wakeup.position(600,250);
  
   
    this.o1.position(790,250);
    this.studyDuration.position(600,300);
    this.school.position(600,350);
    this.rest.position(600,400);
    this.o2.position(790,400);
    this.challenge.position(500,700);
          fill("blue")
    text("name:",200,150);
    text("wake up time:",160,200);
    text("Study time(duration):",125,250);
    text("school duration:",150,300);
    text("rest duration:",165,350);
    text("T.V. time:",180,400);
    text("Special Class Duration:",105,450);
    text("Hobby:",190,500);
    text("play:",200,550);
    text("miscellaneous:",145,600);
    text("sleep time:",160,650);
    textSize(25);
    text("Routine App",300,30);
    this.tv.position(600,450);
    this.o3.position(790,500);
    this.hobby.position(600,550);
    this.o4.position(790,550);
    this.play.position(600,600);
    this.o5.position(790,600);
    this.miscellaneous.position(600,650);
    this.o6.position(790,650);
    this.sleep.position(600,700);
    this.specialClass.position(600,500);
    console.log("message");
    /*text("name:",displayWidth/4-100,displayHeight/5);
    text("name:",displayWidth/4-100,displayHeight/5);
    text("name:",displayWidth/4-100,displayHeight/5);*/
  /* var name=this.name.value();
  this.submit.mousePressed(()=>{
   user.update(name);
    console.log(name);
    gameState=1;
    })*/
    
  }
  fb(){
    var nm=this.name.value();
    this.wakeup.hide();
    this.tv.hide();
    this.name.hide();
    this.o1.hide();
    this.specialClass.hide();
    this.o6.hide();
    this.school.hide();
    this.hobby.hide();
    this.o5.hide();
    this.play.hide();
    this.o2.hide();
    this.o3.hide();
    this.o4.hide();
    this.sleep.hide();
    this.miscellaneous.hide();
    this.studyDuration.hide();
    this.rest.hide();
    submit.hide();
    fill("white");
    textSize(20);
    text("Hello! "+nm,50,20);
    var wake=this.wakeup.value();
    var o=this.o1.value();
    text("BASED ON THE INPUT, THIS IS THE FEEDBACK:",10,100)
    fill("black");
    textSize(20);
    if(wake>9&&o==="PM"){

      text("You sleep too much ",10,160);
    }
    else if(wake>9&&o==="AM"){
      text("Wake up earlier!! ",10,160);
    }
    else if(wake<9&&o==="AM"&&wake>5){
      text("Your wake up time is perfect! ",10,160);
    }
    else{
      text("Your wake up time is inappropriate! correct it.",10,160)
    }
   var study=this.studyDuration.value();
    if(study==="1-3 hrs"||study==="4-6 hrs"){
      text("Your study time is perfect! keep it up",10,200)
    }
   else if(study==="less"){
      text("You need to spend longer time studying!",10,200)
    }
    else{
      text("You study too much! spend time in other activities too.",10,200)
    }
    var rest=this.rest.value();
    var o2=this.o2.value();
    if(rest<2){
      text("You need to rest more!",10,240);
    }
    else if (rest>=2&&rest<=3&&o2==="hrs"){
      text("Your rest time is perfect!",10,240)
    }
    else if (rest<120&&o2==="mins"){
      text("You need to rest more!",10,240)
    }
    else if (rest>=120&&rest<=180&&o2==="mins"){
      text("Your rest time is perfect!",10,240)
    }
    else if (rest>3&&o2==="hrs"){
      text("You need to rest for a lesser time!",10,240)
    }
    else if (rest>180&&o2==="mins"){
      text("You need to rest for a lesser time!",10,240)
    }
    var tv= this.tv.value();
    if(tv==="1-3 hrs"){
      text("Your tv time is perfect!",10,280)
    }
   else if(tv==="less"){
      text("It is really good that you spend so less time watching tv!",10,280)
    }
    else{
      text("You need to watch tv for a lesser time!",10,280)
    }
    if(this.specialClass===5){
      text("It is good that you are taking special classes!",10,320);
    }
   else if(this.specialClass===2){
      text("It is good that you are taking special classes!",10,320);
    }

    else{
      text("It is good that you are taking special classes!",10,320);
    }
    if(this.hobby===5){
      text("It is good that you have a hobby!",10,360);
    }
   else if(this.hobby===2){
      text("It is good that you have a hobby!",10,360);
    }

    else{
      text("It is good that you have a hobby!",10,360);
    }
    if(this.play>=1&&this.play<=2&&this.o5==="hrs"){
      text("The time you spend in playing is perfect!",10,400);
    }
   else if(this.play>=60&&this.play<=120&&this.o5==="mins"){
      text("The time you spend in playing is perfect!",10,400);
    }

    else{
      text("You should spend a more standard time in playing!",10,400);
    }
    if(this.miscellaneous>=1&&this.miscellaneous<=2&&this.o6==="hrs"){
      text("You spend perfect time doing miscellaneous activities.",10,440);
    }
   else if(this.miscellaneous>=60&&this.miscellaneous<=120&&this.o6==="mins"){
      text("You spend perfect time doing miscellaneous activities.",10,440);
    }

    else{
      text("Spend a standard time in doing miscellaneous activities!",10,440);
    }
    if(this.sleep==="8-12 hrs"){
      text("Your sleep duration is perfect.",10,480);
    }
   else if(this.sleep==="more"){
      text("You should sleep for a lesser time.",10,480);
    }

    else{
      text("You should sleep more.",10,480);
    }
    this.challenge.show();
   // submit2.show();
   // submit.hide();
   hideChallenge();
  }
  hideChallenge(){
    this.challenge.hide();
  }
  
}
