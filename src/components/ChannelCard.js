import React from 'react'
import { TiTick } from './index'

const ChannelCard = ({channelDetail}) => {
    console.log(channelDetail)
  return (
    <div className="flex cursor-pointer mt-8 justify-center" style={{width:"300px"}}>
      <div className='flex flex-col'>
        <img className='rounded-full' src={channelDetail?.snippet?.thumbnails?.high?.url} alt={channelDetail.id.channelDetailId} width={200} />
        <div className="channelDetailCard max-w-full">
         <div className="flex items-center gap-x-1 channelCard justify-center">
         <p>{channelDetail.snippet.channelTitle.slice(0, 28)}</p>
         <TiTick />
         </div>
        </div>
    </div>
    </div>
  )
}

export default ChannelCard