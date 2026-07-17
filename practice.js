// 1.Declare variables using let and const correctly
const discount = 0.2;
let totalPrice = 120;

const afterDiscountPrice = totalPrice - (totalPrice*discount);
console.log(afterDiscountPrice)

// 2.Identify the data type of a given value
const name = 'Snigdho Kumar Roy';
const myAge = 22;
const isStudent = true;
const profession = null;
const role = 'a';
const department = undefined;

console.log(typeof name);
console.log(typeof myAge);
console.log(typeof isStudent);
console.log(typeof profession);
console.log(typeof role);
console.log(typeof department);

// 3.Rename poorly-named variables using best practice
let userName = "Snigdho Roy";
let myage = 22;
let email = 'snigdhoroy262@gmail.com';
let isAdmin = true;

console.log(userName);
console.log(myage);
console.log(email);

// 4.Perform calculations using math operator
// add
const num1 = 12;
const num2 = 15;
const total = num1 + num2;
console.log(total)

// sub
const totalMarks = 100;
const obtainedMarks = 75;
const lostMakrs = totalMarks - obtainedMarks;
console.log(lostMakrs)

// mult
const price = 200;
const quantity = 5;
const totalCost = price * quantity;
console.log(totalCost)

// div
const pizzaSlice = 12;
const totalFriends = 4;
const friendsGet = pizzaSlice/totalFriends;
console.log(friendsGet)

// modulo
const divider = 15;
const reminder = 15%7;
console.log(reminder)

// exponentiation
const number = 5;
const squre = 5 ** 2;
console.log(squre)

// multiple operator
const productPrice = 125;
const discountPrice = 0.25; //25% discount
const totalproductPrice = productPrice*discountPrice
console.log(totalproductPrice)

// Average
const math = 75;
const english = 80;
const science = 95;
const totalSubject = 3;
const total_Marks = (math+english+science);
const averageMarks = parseFloat (total_Marks/totalSubject);
console.log(averageMarks.toFixed(2))
console.log(typeof averageMarks)

// Temperature Conversion
const celcius = 45;
const fahrenheit = (celcius * (9/5) + 32);
console.log(fahrenheit)

// even or odd
const num = 20;
if (evenORodd = num%2==0){
    console.log("Even number");
} else {
    console.log("Odd number");
}

// BMI Calculator
const height = 1.75; //meters
const weight = 68; //KG
const bmi = (weight / height ** 2);
if (bmi<18.5){
    console.log("Underweight");
} else if(bmi<24.9){
    console.log("Normal");
} else if(bmi<29.9){
    console.log("Overweight");
} else if(bmi<34.9){
    console.log("Obesity");
} else {
    console.log("OverObesity");
}

// Compound Calculation
const a = 30;
const b = 40;
const c = 3;
const compound = (a+b)*c;
console.log(compound)

// Shopping Bill
const shirt = 500;
const pant = 800;
const discountCost = 300;
const cost = (shirt+pant) - discountCost;
console.log(cost)

// Salary
const basicSalary = 45000;
const bonus = 25000;
const tax = 15000;
const totalSalary = basicSalary+bonus-tax;
console.log(totalSalary)