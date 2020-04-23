//This function is to used to prevent two anime.js animations from overwriting each other

function lockElement(id){
  console.log(id)
  if(document.getElementById(id).getAttribute("animationPlaying") != "true"){
    //if there is no animation playing, set a flag to say its play
    document.getElementById(id).setAttribute("animationPlaying","true")
    return true
  }else{
    return false
  }
}

function unlockElement(id){
  //under the assumption that whatever animation is playing has locked the element, unlock it
  document.getElementById(id).setAttribute("animationPlaying","false")
}

export {lockElement,unlockElement}