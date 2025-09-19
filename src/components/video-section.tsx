"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

const bulletPoints = [
  "Listen to expert guidance on health",
  "Learn how Pryme is transforming access",
  "Stay informed and empowered",
];

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="pt-4 lg:pt-18 pb-12 lg:pb-32 -mt-8 md:-mt-16 rounded-t-3xl md:rounded-t-[52px] bg-[#F5FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Video */}
        <div className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg">
          <video
            ref={videoRef}
            src="/video/pryme-video.mp4"
            preload="auto"
            poster="/images/nurse-audio-section.jpg"
            className="absolute inset-0 w-full h-full object-contain" // 🔥 ensures video fully fits
          />

          {/* Overlay only when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                onClick={togglePlay}
                className="bg-white/80 hover:bg-white text-[#083244] px-6 py-3 rounded-full font-semibold shadow-lg transition"
              >
                <PlayIcon className="h-10 w-10 text-[#083244]" />
              </button>
            </div>
          )}

          {/* Pause button on top while playing */}
          {isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute bottom-4 right-4 bg-white/80 hover:bg-white text-[#083244] px-4 py-2 rounded-full font-semibold shadow-lg transition"
            >
              <PauseIcon className="h-6 w-6 text-[#083244]" />
            </button>
          )}
        </div>

        {/* Right: Text */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#083244]">
            Pryme Nursing – Caring for your well-being
          </h2>
          <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
            At Pryme Nursing, we believe access to healthcare should be seamless
            and empowering. Listen to our message and discover how we&apos;re
            transforming the way people connect with health resources.
          </p>
          <ul className="text-gray-700 space-y-2 text-base md:text-xl">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-center gap-3">
                <Image
                  width={30}
                  height={30}
                  src={"/svg/mark-black.svg"}
                  alt="Mark Icon"
                  className="w-[18px] h-[18px] sm:w-[23px] sm:h-[23px]"
                />
                <span className="text-base md:text-xl">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
