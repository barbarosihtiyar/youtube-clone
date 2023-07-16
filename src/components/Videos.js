import React from "react";
import { VideoCard, ChannelCard, Loader } from "./index";
import { useMainContext } from "../contexts/context";
import { fetchFromApi } from "../utils/fetchFromApi";

const Videos = ({videos,display }) => {
  const { selectedCategory } = useMainContext();
  // console.log(videos)
  if (!videos?.length) return <Loader />;
  return (
    <div className="h-full">
      {display === false ? 
      <></> : 
      <div className="flex gap-x-3 mb-5">
        <div className="text-3xl font-bold">{selectedCategory}</div>
        <div className="text-red-600 text-3xl font-bold">videos</div>
      </div>}
      <div className="flex flex-wrap max-w-full gap-x-3 " style={display === false ? {justifyContent:"center"} : {justifyContent:"normal"}} >
        {videos.map((video, index) => (
         (video.id.videoId || video.id.channelId) &&
          <div key={index}>
            {video.id.channelId && <ChannelCard style={{minWidth:"310px"}} channelDetail={video} />}
            {video.id.videoId && <VideoCard video={video} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
