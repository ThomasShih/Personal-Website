import {lockElement,unlockElement} from "./elementLock"

function pop(elementID, duration, elasticity,scale,opacity,callback=undefined){
  //setup
  if(lockElement(elementID) == false){return}
  if(callback === undefined){
    callback = ()=>{return}
  }
  if(elementID === "*"){
    var id = elementID;
  }else{
    var id = "#" + elementID;
  }

  anime.remove(id);
  anime({
    targets: id,
    opacity: opacity,
    scale: scale,
    duration: duration,
    easing: 'easeInOutQuad',
    changeComplete: ()=>{
                          callback
                          id.includes("#") && unlockElement(elementID);
                        },
  });
};

function popIn(id){pop(id, 400,0,[0.5,1],[0,1])};
function popOut(id,callback){pop(id, 500,0,[1,0],[1,0],callback)};

export {popIn,popOut}

// import {popIn,popOut} from "../utilities/pop.js"