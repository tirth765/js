class Animal {
    //method overriding.
    getvoice() {
        console.log("Animal voice....");
    }
}

class Cat extends Animal {
    //method overriding.
    getvoice() {
        console.log("Cat voice....");
    }
}

class Dog extends Animal {
    //method overriding.
    getvoice() {
        console.log("Dog voice....");
    }
}

const a = new Animal();
a.getvoice();

const c = new Cat();
c.getvoice();

const d = new Dog();
d.getvoice();