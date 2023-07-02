import React from 'react'
import { TiTick } from './index'

const VideoCard = ({video}) => {
  // console.log(video)
  return (
    video.id.videoId && 
      <div className="flex cursor-pointer">
      <div className='flex flex-col'>
        <img src={video?.snippet?.thumbnails?.high?.url} alt={video.id.videoId} width={310} />
        <div className="bg-zinc-800 videoCard max-w-full">
        {video.snippet.title.length > 28 ? 
           <p className='mb-2'>{video.snippet.title.slice(0, 28)}...</p>
           : <p className='mb-2'>{video.snippet.title}</p>}
         <div className="flex items-center gap-x-1">
         <p>{video.snippet.channelTitle.slice(0, 28)}</p>
         <TiTick />
         </div>
        </div>
    </div>
    </div>
  )
}

export default VideoCard