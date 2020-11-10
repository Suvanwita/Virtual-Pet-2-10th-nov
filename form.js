class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h1');
      this.reset = createButton('Add Food');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Virtual Pet App");
      this.title.position(displayWidth/2-120 , 60);
  
      this.input.position(displayWidth/2 - 100 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 -50, displayHeight/2);
      this.reset.position(displayWidth/2+300,30);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index=playerCount;
       // player.update(playerCount);
       // player.updateCount(playerCount);
        game.update(1);
        this.greeting.html("Hello " + player.name+" ! Press the up arrow key to feed your dog.")
        this.greeting.position(displayWidth/3 - 50, displayHeight/4-50);
      });
  
      this.reset.mousePressed(()=>{
        //player.updateCount(0);
        //game.update(0);
       game.updateStock(21);
      });
  
    }
  }
  