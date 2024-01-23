import useOnlineStatus from "../Utils/useOnlineStatus";
import { useEffect } from "react";
import { CORS_API } from "../Utils/constants";

const About = ()=>  {
  const OnlineStatus = useOnlineStatus();

  if (!OnlineStatus) {
    return <h1>Your Offline</h1>
  }  


    return (
      <div>
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/mbcjw5tiuemimw1pfjli"></img>
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/mbcjw5tiuemimw1pfjli"></img>
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/mbcjw5tiuemimw1pfjli"></img>
    </div>
      
            
      
    )
}

export default About;
