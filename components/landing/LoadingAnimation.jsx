const Component = window.styled.div`
  display: flex;
  height: 50vh;
  align-items: center;
  justify-content: center;

  h1{
    color: white;
    text-align: center;
  }
  
  h1:after {
    content: '|';
    animation: dots 1.2s steps(5, end) infinite;
  }

  @keyframes dots {
    0%, 20% { color: rgba(0,0,0,0); text-shadow: .25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0), .75em 0 0 rgba(0,0,0,0), 1em 0 0 rgba(0,0,0,0);}
    40%{color: white; text-shadow: .25em 0 0 white, .5em 0 0 rgba(0,0,0,0), .75em 0 0 rgba(0,0,0,0), 1em 0 0 rgba(0,0,0,0);}
    60%{text-shadow: .25em 0 0 white, .5em 0 0 white, .75em 0 0 rgba(0,0,0,0), 1em 0 0 rgba(0,0,0,0);}
    80%{text-shadow: .25em 0 0 white, .5em 0 0 white, .75em 0 0 white, 1em 0 0 rgba(0,0,0,0);}
    100%{text-shadow: .25em 0 0 white, .5em 0 0 white, .75em 0 0 white, 1em 0 0 white;}
  }
`;

const LoadingAnimation = () => <Component><h1></h1></Component>

export default LoadingAnimation