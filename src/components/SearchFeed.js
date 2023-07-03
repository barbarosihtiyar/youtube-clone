import React, { useEffect, useState } from 'react'
import { Videos } from './index'
import { useMainContext } from '../contexts/context';
import { fetchFromApi } from '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { selectedCategory,setSelectedCategory } = useMainContext();
  const { searchTerm } = useParams();
  
  setSelectedCategory(searchTerm)

  useEffect(() => {
    setVideos(null);

    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
    // console.log(videos)
  }, [selectedCategory]);

  console.log(searchTerm)
  return (
    <div> <div className="ml-64 mt-4">
    <Videos videos={videos} />
  </div></div>
  )
}

export default SearchFeed