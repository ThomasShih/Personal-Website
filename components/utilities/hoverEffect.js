function animateButton(scale, duration, elasticity,elementID){
  //setup
  const id = "#" + elementID;
  const originalColor = document.getElementById(elementID).getAttribute("originalColor")

  //processing
  anime.remove(id);
  anime({
    targets: id,
    scale: scale,
    duration: duration,
    easing: 'easeInOutExpo',
    elasticity:elasticity,
    changeComplete: ()=>{if(originalColor!=undefined){document.getElementById(elementID).style.color= originalColor}},
  });
};

function enterButton(id){animateButton(1.1, 200, 400,id)};
function leaveButton(id){animateButton(1.0, 200, 100,id)};

function Wrapper({Component,children}){
  

  return (
    <Component>children</Component>
  )
}

export default Wrapper



// import {enterButton,leaveButton} from "../utilities/buttonEffects"