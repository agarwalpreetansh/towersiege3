class Block extends BaseClass{
    constructor(x,y,width,height,){
      super(x,y,width,height,);
      this.image=loadImage("hi.jpg")
      this.Visiblity=255
      
    }
    display(){
      if(this.body.speed < 3){
        super.display();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, this.body.position.width,this.body.position.height);
         pop();
       }
      }
      score(){
        if (this.Visiblity<0&&this.Visiblity>-1005){
          score=score+1
        }
      
      }
    }