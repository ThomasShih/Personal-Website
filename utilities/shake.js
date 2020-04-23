function shake(elementID,intensity){
  if(elementID === "*"){
    var id = elementID;
  }else{
    var id = "#" + elementID;
  }
  const originalElementColor = document.getElementById(elementID).style.color

  anime.remove(id);
  anime({
    targets: id,
    duration: 500,
    keyframes:[
                  {translateX:intensity},
                  {translateX:-1*intensity},
                  {translateX:intensity},
                  {translateX:-1*intensity},
                  {translateX:intensity},
                  {translateX:0}
              ],
    easing: 'easeInOutQuad',
    changeBegin   : ()=>{document.getElementById(elementID).style.color= "rgba(255, 0, 0, 0.7)"},
    changeComplete: ()=>{document.getElementById(elementID).style.color= originalElementColor},
  });
};

export {shake}

// import {popIn,popOut} from "../utilities/pop.js"