
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


function fun(a, b){
        return a + b;
    }
    console.log(fun(1, 2)); // 3
    console.log(fun(1, 2, 3, 4, 5));


    function fun(...input){
        let sum = 0;
        for(let i of input){
            sum+=i;
        }
        return sum;
    }
    console.log(fun(1,2)); //3
    console.log(fun(1,2,3)); //6
    console.log(fun(1,2,3,4,5)); //15

    function fun(a,b,...c){
        console.log(`${a} ${b}`); //Mukul Latiyan
        console.log(c);  //[ 'Lionel', 'Messi', 'Barcelona' ]
        console.log(c[0]); //Lionel
        console.log(c.length); //3
        console.log(c.indexOf('Lionel')); //0
    }
    fun('Mukul','Latiyan','Lionel','Messi','Barcelona');
