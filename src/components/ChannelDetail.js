import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi';
import { ChannelCard, Videos } from "./index"

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail,setChannelDetail] = useState(null)
  const [videos,setVideos] = useState([])

  useEffect(() => {
    fetchFromApi(`channels?part="snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))
  },[id])

  console.log(channelDetail,videos)
  return (
    <div style={{minHeight:"95vh"}}>
      <div className='channelDetailLinear'></div>
      <ChannelCard style={{marginTop:"-98px"}}  channelDetail={channelDetail}/>
      <Videos videos={videos}/>
    </div>
  )
}

export default ChannelDetail