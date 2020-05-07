function shake(elementID,targetNode = undefined,intensity = 2){
  //setup
  var id = "#" + elementID;
  let element = targetNode != undefined?
                document.getElementById(elementID).childNodes[targetNode]
                :
                element = document.getElementById(elementID)

  const originalElementColor = element.style.color
  element.setAttribute("originalColor",originalElementColor) //place this color attribute in the element as an interupting this animation means the color wont be set

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
    changeBegin   : ()=>{element.style.color= "rgba(255, 0, 0, 0.9)"},
    changeComplete: ()=>{element.style.color= element.getAttribute("originalColor")},
  });
};

export {shake}

// import {popIn,popOut} from "./utilities/pop.js"