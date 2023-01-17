
//Factory Function
function createCircle(radius) {
    const circle = {
        radius,
        draw: function() {
            console.log('draw')
        }
    };  
}

const circle = createCircle(1);

//Constructor Function
//you can use either one... this one seems preferable
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);

console.log(another)
