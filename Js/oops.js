// // class Building {
// //     constructor (w, l) {        //It is used to initialize class.and it's called when object created.
// //         this.width = w;
// //         this.length = l;
// //     }


// //     area() {                        //Method or behaviour
// //         let ans = this.width * this.length;
// //         console.log("Area of Building is: ",ans);
// //     }
// // }

// // // object is an entity that has prooperties and Method or (behaviour).

// // const b1 = new Building(10 ,20);
// // b1.area();

//---------------------------------------------------------------------------------------------------------

// class Student {
//     constructor(name, rollno,mar1,mar2,mar3) {
//         this.name = name;
//         this.rollno = rollno;
//         this.mar1 = mar1;
//         this.mar2 = mar2;
//         this.mar3 = mar3;
//         }

//     details () {
//         let ans = this.name;
//         let ans1 = this.rollno;
//         let ans2 = (this.mar1 + this.mar2 + this.mar3)*100/30;
//         console.log("name is:",ans);
//         console.log("rollno is:",ans1);
//         console.log("percentage is:",ans2);
//         if(ans2>80 && ans2<=100) {
//             console.log("Grade: A");
//         } else if(ans2>70 && ans2<80) {
//             console.log("Grade: B");
//         } else if(ans2>20 && ans2<60) {
//             console.log("Grade: c");
//         }   
//     }
// }

// let s1 = new Student('tirth',27,8,9,6)
// s1.details();

//---------------------------------------------------------------------------------------------------------

// class Employee {
//     constructor(i, n) {
//         this.id = i;
//         this.name = n;
//     }
// }

// class salary extends Employee {
//     constructor(i, n, s) {
//         super(i, n);
//         this.salary = s;
//     }
//     display() {
//         console.log("id is:",this.id);
//         console.log("name is:",this.name);
//         console.log("salary is:",this.salary);
//     }  
// }

// let s1 = new salary(98,'Tirth',100000);
// s1.display();

//---------------------------------------------------------------------------------------------------------

// class Course {
//     constructor(n, d) {
//         this.name = n;
//         this.duration = d;
//     }

//     displayBasic() {
//        console.log("Course Name is:", this.name);
//        console.log("Course  Duration is:", this.duration);
//     }
// }

// class Fees extends Course {
//     constructor(n, d, t, dis) {
//         super(n, d);
//         this.tuition = t;
//         this.discount = dis;
//     }

//     displayFees() {
//         console.log("Course Fees is:",this.tuition);
//         console.log("Discount is:",this.discount);
//     }

//     calDiscount() {
//         let totaldis = 0;
//         if(this.tuition > 10000) {
//             totaldis = (this.tuition * this.discount)/100;
//         } else {
//             totaldis = 0;
//         }
//         console.log("Total Discount is:",totaldis);
//     }
// }

// let s1 = new Fees('computer','12 month',100000,10);
// s1.displayBasic();
// s1.displayFees();
// s1.calDiscount();

//---------------------------------------------------------------------------------------------------------

