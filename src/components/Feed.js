import React, { useEffect, useState } from "react";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useMainContext } from "../contexts/context";
import { Sidebar} from "./index"

const Feed = () => {
  const [videos, setVideos] = useState(null);
  const { selectedCategory } = useMainContext();

  useEffect(() => {
    setVideos(null);

    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
    // console.log(videos)
  }, [selectedCategory]);

  return (
    <>
      <Sidebar />

    <div className="ml-64 mt-4">
      <Videos videos={videos} name={{ selectedCategory }} />
    </div>
    </>
  );
};

export default Feed;
