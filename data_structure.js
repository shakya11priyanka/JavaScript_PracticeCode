const restaurant = {
  name : "Qvantel",
  location : "Twiza Building, highTech Road",
  categories : '[Italian, Chinese, Indian, Western]',
  starterMenu: '[Salad, Bread, Sandwitch]',
  Mainmenu: '[Idli, Dosa, Uttapam]'
};

const [first, second] =restaurant.categories;
console.log(first, second);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
