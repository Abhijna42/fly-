class tree{
constructor(x,y,width,height){
    var options={
        isStatic:true
    }
   
    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    this.image=loadImage("tree.png");
    World.add(world,this.body);
}
display(){
    var treepos=this.body.position;
    push();
    translate(treepos.x,treepos.y);
    
    imageMode(CENTER);
    
    image(this.image,0,0,this.width,this.height);
    pop();
}
}