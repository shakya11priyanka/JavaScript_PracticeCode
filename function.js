'use strict';

const bookings = [];
const createBooking= function(flightNo, PassengerNo, price){
   PassengerNo = PassengerNo || 1;
   price = price || 199;

  const booking={
    flightNo,
    PassengerNo,
    price,
  };
 console.log(booking);
 bookings.push(booking);

};

createBooking('LH123');

const flight ='LH123';
const jonas= {
  name : 'Priyanka',
  password: 123456
}

const checkIn= function(flightNum, Passenger){
  flightNum='Lhsd';
  Passenger.name="Mr "+Passenger.name;

  if(Passenger.password===123456)
  {
    alert('check in');
  }
  else {
    alert('wrong password !');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const flightNum=flight;
const passenger=jonas;

const newPassport=function(person){
  person.passport=Math.trunc(Math.random()*100000);
}

newPassport(jonas);
checkIn(flight, jonas);
