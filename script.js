let name = "Saikat";
let age = 22;
const person = {
  name: "John Doe",
  age: 30,
  hobbies: ["reading", "music", "movies"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
  getDetails() {
    const nestedArrow = () => console.log(this.name);
    nestedArrow();
  },
  childObject: {
    name: "Jane Doe",
    age: 24,
    getDetails: function () {
      console.log("normal function => ", this.name, this.age, this.hobbies);
    },
    getDetailsArrow: () => {
      console.log("arrow function => ", this.name, this.age, this.hobbies);
    },
  },
};

// person.childObject.getDetails();
// person.childObject.getDetailsArrow();
// person.getDetails();

// so the this keyword inside an object can only point to its immediate parent, in this case, the childObject.

// If we try to access the this keyword inside the getDetails() method, it will point to the childObject and not the person object.

// in case of arrow function the this keyword points to the window object and not the person object.

function executeTasksInSeries(task) {
  return task.reduce((acc, curr) => {
    return acc.then((chainResult) =>
      curr().then((currResult) => [...chainResult, currResult])
    );
  }, Promise.resolve([]));
}


// task is an array of functions that return a promise
const task =  [
    () => new Promise(resolve => setTimeout(() => resolve('Task 1 completed'), 1000)),
    () => new Promise(resolve => setTimeout(() => resolve('Task 2 completed'), 2000)),
    () => new Promise(resolve => setTimeout(() => resolve('Task 3 completed'), 0))
];

executeTasksInSeries(task).then((result) => console.log(result));``