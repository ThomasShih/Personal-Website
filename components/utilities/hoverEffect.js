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

const enter = id => animateButton(1.1, 200, 400,id);
const leave = id => animateButton(1.0, 200, 100,id);

//wrapper uses button element as it has onMouseEnter and onMouseLeave
const Wrapper = ({className,hoverID,children})=>(
  <button id={hoverID}
          className={className}
          onMouseEnter= {() => {enter(hoverID)}}
          onMouseLeave= {() => {leave(hoverID)}}>
    {children}
  </button>
)

export default Wrapper