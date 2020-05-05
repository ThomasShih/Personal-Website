import {CSSTransition} from 'react-transition-group'

function pop(elementID,scale,opacity){
  if(elementID === "*"){
    var id = elementID;
  }else{
    var id = "#" + elementID;
  }

  //processing
  anime({
    targets: id,
    opacity: opacity,
    scale: scale,
    easing: "spring(1,200,15,0)", //'spring(mass, stiffness, damping, velocity)'
  });
};

function popIn(id){pop(id,[0.5,1],[0,1])};
function popOut(id){pop(id,[1,0],[1,0])};

function usePop(id){
  //Make sure default opacity is set to 0
  popIn(id)
  const cleanUp = () => {popOut(id)}
  return cleanUp
}

const PopAnimation = ({ in: inProp,children,className,id,style}) => {
  console.log(inProp)
  return(
  <div className={className} id={id} style={style}>
    <CSSTransition in={inProp} timeout={500} classNames="my-node">
      {children}
    </CSSTransition>
  </div>
)}

export {popIn,popOut,usePop,PopAnimation}