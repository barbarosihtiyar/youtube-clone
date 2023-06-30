import React from 'react'
import { VideoCard,ChannelCard, Loader } from "./index"

const Videos = ({name,videos}) => {
  if(!videos?.length) return <Loader />;

  return (
    <div className='h-full'>
    <div className="flex gap-x-3 mb-5">
    <div className='text-3xl font-bold'>{name}</div>
    <div className='text-red-600 text-3xl font-bold'>videos</div>
    </div>
    <div className="flex flex-wrap max-w-full">
    {videos.length > 0 ? videos.map((video,index) => (
    <div className='flex gap-x-3' key={index}>
    {video.id.videoId && <VideoCard video={video} /> }
      {video.id.channelId && <ChannelCard channelDetail={video} />}
    </div>
    )) : ""}
    </div>
    </div>
  )
}

export default Videos