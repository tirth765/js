// class Employee {
//     name;
//     id;
//     #salary;
//     #insentive
//     constructor(n, i, s) {
//         this.name = n;
//         this.id = i;
//         this.#salary = s; 
//     }
//     set insentive(i){
//         this.#insentive = i;
//     }

//     get insentive() {
//         return this.#insentive;
//     }

//     displayInfo() {
//         console.log("Employee Name is:", this.name);
//         console.log("Employee ID is:", this.id);
//         console.log("Employee Salary is:", this.#salary);
//     }
// }

// let s1 = new Employee ('harsh','007',1000000);
// s1.displayInfo();
// // s1.#salary = 20;                     //error
// s1.insentive = 200; 
// console.log("your insentive is:",s1.insentive);

//---------------------------------------------------------------------------------------------------------

class Restaurant {
    name;
    dishes;
    #price;
    #discount;
    constructor(n, d, p) {
        this.name = n;
        this.dishes = d;
        this.#price = p;
    }           
    display() {     
        console.log("Restaurant Name is:", this.name);
        console.log("Dishes are:", this.dishes);
        console.log("Price is:", this.#price);
    }
    set discount(d) {   
        this.#discount = d;
    }

    get discount() {
        return this.#discount;
    }

    discounttt() {
        let total = 0
        
        if(this.#price > 5000) {
            total = (this.#price * this.#discount) / 100;
            console.log("Discount Price is:",total);        
        } else {
            total = 0;
        }
    }

   
    
}

let s1 = new Restaurant('super_kana','Dosa',6000);  
s1.discount = 5;
s1.display();
s1.discounttt();