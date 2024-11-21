//------------------------String------------------------

// let s1 = 'ok';
// console.log(s1);
// console.log(typeof s1);     //string

// let s2 = new String("Hello");
// console.log(s2);
// console.log(typeof s2);     //object

// console.log('4' + 5 + 7);       //457   //string coercion
// console.log(4 + 5 + '7' + 3);   // 973

// console.log('amit' > 'ajay');   //true

// console.log(s2.length);     //5

//------------------------String Methods------------------------

let s1 = "naruto ";
let s1_a = "uzumaki";
let s1_ans = s1.concat(s1_a);
console.log(s1_ans);    //naruto uzumaki

let s2 = "The best Anime is Naruto";
let s2_ans = s2.includes("Anime");
console.log(s2_ans);    //true

let s3 = 'naruto';
let s3_ans = s3.indexOf('r');
console.log(s3_ans);    //2

let s4 = 'The best Anime is Naruto';
let s4_ans = s4.startsWith('T');
console.log(s4_ans);    //true

let s4_b = 'The best Anime is Naruto';
let s4_b_ans = s4_b.startsWith('b');
console.log(s4_b_ans);    //true

let s5 = 'The best Anime is Naruto';
let s5_ans = s5.endsWith('o');
console.log(s5_ans);    //true

let s6 = "naruto";
//slice allow negative index, negative index (-1) start at last character.
let s6_ans = s6.slice(1, 4);
console.log(s6_ans);    //aru

let s7 = "naruto";
//it swaps start and end if start > end.
//Does not support negative index.
let s7_ans = s7.substring(4, 1);
console.log(s7_ans);    //aru

let s8 = "naruto";
//Uses a start position and a length.
let s8_ans = s8.substr(1, 4);
console.log(s8_ans);    //arut

let s9 = "naruto";
let s9_ans = s9.replace("naruto" , "Boruto");
console.log(s9_ans);    //Boruto

let s10 = "The best Anime is Naruto but Boruto is also best";
let s10_ans = s10.replaceAll("best" , "Best");
console.log(s10_ans);    //The Best Anime is Naruto but Boruto is also Best

let s11 = "The best Anime is Naruto";
let s11_ans = s11.split(" ");
console.log(s11_ans);
console.log(typeof  s11_ans);    //object

// let s12 = "The best Anime is Naruto";
// let s12_ans = s12.match("is");  
// console.log(s12_ans); 

let s13 = "NaRuto";
let s13_ans = s13.toLocaleLowerCase();
console.log(s13_ans);    //naruto

let s14 = "NaRuto";
let s14_ans = s14.toUpperCase();
console.log(s14_ans);    //NARUTO

let s15 = " The best Anime is Naruto ";
//Remove space from front and back.
let s15_ans = s15.trim();
console.log(s15_ans);    //The best Anime is Naruto.

let s16 = "The best Anime is Naruto";
let s16_a = /N/;
let s16_ans = s16_a.test(s16);
console.log(s16_ans);   //true