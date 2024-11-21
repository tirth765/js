// Abstraction : Abstraction is a mechanism that allows you to represent the essential features of an object while hiding the unnecessary details

class Shape {
    getdata() {
        throw new Error ("You can not access abstraction method!");
    }
}

class Ractangle extends Shape {
    getdata(l, w) {
        console.log("Area of the Ractangle is:",l*w);  
    } 
}

class Circle extends Shape {
    getdata(r) {
        console.log("Area of the Circle is:",3.14*r*r);  
    } 
}

const r = new Ractangle();
r.getdata(20,30);

const c = new Circle();
c.getdata(10);

const s = new Shape();
s.getdata();    
