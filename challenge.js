class Challenge{
    constructor(){
        this.c1=createRadio();
        this.c1.option("Done");
        this.c1.option("Not Done");
        this.c2=createRadio();
        this.c2.option("Done");
        this.c2.option("Not Done");
        this.c3=createRadio();
        this.c3.option("Done");
        this.c3.option("Not Done");
        this.c4=createRadio();
        this.c4.option("Done");
        this.c4.option("Not Done");
        this.c5=createRadio();
        this.c5.option("Done");
        this.c5.option("Not Done");
      
        
    }
    
    dailyChallenge(){
        fill("white");
        var bg = createSprite(300,400,600,800);
        bg.shapeColor="blue";
        drawSprites();
        text("DAILY CHALLENGE:-",100,100);
        text("1.Learning a new word.",10,160);
        this.c1.position(800,200);
        text("2.Doing something good.",10,260);
        this.c2.position(800,300);
        text("3.Playing an outdoor game for at least 30mins.",10,360);
        this.c3.position(800,400);
        text("4.Practicing hobby.",10,460);
        this.c4.position(800,500);
        text("5.Read a new topic on your favourite subject.",10,560);
        this.c5.position(800,600);
        console.log(this.c1);
        ch.hideChallenge();
        submit2.show();
       
    }
      
        fd(){
        var c1=this.c1.value();
        var c2=this.c2.value();
        var c3=this.c3.value();
        var c4=this.c4.value();
        var c5=this.c5.value();
        if(c1==="Done"&&c2==="Done"&&c3==="Done"&&c4==="Done"&&c5==="Done"){
            text("Congratulations! You have completed all the challenges.",20,600);
            console.log("works");
            
            }
      }
    }
