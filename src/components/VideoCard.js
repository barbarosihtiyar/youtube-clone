import React from "react";
import { TiTick } from "./index";
import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constant";

const VideoCard = ({ video }) => {
  // console.log(video.id.videoId)
  return (
    video.id.videoId && (
      <div className="flex cursor-pointer">
        <div className="flex flex-col">
          <Link
            to={
              video?.id.videoId ? `/videoDetail/${video?.id.videoId}` : `/videoDetail/cV2gBU6hKfY`
            }
          >
            <img
              src={video?.snippet?.thumbnails?.high?.url}
              alt={video.id.id}
              width={310}
            />
          </Link>
          <div className="bg-zinc-800 videoCard max-w-full">
            <Link
              to={video?.id.videoId ? `/videoDetail/${video?.id.videoId}` : demoVideoUrl}
            >
              {video.snippet.title.length > 28 ? (
                <p className="mb-2">{video.snippet.title.slice(0, 28)}...</p>
              ) : (
                <p className="mb-2">{video.snippet.title}</p>
              )}
            </Link>
            <div className="flex items-center gap-x-1">
              <Link
                to={
                  video.snippet?.channelId
                    ? `/channel/${video.snippet?.channelId}`
                    : demoChannelUrl
                }
              >
                <p>{video.snippet.channelTitle.slice(0, 28)}</p>
              </Link>
              <TiTick />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default VideoCard;
