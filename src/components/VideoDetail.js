import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

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

  return (
    <div>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
    </div>
  );
};

export default VideoDetail;
