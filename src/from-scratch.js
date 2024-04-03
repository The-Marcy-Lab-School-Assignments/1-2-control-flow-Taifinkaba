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
/*
const happyBirthdayPet = () => {
};

const funTypes = () => {
};

const rounder = () => {
};

const fizzBuzzish = () => {
};
*/
module.exports = {
  measureRain,
  // happyBirthdayPet,
  // funTypes,
  // rounder,
  // fizzBuzzish,
};

