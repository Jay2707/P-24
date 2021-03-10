class Player{
  constructor(x,y){
      this.x = x;
      this.y = y;
      this.spt = createSprite(this.x,this.y,50,50);
      this.spt.shapeColor = "orange";
      this.spt.addAnimation("player",playerImage);
      this.spt.scale = 0.04;
  }

  move(xdir,ydir){
      this.spt.x += xdir*grid;
      this.spt.y += ydir*grid; 
  } 

} 