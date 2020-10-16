class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Next');
      this.greeting = createElement('h2');
      this.title = createElement('hmain');
      this.reset = createButton('Reset');
      this.Play=createButton('Play');
      this.Rules=createElement('h3');
      this.R1=createElement('Rules')
      this.R2=createElement('Rules')
      this.R3=createElement('Rules')
      this.R4=createElement('Rules')
      this.R5=createElement('Rules')
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.Rules.hide();
      this.R1.hide();
      this.R2.hide();
      this.R3.hide();
      this.R4.hide();
      this.R5.hide();
    }
    //Matura MT Script Capitals
  
    display(){
      this.title.html("Bouncing Ball Game");
      this.title.position(displayWidth/2 - 240, 0);
      
      this.input.position(displayWidth/2 - 150 , displayHeight/2 - 100);
      this.button.position(displayWidth/2 + 5, displayHeight/2);
      this.reset.position(displayWidth-100,20);
  
      this.button.mousePressed(()=>{
        stage=1;
        this.input.hide();
        this.button.hide();
   var player = this.input.value();
      

        this.greeting.html("Hello " + player)
        this.greeting.position(displayWidth/2 - 500, displayHeight/4);
        this.Rules.html('Rules of the Game:');
        this.Rules.position (displayWidth/2-300,displayHeight/4+90);
        this.Play.position(displayWidth/2-70,displayHeight/4+470)
        this.R1.html('1)This is a single-player game.');
        this.R2.html('2)There is a paddle which we use it to resist the ball going out.');
        this.R3.html('3)The more Bricks you touch the more you score.');
        this.R4.html("4)Do not  make the ball touch the ground.");
        this.R5.html("5)If you touch the ground the game ends.");
        //positions
         this.R1.position(displayWidth/2-270,displayHeight/4+200)  ; 
         this.R2.position(displayWidth/2-270,displayHeight/4+250)    
         this.R3.position(displayWidth/2-270,displayHeight/4+300)   
         this.R4.position(displayWidth/2-270,displayHeight/4+350)   
         this.R5.position(displayWidth/2-270,displayHeight/4+400)      
      });
    this.Play.mousePressed(()=>{
      stage=2;
      this.greeting.hide();
      this.Play.hide();
      this.Rules.hide();
      this.R1.hide();
      this.R2.hide();
      this.R3.hide();
      this.R4.hide();
      this.R5.hide();
    //  nextStage=new NextPage();
   //   nextStage.display();
    })

    }
  }
  