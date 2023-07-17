var massMark=prompt("Enter your weight");
var heightMark=prompt("Enter your height");
var massJohn=prompt("Enter your weight");
var heightJohn=prompt("Enter your height");

var BMIMark= massMark/(heightMark*heightMark);
var BMIJohn= massJohn/(heightJohn*heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

var markHigherBMI = BMIMark > BMIJohn ;
console.log(markHigherBMI);

if(markHigherBMI===true){
  console.log("Mark has higher BMI");
}
else
{
  console.log("John has higher BMI");
