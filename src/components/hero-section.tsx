"use client";

import { EmailForm } from "./email-form";
import Image from "next/image";
import { useState } from "react";

interface UserType {
  id: string;
  title: string;
  image: string;
  color: string;
  label: string;
}

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0); // start with first expanded

  const userTypes: UserType[] = [
    {
      id: "healthcare",
      title: "Healthcare professionals",
      image: "/images/healthcare.jpg",
      color: "bg-blue-500",
      label: "Healthcare Professionals",
    },
    {
      id: "recruiters",
      title: "Recruiters",
      image: "/images/recruiter.jpg",
      color: "bg-red-500",
      label: "Recruiters",
    },
    {
      id: "patients",
      title: "Patients",
      image: "/images/patient.jpg",
      color: "bg-teal-500",
      label: "Patients",
    },
  ];

  return (
    <section className={`bg-[#083244] text-white py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Healthcare staffing reimagined
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-lg">
                Join Pryme Nursing and connect healthcare professionals,
                agencies, and patients seamlessly.
              </p>
            </div>
            <EmailForm />
          </div>

          {/* Right */}
          <div className="relative">
            <div className="flex h-[500px] gap-2">
              {userTypes.map((userType, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={userType.id}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`
                      group/item relative rounded-3xl overflow-hidden cursor-pointer
                      transition-all duration-500 ease-in-out
                      ${isActive ? "flex-[2]" : "flex-[0.6]"}
                    `}
                  >
                    <Image
                      fill
                      priority
                      src={userType.image || "/placeholder.svg"}
                      alt={userType.title}
                      className={`
                        w-full h-full object-cover transition-transform duration-500 hover:scale-105
                        ${index === 0 ? "object-[calc(50%_-_55px)_center]" : ""}
                        ${index === 1 ? "object-[calc(50%_-_10px)_center]" : ""}
                        ${index === 2 ? "object-[calc(50%_-_95px)_center]" : ""}
                      `}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

                    {/* Horizontal title (only for expanded card) */}
                    {isActive && (
                      <div className="absolute bottom-8 left-4 right-4 transition-opacity duration-300 opacity-100">
                        <h3 className="text-white font-semibold text-lg drop-shadow">
                          {userType.title}
                        </h3>
                      </div>
                    )}

                    {/* Vertical label (only for collapsed cards) */}
                    {!isActive && (
                      <div className="">
                        <div
                          className={`
                       absolute  flex items-center gap-3
                        ${index === 0 ? "bottom-[120px] -left-[108px]" : ""}
                        ${index === 1 ? "bottom-14 -left-10" : ""}
                        ${index === 2 ? "bottom-12 -left-7" : ""}
                      `}
                        >
                          <div className="relative flex items-center gap-3 -rotate-90">
                            <span className="z-30 pl-3 pt-1 whitespace-nowrap text-white font-semibold tracking-wide text-lg drop-shadow">
                              {userType.label}
                            </span>
                            <span
                              className={`${userType.color} absolute top-0 left-0 w-12 h-14 shadow-lg`}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
