import {CSSTransition} from 'react-transition-group';
import './utilities.css';

const PopAnimation = ({ in: inProp,children,className,id,style}) => {
  return(
    <CSSTransition mountOnEnter in={inProp} timeout={750} classNames="popAnimation">
      <div className={className} id={id} style={style}>
        {children}
      </div>
    </CSSTransition>
)}

export {PopAnimation}