// var nameVar = 'Hamam';
// var nameVar = 'Salma';
// console.log('NameVar:', nameVar);


// let nameLet = 'Rouaa';
// // let nameLet = 'Naya';
// console.log('nameLet:', nameLet);


// const nameConst = 'Alaa';
// // const nameConst = 'Khaled';
// console.log('nameConst:', nameConst);


// function getPetName() {
//     const petName = 'laky'; 
//     return petName;
// }

// const petName = getPetName();
// console.log(petName);





// Block scoping

var fullName = 'Hamam Hamou';

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);

const fullName = 'Hamam Hamou';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);


