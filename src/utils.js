console.log('utils.js is running!');

const square = (x) => x * x;

const add = (a, b) => a + b;

export const todo = (y) => y * 10;

const subtract = (a, b) => a - b;

export default subtract;       // like this we use default in separate function to write it efter with name of the function not befor like todo

// export default  (a, b) => a - b;    // can be default without function name too

export { square, add };

// export { square, add, subtract as default };

// exports -> default exports - named exports

