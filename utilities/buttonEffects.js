import { lockElement,unlockElement } from "./elementLock";

function animateButton(scale, duration, elasticity,elementID){
  //setup
  if(lockElement(elementID) == false){return}
  var id = "#" + elementID;
  anime.remove(id);
  anime({
    targets: id,
    scale: scale,
    duration: duration,
    elasticity: elasticity,
    changeComplete: () => unlockElement(elementID),
  });
};

function enterButton(id){animateButton(1.1, 800, 400,id)};
function leaveButton(id){animateButton(1.0, 600, 300,id)};

export {enterButton,leaveButton}

// import {enterButton,leaveButton} from "../utilities/buttonEffects"