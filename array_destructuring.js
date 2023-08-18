
const restaurant = {
  name : 'Qvantel',
  location : "Twiza Building, highTech Road",
  categories : ['Italian', 'Chinese', 'Indian', 'Western'],
  starterMenu: ['Salad', 'Bread', 'Sandwitch'],
  Mainmenu: ['Idli', 'Dosa', 'Uttapam'],

  order : function(starterIndex, mainIndex){
      return[this.starterMenu[starterIndex], this.Mainmenu[mainIndex]];
  },

};


let [first, ,second] =restaurant.categories;

console.log(first, second);

const temp=first;
first=second;
second=temp;

console.log(first, second);
console.log(restaurant.order(2,0));


const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y);
console.log(z);

const obj = { a: 1, b: { c: 2 } };
const {
  a,
  b: { c: d },
} = obj;

const obj = { a: 1, b: { c: 2 } };
const { a } = obj;
let {
  b: { c: d },
} = obj;

const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);

const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
