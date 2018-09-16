// const square = function (x) {
//     return x * x;
// }
// console.log(square(8));

// function square (x) {
//     return x * x;
// }
// console.log(square(8));

// const squareArrow = (x) => {
//     return x * x;
// };
// console.log(squareArrow(8));

// const squareArrow = x =>  x * x;
// console.log(squareArrow(8));

// const squareArrow = (a, b) =>  a * b;
// console.log(squareArrow(8, 8));

// const fullName = 'Hamam Hamou';
// let firstName;
// const getFirstName = (firstName) => {
//    return fullName.split(' ')[0];
// }; 
// console.log(getFirstName(firstName));


// const fullName = 'Hamam Hamou';
// let firstName;
// const getFirstName = firstName =>  fullName.split(' ')[0];
// console.log(getFirstName(firstName));


// const getFirstName = (fullName) => {
//      return fullName.split(' ')[0];
// };
// console.log(getFirstName('Hamam Hamou'));

const getFirstName = (fullName) =>  fullName.split(' ')[0];
console.log(getFirstName('Hamam Hamou'));