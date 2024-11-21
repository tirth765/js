// //1.Finding the maximum element in an array.

// let max = [56,47,36,86,21,6]

// let ans = max.sort((a,b) => a-b);
// console.log("maximum number is :",ans[max.length-1]);

// //2.Finding the minimum element in an array.

// let min = [56,47,36,86,21,6]

// let ans1 = min.sort((a,b) => a-b);
// console.log("minimum number is :",ans1[0]);

// //3.Sorting an array in ascending order.

// let ascen = [1,2,3,4,5,6]

// let ans2 = ascen.sort((a,b) => a-b)
// console.log("ascending order :",ans2);

// // 4.Sorting an array in descending order.

// let descen = [1,2,3,4,5,6]

// let ans3 = descen.sort((a,b) => b-a)
// console.log("descending order :",ans3);

// // 5.Reversing an array.

// let rev = [10,20,30,40,50,60]

// let ans4 = rev.reverse();
// console.log("reverse :",ans4);

//--------------------------------------


//6
// let data = [1, 2, 3, 4, 5];
// let ans = data.reduce((acc, v) => acc+v,0)
// console.log(ans);                          // Output: 15

//7
// let data = [10, 26, 33, 46, 58];
// let ans = data.reduce((acc, v) => acc+v,0)
// console.log(ans/data.length);             // Output: 34.6

//8
// let check = [1,2,3,4,5,6]
// let ans = check.includes(6);
// console.log(ans);                        //true

// 9
// let data =[7,8,9,5,7,8,3];
// let data1 =[];
// data.map((v) => {
//     if(!data1.includes(v)) {
//         data1.push(v);
//     }
// });
// console.log(data1);

//10
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let ans = arr1.concat(arr2);
// console.log(ans);                           // [1, 2, 3, 4, 5, 6]


//--------------------------------------


// //11
// let data = [5,3,2,6,7,8];
// let ans = data.filter((v) => v<=3)
// console.log(ans);                            // [3, 2]
// let ans2 = data.filter((v) => v>3)
// console.log(ans2);                           // [5, 6, 7, 8]

//12
// let rotate = [1,2,3,4,5,6]

//     for(let i=1; i<=3; i++){
//       let ans12 = rotate.pop();
//       rotate.unshift(ans12)
//     }
//     console.log(rotate);
// //13
// let data = [54,22,66,7,43,33];
// let ans = data.sort((a, b) => b-a);
// console.log(ans[1]);                         //54

// //14
// let data = [1, 2, 3, 4, 5,6]
// let ans = data.sort((a, b) => a-b);
// console.log(ans[0]);                          //1

//15
// let data = [45,27,98,47];

// let ans = data.sort((a, b) => a-b);
// console.log(ans);

// if(data.length % 2 == 0) {
//     let mid = ans.length/2;
//     let ans2 = (ans[mid-1] + ans[mid])/2;
//     console.log(ans2);
// } else {
//     let mid = Math.floor(data.length/2);
//     let ans2 = data[mid];
//     console.log(ans2);
// }


//--------------------------------------

// // // 16 
// arey1 = [10,20,30,40]
// arey2 = [10,20,30,40]
// flag = false
// if(arey1.length === arey2.length){
//     for(let i=0; i<arey1.length; i++){
//         if(arey1[i] != arey2[i]){
//             flag = true;
//             break;
//         }
//     }
//     if(flag === true){
//         console.log("both array are not same");
//     }else{
//         console.log("both array are same");
//     }
// }else{
//     console.log("both array are not same");
    
// }

//17.Finding the index of the first occurrence of an element in an array.
// let data = [1, 2, 3, 2, 4]
// let ans12 = data.indexOf(2);
// console.log(ans12);

// // 18.Finding the index of the last occurrence of an element in an array.
// let data2 = [1, 2, 3, 2, 4]
// let ans13 = data2.lastIndexOf(2)
// console.log("last occurrence :",ans13);

// // 19.Removing all occurrences of an element from an array.
// let array = [1, 2, 3, 2, 4, 2, 5];
// let ans = array.filter((v) => v!= 2);
// console.log(ans);

// // 20 
// let new_ele = [10,25,45,41,45,56]

// let ans14 = new_ele.map((v) => v == 45 ? 10 : v  )
// console.log(ans14);


//--------------------------------------


// 22
// let arr = [30,23,56,12,88];
// flage = false;
// for(let i=0;i<arr.length;i++) {
//     for(let j = i+1 ; j<arr.length;j++) {  
//         if(arr[i] < arr[j]) {
//             flage = true;
//             break;
//         }
//     }
//     if(flage === true) {
//         console.log("this  array is ass sorted");
//     } else {
//         console.log("this  array is ass not sorted");
//     }
// }

//24
// let arr = [23,76,98,43,12];
// let ans = arr.sort((a,b) => a+b).slice(0,3).reduce((acc,v) => acc+v,0)
// console.log(ans);