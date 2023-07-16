import React, { useState } from "react";
import { VideoCard, ChannelCard, Loader } from "./index";
import { useMainContext } from "../contexts/context";

const Videos = ({videos,display }) => {
  const { selectedCategory } = useMainContext();
  const [stateLoader,setStateLoader] = useState(false)
  // useEffect(() => {
  //   if(videos?.length > 0){
  //     console.log(videos[videos.length-1])
  //     if(videos[0]?.snippet?.thumbnails?.high?.url){
  //         setStateLoader(true)
  //     }else{
  //       setStateLoader(false)
  //     }
  //   }
  // })
  if (!videos?.length) return <Loader />;
  return (
    <div className="h-full">
      {display === false ? 
      <></> : 
      <div className="flex gap-x-3 mb-2">
        <div className="text-3xl font-bold">{selectedCategory}</div>
        <div className="text-red-600 text-3xl font-bold">videos</div>
      </div>}
      <div className="flex flex-wrap max-w-full " style={display === false ? {justifyContent:"center"} : {justifyContent:"normal"}} >
        {videos.map((video, index) => (
         (video.id.videoId || video.id.channelId) &&
          <React.Fragment key={index} >
            {video.id.channelId && <ChannelCard style={{minWidth:"310px"}} channelDetail={video} />}
            {video.id.videoId && <VideoCard video={video} display={display}/>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Videos;
