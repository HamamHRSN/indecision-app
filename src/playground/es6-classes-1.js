class Person {
     constructor(name = 'Anonymous', age = 0) {
        this.name = name;   
        this.age = age;
     }

     getGreeting() {
        return `Hi. I am ${this.name} !`;
     }

     getDescription() {
         return `Hi: I am ${this.name} and my age is ${this.age} year(s) old.`;
     }
}

class Student extends Person {
      constructor(name, age, major) {
        super(name, age);  
        this.major = major;
      }

      hasMajor() {
          return !!this.major;
      }

      getDescription() {
        // return `Hi: I am ${this.name} and my age is ${this.age} year(s) old and my major is ${this.major}.`;
        let description = super.getDescription();
        

        if (this.hasMajor()) {
            description += `Thire major is ${this.major}.`;
        }

        return description;
      }

}


class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

// const me = new Student('Hamam Hamou', 34, 'Computer Science');
// console.log(me.getDescription());


// const other = new Student();
// console.log(other.getDescription());

const me = new Traveler('Hamam Hamou', 34, 'Stockholm');
console.log(me.getGreeting());


const other = new Traveler();
console.log(other.getGreeting());

