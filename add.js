const orange_price = 25;
const mango_price = 45;
const banana_price = 15;
const total_price = (orange_price+mango_price+banana_price);
// if 20% discount
const discount_price = total_price - (0.2*total_price);
console.log(total_price);

console.log(discount_price);

const firstname = 'Snigdho';
const lastname = ' Roy';
const fullname = firstname + lastname;
console.log(fullname);
// number
const string_number = '545.55';

// **using "parseInt / parseFloat" for convert string to number
const number = parseInt(string_number);
// constant
console.log(typeof number)

// number decimal
const firstnumber = 0.5;
const lastnumber = 0.2;
const totalnumber = firstnumber + lastnumber;
// **for using "toFixed()" keyword to change the formate of Float.
const to_decimal = totalnumber.toFixed(5);
console.log(to_decimal);