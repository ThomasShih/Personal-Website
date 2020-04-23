function animateButton(scale, duration, elasticity,elementID){
  //setup
  var id = "#" + elementID;

  //processing
  anime({
    targets: id,
    scale: scale,
    duration: duration,
    elasticity: elasticity,
  });
};

function enterButton(id){animateButton(1.1, 800, 400,id)};
function leaveButton(id){animateButton(1.0, 600, 300,id)};

export {enterButton,leaveButton}

// import {enterButton,leaveButton} from "../utilities/buttonEffects"