import YouTubePlayer  from "react-player/lib/players/YouTube"

function Media(props){
  const mediaDevice = props.picture? <img src={props.picture}></img> : <YouTubePlayer url={props.video} width="100%"/>;
  return(
    <div className={props.className}>
      {mediaDevice}
    </div>
  )
}

export default Media