class Paper
{
    constructor(x, y, radius)
    {

        var option = {
            "isStatic" : false,
            "restitution" : 0.3,
            "friction" : 0.5,
            "density" : 1.2
        }
        this.body = Bodies.circle(x, y, radius, option);
        World.add(world, this.body);

        this.radius = radius;
        // this.collide(plank1);
        // this.collide(plank2);
    }
    
    display()
    {
        fill("red");
        var pos = this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x ,pos.y+20, this.radius);
    }



}