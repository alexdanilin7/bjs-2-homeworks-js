"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = b**2 - 4*a*c;
  
  if (D < 0){
     return arr;
    }

  if (D==0){
    arr.push(-b/(2*a))
  }else{
    arr.push((-b + Math.sqrt(D))/(2*a));
    arr.push((-b - Math.sqrt(D))/(2*a))
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentOfMounth = (percent/100)/12;
  let bodyCredits = amount - contribution;
  let payOfMounth = bodyCredits * (percentOfMounth + (percentOfMounth / (((1 + percentOfMounth)**countMonths) - 1)))
  let all_pays = payOfMounth*countMonths;
  return Math.round(all_pays * 100) / 100;
}


console.log(calculateTotalMortgage(10, 0, 50000, 12))