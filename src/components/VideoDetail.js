import React, { useRef } from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";
import { Loader, Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Link, useParams } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );

    
  }, [id]);
  
  if(!videoDetail?.snippet) return <Loader   />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;
  return (
    <>
    <div className="pt-5">
      <div className="flex flex-col w-full px-5">
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
      <div className="flex justify-between  py-3">
      <div className="flex flex-col gap-2">
      <Link to={`/channelDetail/${channelId}`}>
      <span>{title}</span>
      </Link>
      <Link to={`/channel/${channelId}`}>
      <div className="flex items-center gap-1">
      <span className=" text-neutral-300"> {channelTitle}</span>
      <CheckCircle style={{fontSize:"10px" ,color:"gray"}}/>
      </div>
      </Link>
      </div>
      <div className="flex gap-5 text-neutral-300">
      <span> {parseInt(viewCount).toLocaleString()} views</span>
      <span> {parseInt(likeCount).toLocaleString()} likes</span>
      </div>
      </div>
      </div>
      
      <div className="px-5 pt-5 ">
      <Videos display={false} videos={videos} />
      </div>
    </div>
    </>
  );
};

export default VideoDetail;
