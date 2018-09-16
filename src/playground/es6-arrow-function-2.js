//________________________________________________________
// Arguments Object - No longer bound with arrow functions


// const add = function(a, b) {
//     console.log(arguments);
    
//     return a + b;
// };
// console.log(add(55, 1, 1001));


// const add = (a, b) => {
//     // console.log(arguments);
    
//     return a + b;
// };
// console.log(add(55, 1, 1001));




// ______________________________
// This keyword - No longer bound

// const user = {
//     name: 'Hamam',
//     cities: ['Damascus', 'Dubai', 'Stockholm'],
//     printPlacesLived: function () {
//         console.log(this.name);
//         console.log(this.cities);
   
//     }  
// };
// user.printPlacesLived();



// const user = {
//     name: 'Hamam',
//     cities: ['Damascus', 'Dubai', 'Stockholm'],
//     printPlacesLived: function () {
        
//         const that = this;        
//         this.cities.forEach(function (city) {
//             console.log(that.name + ' has lived in ' + city);  // this not defined in forEach till i do that upabove
//          });
//     }  
// };
// user.printPlacesLived();



// const user = {
//         name: 'Hamam',
//         cities: ['Damascus', 'Dubai', 'Stockholm'],
//         printPlacesLived: function () {

//             this.cities.forEach((city) => {
//                 console.log(this.name + ' has lived in ' + city);    // this here exccepting in firEach with arroe function
//             });

//         }  
// };
// user.printPlacesLived();


// const user = {
//     name: 'Hamam',
//     cities: ['Damascus', 'Dubai', 'Stockholm'],
//     printPlacesLived() {

//         this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city);    // this here exccepting in firEach with arroe function
//         });

//     }  
// };
// user.printPlacesLived();


// _______
// MAP


// const user = {
//     name: 'Hamam',
//     cities: ['Damascus', 'Dubai', 'Stockholm'],
//     printPlacesLived: function () {

//         const cityMessages = this.cities.map((city) => {
//             return city;
//         });
//        return cityMessages;
//     }  
// };
// console.log(user.printPlacesLived());


// const user = {
//     name: 'Hamam',
//     cities: ['Damascus', 'Dubai', 'Stockholm'],
//     printPlacesLived: function () {

//         const cityMessages = this.cities.map((city) => {
//             return this.name + ' has lived in ' + city;
//         });
//        return cityMessages;
//     }  
// };
// console.log(user.printPlacesLived());


// const user = {
//     name: 'Hamam',
//     cities: ['Damascus', 'Dubai', 'Stockholm'],
//     printPlacesLived() {

//         return this.cities.map((city) => {
//             return this.name + ' has lived in ' + city;
//         });
//     }  
// };
// console.log(user.printPlacesLived());


// const user = {
//     name: 'Hamam',
//     cities: ['Damascus', 'Dubai', 'Stockholm'],
//     printPlacesLived() {

//         return this.cities.map((city) =>  this.name + ' has lived in ' + city);
//     }  
// };
// console.log(user.printPlacesLived());


// Challenge erea

const multiplier = {
     numbers: [10, 20, 30],
     multiplyBy: 3,
     multiply() {
         return this.numbers.map((number) => this.multiplyBy * number);
     }
};
console.log(multiplier.multiply());




