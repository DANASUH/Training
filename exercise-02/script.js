function checkAge(age) {
 if (age < 0) {
    return "invalid age";
  } else if (age >= 18) {
    return "adult";
    } else {
        return "minor";
    }
}


const checkAgeArrow = (age) => {
  if (age < 0) {
    return "invalid age";
  } else if (age >= 18) {
    return "adult";
  } else {
    return "minor";
  }
};


console.log("results of Function Declaration");
console.log(checkAge(21)); 
console.log(checkAge(15)); 
console.log(checkAge(-18)); 


console.log("results of Arrow Function");
console.log(checkAgeArrow(25)); 
console.log(checkAgeArrow(12));
console.log(checkAgeArrow(-18)); 