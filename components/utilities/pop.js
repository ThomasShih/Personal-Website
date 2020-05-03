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

export {popIn,popOut,usePop}