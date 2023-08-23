'use strict';

// const bookings = [];
// const createBooking= function(flightNo, PassengerNo, price){
//    PassengerNo = PassengerNo || 1;
//    price = price || 199;
//
//   const booking={
//     flightNo,
//     PassengerNo,
//     price,
//   };
//  console.log(booking);
//  bookings.push(booking);
//
// };
//
// createBooking('LH123');

// const flight ='LH123';
// const jonas= {
//   name : 'Priyanka',
//   passport: 123456
// }
//
// const checkIn= function(flightNum, Passenger){
//   flightNum='Lhsd';
//   Passenger.name="Mrs "+Passenger.name;
//
//   if(Passenger.password===123456)
//   {
//     alert('check in');
//   }
//   else {
//     alert('wrong password !');
//   }
// };
//
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);
//
// const flightNum=flight;
// const passenger=jonas;
//
// const newPassport = function(person){
//   person.passport=Math.trunc(Math.random()*100000);
// };
//
// newPassport(jonas);
// checkIn(flight, jonas);








// const oneWord=function(str){
//   return str.replace(/ /g, '').toLowerCase();
// }
//
// const upperFirst = function(str){
//    const [first, ...other]=str.split(' ');
//    return [first.toUpperCase(), ...other].join(' ');
//
// }
//
//
//
// const transformer = function(str, fn){
//    console.log(`original string : ${str}`);
//     console.log(`original string : ${fn(str)}`);
//     console.log(`Transformed by :  ${ fn.name}`);
// };
//
// transformer('java is the best language', upperFirst);
// transformer('java is the best language', oneWord);
//
// const hi = function() {
//   console.log('high');
// };
//
// document.body.addEventListener('click', hi);
//
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"

function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}
