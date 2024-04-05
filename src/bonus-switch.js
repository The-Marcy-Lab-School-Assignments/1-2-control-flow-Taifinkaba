const measureRainSwitch = (inches) => {
  switch(true){
    
    case inches <= 1:
      console.log('drought');
      break;
    case inches <= 2:
      console.log('dry');
      break;
    case inches <= 4:
      console.log('average');
      break;
    case inches <= 6:
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
// measureRainSwitch(9);


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

const rounderSwitch = () => {
};

module.exports = {
  measureRainSwitch,
  rounderSwitch,
};
