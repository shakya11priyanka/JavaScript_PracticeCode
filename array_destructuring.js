
// const restaurant = {
//   name : 'Qvantel',
//   location : "Twiza Building, highTech Road",
//   categories : ['Italian', 'Chinese', 'Indian', 'Western'],
//   starterMenu: ['Salad', 'Bread', 'Sandwitch'],
//   Mainmenu: ['Idli', 'Dosa', 'Uttapam'],
//
//   order : function(starterIndex, mainIndex){
//       return[this.starterMenu[starterIndex], this.Mainmenu[mainIndex]];
//   },
//
// };
//
//
// let [first, ,second] =restaurant.categories;
//
// console.log(first, second);
//
// const temp=first;
// first=second;
// second=temp;
//
// console.log(first, second);
// console.log(restaurant.order(2,0));
//
// const {name, categories} = restaurant;
// console.log(name,categories);
//
// const {name: restaurant_name, categories: food_Categories} = restaurant;
// console.log (restaurant_name, food_Categories);
//
// const {menu = [], starterMenu : starter = [], }=restaurant;
// console.log(menu, starter);
//
// let a=111;
// let b=99;
//
// const obj = {a:23, b:7, c:56};
// ({a,b} = obj);
// console.log( a,b );

const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.keys(object1));

const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // ['0', '1', '2']

// Array-like object
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // ['0', '1', '2']

// Array-like object with random key ordering
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj)); // ['2', '7', '100']

// getFoo is a non-enumerable property
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = 1;
console.log(Object.keys(myObj));

const object1 = {};

Object.preventExtensions(object1);

try {
  Object.defineProperty(object1, 'property1', {
    value: 42,
  });
} catch (e) {
  console.log(e);
  
}
