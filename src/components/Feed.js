import React, { useEffect, useState } from 'react'
import Videos from './Videos'
import { fetchFromApi } from '../utils/fetchFromApı'

const Feed = () => {
const [selectedCategory,setSelectedCategory] = useState('New')
const [videos, setVideos] = useState(null);

useEffect(() => {
  
  fetchFromApi(`search`).then((data) => setVideos(data.items))
  console.log(videos)
  }, [selectedCategory]);
  
  return (
    <div  className='ml-64 mt-4'>
      <Videos videos={videos} name={"New"}/>
    </div>
  )
}

export default Feed