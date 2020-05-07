const Component = window.styled.div`
  grid-area:portrait;
  text-align: center;

  img{
    max-width: 30vw;
  }
`;

const Portrait = () =>
  <Component>
    <img id="landingPotrait" src="./assets/portraitCircle.svg"></img>
  </Component>

export default Portrait