import {CSSTransition} from 'react-transition-group'

const PopAnimation = ({ in: inProp,children,className,id,style}) => {
  console.log(inProp)
  return(
  <div className={className} id={id} style={style}>
    <CSSTransition in={inProp} timeout={500} classNames="my-node">
      {children}
    </CSSTransition>
  </div>
)}

export {PopAnimation}