import YouTubePlayer  from "react-player/lib/players/YouTube"

const Component = window.styled.div`
  grid-area:media;
  display: flex;
  align-items: center;
  margin:.5em 1em .5em 1em;

  img{
    width: 100%;
  }

  @media (max-width:500px){
    max-width: 100vw;
  }

  @media (max-width:1099px){
    max-width: 60vw;
  }
`;

function Media(props){
  const mediaDevice = props.picture? <img src={props.picture}></img> : <YouTubePlayer url={props.video} width="100%"/>;
  return(
    <Component className={props.className}>
      {mediaDevice}
    </Component>
  )
}

export default Media