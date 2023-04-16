// <----------Task1---------->
// ----------a---------->
// var a = [32, 25, 85, 89, 45, 76, 7, 41, 2, 12];
// console.log(a);


// <----------b---------->
// var a = [32, 25, 85, 89, 45, 76, 7, 41, 2, 12];
// a.sort();
// console.log(a[a.length-1]);


// <----------c---------->
// var a = [32, 25, 85, 89, 45, 76, 7, 41, 2, 12];
// a.push(15);
// console.log(a);


// <----------d---------->
// var a = [32, 25, 85, 89, 45, 76, 7, 41, 2, 12];
// a.shift();
// console.log(a);


// <----------e---------->
// var a = [32, 25, 85, 89, 45, 76, 7, 41, 2, 12];
// var newa = a.sort().pop();
// console.log(newa);


// <----------f---------->
// var a = [32, 25, 85, 89, 45, 76, 7, 41, 2, 12];
// a.splice(3, 0, 43);
// console.log(a);


// <----------g---------->
// var a = [32, 25, 85, 89, 45, 76, 7, 41, 2, 12];
// var newa = a.slice(3);
// console.log(newa);


// <----------h---------->
// var a = [32, 25, 85, 89, 45, 76, 7, 41, 2, 12];
// a.forEach(function(a) {
//     console.log(a);
// });



// <----------i---------->
// var a = [32, 25, 85, 89, 45, 76, 7, 41, 2, 12];
// for (let i = 0; i < a.length; i++) {
//     if (a[i] > 40) {
//         console.log(a[i]);
//     }
// }







// <----------Task2---------->
// var getStudentsNames = ([{
//         name: "Steve"
//     },
//     {
//         name: "Mike"
//     },
//     {
//         name: "John"
//     }
// ]);
// console.log(getStudentsNames.map((students) => {
//     return students.name;
// }));




// <----------Task3---------->
// <----------1---------->
array = [2, 3, 4];
number = 12;

function checkFactors(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (number % array[i] != 0) {
            return false;
        }
    }
    return true;
}
console.log(checkFactors(array, number));

// <----------2---------->
// array = [1, 2, 3, 8];
// number = 12;

// function checkFactors(array, number) {
//     for (let i = 0; i < array.length; i++) {
//         if (number % array[i] != 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(checkFactors(array, number));


// <----------3---------->
// array = [1, 2, 50];
// number = 100;

// function checkFactors(array, number) {
//     for (let i = 0; i < array.length; i++) {
//         if (number % array[i] != 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(checkFactors(array, number));


// <----------4---------->
// array = [3, 6];
// number = 9;

// function checkFactors(array, number) {
//     for (let i = 0; i < array.length; i++) {
//         if (number % array[i] != 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(checkFactors(array, number));





// <----------Task4---------->
// <----------1---------->
// function getSequence(start, end) {
//     let arr = [];

//     for (let i = 0; i < end; i++) {
//         if (start <= end) {
//             arr.push(start++);
//         }
//     }
//     return arr;
// }
// console.log(getSequence(1, 5));



// <----------2---------->
// function getSequence(start, end) {
//     let arr = [];

//     for (let i = 0; i < end; i++) {
//         if (start <= end) {
//             arr.push(start++);
//         }
//     }
//     return arr;
// }
// console.log(getSequence(98, 100));



// <----------3---------->
// function getSequence(start, end) {
//     let arr = [];

//     for (let i = 0; i < end; i++) {
//         if (start <= end) {
//             arr.push(start++);
//         }
//     }
//     return arr;
// }
// console.log(getSequence(1000, 1000));