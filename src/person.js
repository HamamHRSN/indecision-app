console.log('person.js is running');

// const isAdult = (age) => {
//     if (age >= 18) {
//         return true;
//     }
//     return false;
// }

// export const canDrink = (age) => age >= 18 ? true  : false;

const isAdult = (age) => age >= 18;

export const canDrink = (age) => age >= 18;

const isSenior = (age) => age >= 65;

export default isSenior;

export { isAdult };
