function shake(elementID,intensity){
  //setup
  var id = "#" + elementID;
  const originalElementColor = document.getElementById(elementID).style.color
  document.getElementById(elementID).setAttribute("originalColor",originalElementColor) //place this color attribute in the element as an interupting this animation means the color wont be set

  //processing
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
                  {translateX:-1*intensity},
                  {translateX:intensity},
                  {translateX:0}
              ],
    easing: 'easeInOutQuad',
    changeBegin   : ()=>{document.getElementById(elementID).style.color= "rgba(255, 0, 0, 0.7)"},
    changeComplete: ()=>{document.getElementById(elementID).style.color= document.getElementById(elementID).getAttribute("originalColor")},
  });
};

export {shake}

// import {popIn,popOut} from "../utilities/pop.js"