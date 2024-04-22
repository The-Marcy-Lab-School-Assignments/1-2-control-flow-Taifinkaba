/** FEEDBACK: You are so close! The tests in this one is not the same as the other so you needed to change the conditions a bit to match the number! */
const measureRainSwitch = (inches) => {
  switch(true){
    case inches === 0:
      console.log('drought');
      break;
    case inches >  0  && inches < 2:
      console.log('dry');
      break;
    case inches >= 2 && inches < 4:
      console.log('average');
      break;
    case inches >= 4 && inches < 6:
      console.log('rainy');
      break;
    default:
    console.log('flood');
  };
};
// measureRainSwitch(0);
// measureRainSwitch(1);
// measureRainSwitch(2);
// measureRainSwitch(3);
// measureRainSwitch(4);
// measureRainSwitch(5);
// measureRainSwitch(6);
// measureRainSwitch(7);



// const measureRain = (inches) => {
//   if(inches === 0){
//     console.log('drought');
//   }else if(inches < 2){
//     console.log("dry");
//   }else if(inches < 4){
//     console.log("average");
//   }else if(inches < 6){
//     console.log("rainy");
//   }else{
//     console.log("flood");
//   };
// };

const rounderSwitch = (float, roundingSetting) => {
  switch(roundingSetting){
    case 'up':
      return Math.ceil(float);
      break;
    case 'down':
      return Math.floor(float)
      break;
    case 'honest':
      return Math.round(float);
    break;
    default:
      return 'Something went wrong?';
  }
};
// console.log(rounderSwitch(1.2, 'up'));
// console.log(rounderSwitch(2.8, 'down'));
// console.log(rounderSwitch(3.5, 'honest'));

// const rounder = (float, roundingSetting) => {
//   if(roundingSetting == 'up' ) {
//     return Math.ceil(float);
//   }else if(roundingSetting == 'down'){
//     return Math.floor(float);
//   }else if(roundingSetting == 'honest'){
//     return Math.round(float);
//   };
// };

module.exports = {
  measureRainSwitch,
  rounderSwitch,
};
