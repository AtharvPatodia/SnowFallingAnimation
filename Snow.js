class Snow{
    constructor(x, y, width, height ){
        var options={
            'density': 1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage('snow4.webp');
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        imageMode(CENTER);
        image(this.image, 0, 0, 10, 10);
    }
}