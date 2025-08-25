"use client";

import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export function WaitlistCounter() {
  const [displayCount, setDisplayCount] = useState<number>(0);

  const animateCount = useCallback((target: number) => {
    const start = 0; // always start from 0
    const duration = 1200; // ms
    const steps = 50;
    const stepTime = duration / steps;
    const increment = (target - start) / steps;

    let current = start;
    let i = 0;

    const timer = setInterval(() => {
      i++;
      current += increment;
      setDisplayCount(Math.round(current));
      if (i >= steps) {
        clearInterval(timer);
        setDisplayCount(target); // stop exactly at target
      }
    }, stepTime);
  }, []);

  const fetchCount = useCallback(async () => {
    try {
      const res = await axios.get(`${BASE_URL}/waitlist/count`);
      const newCount = res.data?.data?.count || 0;
      animateCount(newCount);
    } catch (err) {
      console.error("Failed to fetch waitlist count", err);
    }
  }, [animateCount]);

  useEffect(() => {
    fetchCount(); // run once on mount

    // 🔥 listen to localStorage update from EmailForm
    const handler = () => fetchCount();
    window.addEventListener("storage", handler);

    return () => window.removeEventListener("storage", handler);
  }, [fetchCount]);

  return (
    <div className="pb-12 lg:pb-28 bg-[#083244]">
      <section className="w-full bg-[#E6F4F7] py-14 px-6">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Left Side: Text */}
          <div className="md:col-span-2 text-center md:text-left space-y-4">
            <h2 className="text-3xl lg:text-4xl font-semibold leading-wider">
              🚀 Be part of the movement
            </h2>
            <p className="text-lg md:text-2xl">
              The future of innovation is being shaped by thousands of people
              just like you. By joining our waitlist, you’ll unlock{" "}
              <span className="font-semibold">early access</span>,
              <span className="font-semibold">exclusive updates</span>.
            </p>
          </div>

          {/* Right Side: Counter */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-gradient-to-r from-indigo-500 to-[#083244] text-white rounded-xl px-10 py-8 shadow-lg flex flex-col items-center">
              <span className="text-5xl sm:text-6xl font-extrabold">
                {displayCount.toLocaleString()}
              </span>
              <p className="mt-2 text-base sm:text-lg text-indigo-100 text-center">
                amazing people have already joined 🎉
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
