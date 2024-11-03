// 2-rasm
// 1-masala
// let arr = [8, 2, 3, 4, 5, 6, 10];
// console.log(arr[0] + arr[arr.length - 1]);


// 2-masala

// let arr = [8, 2, 3, 4, 5, 6, 10, 55, 99, 1222];
// let maxArr = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > maxArr){
//         maxArr = arr[i]
//     }
// }
// console.log(maxArr);


// 3-masala

// let arr = [1, 2, 3, 4, 5, 6, 7]
// let count = []
// for (let i = 0; i < arr.length; i++) {
//     count.push(arr[i] +1)  
// }
// console.log(count);

// 4-masala

// let number = prompt("Son kiriting") - 0 

// for(let i = 1; i <= number;i++){
//     if(number % i == 0){
//         console.log(i);
//     }
// }

// 5-masala

// let arr1 = [1,80,55,620,21,352,54,58,6554,698,554,54,51,2,66,87,788]
// let arr2 = [0,65,987,898,4,5788,877,899,858,45,15,54,21,788,55,77,80]
// let arr3 = []

// for(let i of arr1){
    
//     for(let j of arr2){
//         if(i == j){
//             arr3.push(i);
//         }
//     }
// }
// console.log(arr3);




// 1-rasm 

// 1-masala
// let a = prompt('1-Sonni kiriting')
// let b = prompt('2-Sonni kiriting')
// let c = prompt('3-Sonni kiriting')
// let median 

// if ((a > b && a < c) || (a < b && a > c)) {
//     median = a;
// } else if ((b > a && b < c) || (b < a && b > c)) {
//     median = b;
// } else {
//     median = c;
// }

// console.log("O'rtachasi:", median);

// 2-masala
// let num = prompt("Uch xonali son kiriting:");
// if (num.length === 3) {
//     let num1 = num[0]
//     if (num1 % 2 === 0) {
//         console.log("Birinchi raqami juft")
//     } else {
//         console.log("Birinchi raqami toq")
//     }
// } else {
//     console.log("Iltimos uch xonali son kiriting")
// }

// 3-masala

// let ball = prompt("Bal kiriting")
// let maxBall = 150
// let foiz = Math.round((ball / maxBall) * 100)
// console.log("Foiz:", foiz + "%")


// 4-masala
// for (let i = 5; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// 5-masala
// let array = ["salom", "dunyo", "hello", "world"]
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === "hello") {
//         console.log(array[i]);
//     }
// }

// 6-masala

// let arr = ["hello", 11, true];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'boolean') {
//         console.log("Boolean qiymat indeksi:", i);
//     }
// }

// 7-masala

// let num = [1, 2, 3, 4, 5, 6];
// let juft = 0 
// let toq = 0
// for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 === 0) {
//         juft += num[i];
//     } else {
//         toq += num[i];
//     }
// }
// console.log("Juftlar yig'indisi:", juft);
// console.log("Toqlar yig'indisi:", toq);

// 8-masala
// let a = prompt("1-Ixtiyoriy sonni kiriting")-0
// let b = prompt("2-Ixtiyoriy sonni kiriting") -0
// let operator = prompt('Bu sonlar ustida qanday amal bajarmoqchisiz? (+ , - , * , /)');
// let result;

// switch (operator) {
//     case '+': 
//     result = a + b; 
//     break;
//     case '-': 
//     result = a - b; 
//     break;
//     case '*': 
//     result = a * b; 
//     break;
//     case '/': 
//     result = a / b; 
//     break;
//     default: 
//     result = "Noto'g'ri operator"; 
//     break;
// }
// console.log("Natija:", result);

// 9-masala
// let arr = [-1, -2, 3, -4, 5, -100, -5];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         arr[i] = -arr[i];
//     }
// }
// console.log("Musbat qiymatli array:", arr);



