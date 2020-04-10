function shake(elementID,amount){
    if(elementID === "*"){
      var id = elementID;
    }else{
      var id = "#" + elementID;
    }
  
    anime.remove(id);
    anime({
      targets: id,
      duration: 100,
      keyframes:[
                    {translateX:amount},
                    {translateX:-1*amount},
                    {translateX:amount},
                    {translateX:-1*amount},
                    {translateX:amount},
                    {translateX:0}
                ],
      easing: 'easeInOutQuad',
      changeBegin   : ()=>{document.getElementsByTagName("BODY")[0].style.overflow= "hidden"},
      changeComplete: ()=>{document.getElementsByTagName("BODY")[0].style.overflow= "auto"},
    });
  };

export {shake}

// import {popIn,popOut} from "../utilities/pop.js"