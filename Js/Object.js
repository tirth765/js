// let data = {
//     name:"Tirth",
//     age:"20"
// }
// console.log(data.name,data.age);

//-----------------------------------------------

// const person = [
//     {
//         name: "Amit",
//         age: 25,
//     },
//     {
//         name: "Piyush",
//         age: 40,
//     }
// ];

// person.map((v,i)=> {
//     if(i===0) {
//         console.log(v.name,v.age);
//     }
    
// })

//-----------------------------------------------

// const person = [    
//     {
//         name: "Amit",
//        age: 25,
//        course: [
//            "c",
//            "html"
//        ]
//     }
    
// ]  
// person.map((v,i)=>{
//     console.log(v.name,v.age);
//     v.course.map((v,i) => {
//         console.log(v);
//     })
// })

//-----------------------------------------------

// const person =[
//     {
//         name:"amit",
//         age:19,
//         course:[
//             "c",
//             "html"
//         ]
//     },
//     {
//         name:"mayur",
//         age:20,
//         course:[
//             "c",
//             "html"
//         ]
//     }
// ];
// person.map((v,i)=>{
//     console.log(v.name,v.age);
//     v.course.map((v,i) => {
//         console.log(v);
//     })
// })

//-----------------------------------------------

// const myObj = {
//     name:"jd",
//     age:20,
//     cars:{
//         car1:"ford",
//         car2:"breza",
//         car3:"BMW"
//     }
// }
// console.log(myObj.name,myObj.age,myObj.cars);
// console.log(myObj.cars.car1,myObj.cars.car2,myObj.cars.car3);

//-----------------------------------------------

// let data = {
//     name:"Tirth",
//     age:"20"
// }
// for(let i in data) {
//     console.log(i,data[i]);
// }

//-----------------------------------------------

// const myObj = {
//     name:"jd",
//     age:20,
//     cars:{
//         car1:"ford",
//         car2:"breza",
//         car3:"BMW"
//     }
// }
// for(let i in myObj) {
//         if(i === "cars") {
//             for(let j in myObj[i]) {
//                 console.log(myObj[i][j]);
//             }
//         } else {
//             console.log(myObj[i]);
//         }
// }

//-----------------------------------------------

// const person =[
//     {
//         name:"amit",
//         age:19,
//         course:{
//             c1: "c",
//             c2: "html"
//         }
//     },
//     {
//         name:"mayur",
//         age:20,
//         course:{
//             c1: "c",
//             c2: "html"
//         }
//     }
// ];

// person.map((v,i) => {
//     console.log(v.name,v.age);
//     for(let k in course) {
//         console.log(person[k]);
//     }
// })

//-----------------------------------------------

// let data = {
//     personal_info: {
//         name: 'amit',
//         age: 25,
//         city: 'surat'
//     },
//     courses: ["C", "JavaScript", "React"],
//     branches: {
//         b1: {
//             admission: 50,
//             vacant_seat: 10
//         },
//         b2: {
//             admission: 30,
//             vacant_seat: 20
//         },
//         b3: {
//             admission: 25,
//             vacant_seat: 25
//         },
//         b4: {
//             admission: 40,
//             vacant_seat : 10
//         }
//     }
// }

// for(let i in data) {
//     if(i === "personal_info"){
//         console.log(data[i].name,data[i].age,data[i].city);
//     } else if(i === "courses") {
//         data[i].map((v) => {
//             console.log(v);
//         })
//     } else if(i === "branches") {
//         for(let j in data[i]) {
//             console.log("Branch is:",j);    
//             console.log("Admission is:",data[i][j].admission);
//             console.log("Vacant seat is:",data[i][j].vacant_seat);
            
//         }
//     }
// }

//-----------------------------------------------

// let data = {                    //return array of key
//     name:"Tirth",
//     age:"20"
// }
// let ans = Object.keys(data);
// console.log(ans);

//-----------------------------------------------

// let data = {                    //return array of value
//     name:"Tirth",
//     age:"20"
// }
// let ans = Object.values(data);
// console.log(ans);

//-----------------------------------------------

// let data = {                    //return array of properties array
//     name:"Tirth",
//     age:"20"
// }
// let ans = Object.entries(data);
// console.log(ans);

//-----------------------------------------------

// let data = {                    //convert array to object
//     name:"Tirth",
//     age:"20"
// }
// let ans =Object.fromEntries(Object.entries(data)); 
// console.log(ans);

//-----------------------------------------------

// let data = {                    
//     name:"Tirth",
//     age:"20"
// }
// //add
// data.city='surat';
// console.log(data);

//-----------------------------------------------

// let data = {                    
//     name:"Tirth",
//     age:"20"
// }
// //update
// data.age='20';
// console.log(data);

//-----------------------------------------------

// let data = {                    
//     name:"Tirth",
//     age:"20"
// }
// //delete
// delete data.age;
// console.log(data);


//-----------------------------------------------

let institues = [
    {
        name: 'ABC IT Institute',
        seat: [
            {
                react: 15,
                node: 20,
                full_stack: 10,
                ui_ux: 0
            },
        ]
    },
    {
        name: 'XYZ IT Institute',
        seat: [
            {
                react: 0,
                node: 70,
                full_stack: 0,
                ui_ux: 10
            },
        ]
    },
    {
        name: 'PQR IT Institute',
        seat: [
            {
                react: 7,
                node: 0,
                full_stack: 0,
                ui_ux: 0
            },
        ]
    },
    {
        name: 'MNP IT Institute',
        seat: [
            {
                react: 0,
                node: 0,
                full_stack: 0,
                ui_ux: 0
            },
        ]
    }
]
let data = institues.map((v) => {
    return { 
        name: v.name,
        seat: [Object.fromEntries(Object.entries(v.seat[0]).filter(([k,v]) => v > 0))]
    }
})
.filter((v) => Object.keys(v.seat[0]).length>0)
console.log(data);
 