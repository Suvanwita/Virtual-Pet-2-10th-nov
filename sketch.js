//Create variables here
var dog;
var database;
var gameState=0;
var form,game,player;
var playerCount;
var food;
var fedTime;
var DogImg,DogHappy,milkImg;
//var foodStock;

function preload()
{
  //load images here
  
  DogImg=loadImage("dogImg.png");
  
  DogHappy=loadImage("dogImg1.png");
 milkImg=loadImage("Milk.png");

}

function setup() {
  createCanvas(800, 750);
  
 dog=createSprite(400,350,50,50);
 dog.scale=0.14;
 dog.addImage(DogImg);
 

  database=firebase.database();
  var fedTimeRef=database.ref("lastFed");
  fedTimeRef.on("value",readTime);


  game=new Game();
  game.getState();
  game.getStock();
  game.start();

}


function draw() { 
     if(gameState==0){
       background(146, 93, 211);
     }
  
      if(gameState===1){    
        game.getStock(); 
      background(5,170,170);
      textSize(30);
      fill("white");
      //Food.foodStock=20;
      text("Food remaining : "+food,280,250);
      text("Last fed at : "+fedTime,280,300);   
      //dog.addImage(DogImg);
      //Food.display();

      if(keyWentDown(UP_ARROW)){
      //food--;
      game.updateStock(food);
      fedTime=hour()+" : "+minute();   
      writeTime(fedTime)
      }
/*
      var nowTime=hour()-1+" : "+minute();
      if(nowTime==fedTime){
      //dog.addImage("dogImg.png");
      }

*/

      var x=30,y=400;
      if(food!=0){
        for(var i=0;i<food;i++){       
            if(i%10==0){
                x=30;
                y+=100;
            }
            image(milkImg,x,y,60,70);
            x+=80;
           // x=x+30;
        }
      }

      drawSprites();
      



      //add styles here
    }//if gameState=1 close


}

//database functions

function readTime(data){
  fedTime=data.val();
}

function writeTime(fedTime){
database.ref('/').update({
  lastFed:fedTime
})
}





























/*
<script src="images/dogImg.png"></script>
<script src="images/dogImg1.png"></script>
<script src="images/Milk.png"></script>
<script src="Dog (1).png"></script>
*/