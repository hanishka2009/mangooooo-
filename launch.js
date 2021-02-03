class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
     
        this.pointB = pointB
        this.stone = Constraint.create(options);
        World.add(world, this.stone);
    }
attach(body){
this.stone.bodyA = body;
} 
fly(){
this.stone.bodyA = null;
}
display(){
if(this.stone.bodyA){
var pointA = this.stone.bodyA.position;
var pointB = this.pointB;
push();
stroke(48,22,8);

strokeWeight(7);
line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);

    

    
pop();

}
}


}