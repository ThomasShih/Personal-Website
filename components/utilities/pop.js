import {CSSTransition} from 'react-transition-group';
import './utilities.css';

const PopAnimation = ({ in: inProp,children,className,id,style}) => {
  return(
    <CSSTransition mountOnEnter in={inProp} timeout={1250} classNames="my-node">
      <div className={className} id={id} style={style}>
        {children}
      </div>
    </CSSTransition>
)}

export {PopAnimation}