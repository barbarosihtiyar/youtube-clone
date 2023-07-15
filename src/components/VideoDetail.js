import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";
import { Loader, Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Link, useParams } from "react-router-dom";

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
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
      <Link to={`/channel/${channelId}`}>
      <span>{title}</span>
      </Link>
      <Link to={`/channel/${channelId}`}>
      <span> {channelTitle}</span>
      </Link>
      <span> {parseInt(viewCount).toLocaleString()} views</span>
      <span> {parseInt(likeCount).toLocaleString()} likes</span>
      <div>
      <Videos videos={videos} direction="column" />
      </div>
    </>
  );
};

export default VideoDetail;
