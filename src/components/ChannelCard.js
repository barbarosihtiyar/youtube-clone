import React from 'react'
import { TiTick } from './index'
import { Link } from 'react-router-dom'

const ChannelCard = ({channelDetail,style}) => {
    // console.log(channelDetail)
  return (
    <div className="flex cursor-pointer mt-8 justify-center" style={style}>
      <Link to={`channelDetail/${channelDetail?.snippet?.channelId}`}>
      <div className='flex flex-col'>
        <img className='rounded-full' src={channelDetail?.snippet?.thumbnails?.high?.url} alt={channelDetail?.id?.channelDetailId} width={200} />
        <div className="channelDetailCard max-w-full">
         <div className="flex items-center gap-x-1 channelCard justify-center">
         <p>{channelDetail?.snippet?.title?.slice(0, 28)}</p>
         <TiTick />
         </div>
        </div>
    </div>
      </Link>
    </div>
  )
}

export default ChannelCard