const measureRain = (inches) => {
  if(inches == 0){
    return "drought";
  }else if(inches > 0 && inches <= 2){
    return "dry";
  }else if(inches > 2 && inches <= 4){
    return "average";
  }else if(inches > 4 &&  inches <= 6){
    return "rainy";
  }else{
    return "flood";
  };
};
//console.log(measureRain(3));

const happyBirthdayPet = (breed, age) => {
  if(breed == 'cat' && age <  5){
    return 'Mew  mew!';
  }else if(breed == 'cat'  && age >= 5){
    return 'Meow meow!';
  }else if(breed == 'dog'  && age < 5){
    return 'Arf arf!';
  }else if(breed == 'dog'  && age >= 5 || age < 10){
    return 'Woof woof!';
  }else if(breed == 'dog'  && age >= 10){
    return 'Boof!';
  }else if(breed  == 'snake'){
    return 'Hiss hiss';
  }else{
    return 'Happy  birthday!';
  }
};
// console.log(happyBirthdayPet('cat', 6));

const funTypes = (jsType) => {
  if(typeof jsType == 'string'){
    return "That's just some text.";
  }else if(typeof jsType == 'number'){
    return "That's a good number.";
  }else if(typeof jsType == 'boolean'){
    return "To bool, or not to bool?";
  }else if(typeof jsType == 'undefined'){
    return "Nothing, but I didn't set that.";
  }else if(typeof jsType == 'undefined'){
    return "Nothing, and I didn't set that.";
  }else if(typeof jsType == 'null'){
    return "Nothing, and I did set that.";
  }else if(typeof jsType == 'object'){
    return "Anybody got the key?";
  }else if(typeof jsType == 'array'){
    return "I order you to be indexed.";
  }else if(typeof jsType == 'NaN'){
    return "Well, now you're just showing off.";
  };
};
// console.log(funTypes('ying'))

/*
const rounder = (float, roundingSetting) => {
};
*/


const fizzBuzzish = (num) => {
  if(num % 3 == 0 && num % 5 == 0){
    return "fizzBuzz!";
  }else if(num % 3 == 0){
    return "fizz";
  }else if(num % 5 == 0){
    return "buzz";
  };
};
console.log(fizzBuzzish(15));

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  // rounder,
  fizzBuzzish,
};

