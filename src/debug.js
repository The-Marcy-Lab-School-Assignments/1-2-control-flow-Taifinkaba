const getRandomIntInRange = (min, max) => {
  if (min > max) throw new Error('min must be less than max');
  return Math.floor(Math.random() * (max - min)) + min;
};

const coolnessGauge = (numOfFridges) => {
  return numOfFridges <= 3 ? 'You need more fridges.' : 'You are downright chilly!';
};

const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    console.log('No pops? Maybe try one.');
  } 
  else if (numOfFunkoPops <= 10) {
    console.log('Only a few? Keep having fun!');
  } 
  else if (numOfFunkoPops > 10 && numOfFunkoPops <= 20) {
    console.log('You have a problem.');
  } 
  else if (numOfFunkoPops > 20 && numOfFunkoPops <= 30) {
    console.log('You need help!');
  } 
  else {
    console.log('You need an intervention!!!');
  }
};
/** FEEDBACK: You are returning weather report however is weather report a variable we can access from where that return is? */
const getWeatherReport = (temperature) => {
  let weatherReport;
  if (temperature > 90) {
    weatherReport = "It's hot and gross out.";
    console.log(weatherReport);
  } else if (temperature > 70) {
    weatherReport = "At least it's a dry heat.";
    console.log(weatherReport);
  } else if (temperature < 32) {
    weatherReport = "Wow, it's cold out.";
    console.log(weatherReport);
  }else{
    weatherReport = "It's not too bad!";
    console.log(weatherReport);
  }
  console.log("And that's your report!");
  return weatherReport;
};
/** FEEDBACK: The code was correct, the tests were reading the extra ? marks, which is why we do not leave commented out code!!!! So make it a habit to clean up your file before submitting! Also you have an extra space between else and if so make sure to keep your code consistent! */
const returnPositiveNegativeZero = (num) => {
  if(num < 0){
    return "Negative";
  }else if(num === 0){
    return "Zero";
  }else  if(num > 0){
    return "Positive";
  }
};

module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};
