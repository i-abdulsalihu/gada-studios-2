"use client";

import { cn } from "@/lib/utils";
import { FC, useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [videoProgress, setVideoProgress] = useState<number>(0);
  const [videoDuration, setVideoDuration] = useState<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setVideoDuration(video.duration);

      const handleVideoEnd = () => {
        setIsPaused(true);
        setVideoProgress(0);
      };

      video.addEventListener("ended", handleVideoEnd);

      return () => {
        video.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const video = videoRef.current;
    if (video && videoDuration != null) {
      const updateProgress = () => {
        setVideoProgress(video.currentTime / videoDuration);
      };

      const interval = setInterval(updateProgress, 10);

      return () => clearInterval(interval);
    }
  }, [isPaused, videoDuration]);

  function togglePauseButton() {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPaused(false);
      } else {
        video.pause();
        setIsPaused(true);
      }
    }
  }

  return (
    <figure className="bg-black-950 group relative block aspect-[1.8] w-full md:h-[787px]">
      <div className="absolute inset-0 top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 scale-[0.9] items-center justify-center rounded-full transition-all duration-200 ease-out group-hover:scale-100">
        <PausePlayButton
          isPaused={isPaused}
          progress={videoProgress}
          onPlayPause={togglePauseButton}
        />
      </div>
      <video
        ref={videoRef}
        className="size-full"
        poster="/images/video-thumbnail.jpeg"
      >
        <source
          src="https://ik.imagekit.io/ikmedia/example_video.mp4"
          type="video/mp4"
        />
      </video>
    </figure>
  );
};

export default VideoPlayer;

interface PausePlayButtonProps {
  progress: number;
  isPaused: boolean;
  onPlayPause: () => void;
  size?: number | undefined;
  width?: number | undefined;
}

const PausePlayButton: FC<PausePlayButtonProps> = ({
  isPaused,
  onPlayPause,
  progress,
  size = 112,
  width = 6,
}) => {
  const center = size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);

  const Icon = isPaused ? FaPlay : FaPause;

  return (
    <div
      onClick={onPlayPause}
      className="relative flex items-center justify-center"
    >
      <svg
        width={size}
        height={size}
        style={{
          transform: "rotate(-90deg)",
        }}
        className="absolute"
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          strokeWidth={width}
          className="stroke-white/60"
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          strokeWidth={width}
          className="stroke-primary-500"
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>

      <button className="flex size-[100px] cursor-pointer items-center justify-center rounded-full bg-white/60">
        <div className="relative flex size-[86px] scale-100 items-center justify-center rounded-full bg-gradient-to-b from-white/30 to-white/70 shadow-md transition-all duration-200 ease-out active:scale-90">
          <Icon
            className={cn(
              "size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105",
              {
                "ml-1": isPaused,
              },
            )}
            style={{
              filter:
                "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
            }}
          />
        </div>
      </button>
    </div>
  );
};
