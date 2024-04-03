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

const funTypes = () => {
};

/*
const rounder = () => {
};

const fizzBuzzish = () => {
};
*/
module.exports = {
  measureRain,
  happyBirthdayPet,
  // funTypes,
  // rounder,
  // fizzBuzzish,
};

