import { Clock, MessageSquare, Target, Zap } from "lucide-react";
import Image from "next/image";
import { EmailForm } from "./email-form";

export function FeaturesSection() {
  const features = [
    {
      icon: "/svg/all-roles.svg",
      title: "All Roles in One Platform",
      description:
        "Serve professionals, agencies, and patients equally with tailored tools for each need.",
      position: "top-left",
    },
    {
      icon: "/svg/real-time.svg",
      title: "Real-Time Shift Tracking",
      description:
        "Clock in and out with proof and see hours logged instantly for full transparency.",
      position: "top-right",
    },
    {
      icon: "/svg/ai-powered.svg",
      title: "AI Powered Credential Screening",
      description:
        "Speed up hiring and reduce manual checks with automated license and document verification.",
      position: "bottom-left",
    },
    {
      icon: "/svg/communication.svg",
      title: "Built-In Communication",
      description:
        "Interview, chat, or call directly from the app without switching platforms.",
      position: "bottom-right",
    },
  ];

  return (
    <section
      id="features"
      className="py-16 -mt-16 lg:py-24 bg-white rounded-t-3xl md:rounded-t-[52px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            We are building more than just a healthcare job board.
          </h2>
          <p className="text-lg lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Pryme Nursing is the all-in-one platform that connects verified
            healthcare professionals, hospitals, and patients with tools that
            make hiring, working, and getting care faster, safer, and easier.
            From{" "}
            <span className="px-3 py-0.5 sm:py-[3px] rounded-full bg-blue-100 text-blue-800 font-medium">
              Electronic Medical Records
            </span>{" "}
            and{" "}
            <span className="px-3 py-0.5 sm:py-[3px] rounded-full bg-green-100 text-green-800 font-medium">
              attendance tracking
            </span>{" "}
            to virtual visits,{" "}
            <span className="px-3 py-0.5 sm:py-[3px] rounded-full bg-purple-100 text-purple-800 font-medium">
              video conferencing
            </span>
            , and AI-powered{" "}
            <span className="px-3 py-0.5 sm:py-[3px] rounded-full bg-pink-100 text-pink-800 font-medium">
              ChatBot
            </span>{" "}
            support everything you need is in one place.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-16">
          <EmailForm />
        </div>

        <div className="relative">
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            <div className="relative mx-auto w-full h-80 rounded-2xl overflow-hidden mb-8">
              <Image
                fill
                src="/images/corporate-seating.jpg"
                alt="Healthcare professionals"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#F4F7FB] rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Image
                      width={24}
                      height={24}
                      src={feature.icon}
                      alt={feature.title}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-rows-2 lg:grid-cols-3 lg:gap-8 lg:items-start">
            {/* First Column - Two feature cards */}
            <div className="bg-[#F4F7FB] rounded-3xl p-8 shadow-sm">
              <div className="flex flex-col items-start">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  All Roles in One Platform
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  Serve professionals, agencies, and patients equally with
                  tailored tools for each need.
                </p>
              </div>
            </div>

            {/* Second Column - Central image spanning 2 rows */}
            <div className="col-span-1 row-span-2 flex items-center justify-center">
              <div className="relative w-full h-[532px] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  fill
                  src="/images/corporate-seating.jpg"
                  alt="Healthcare professionals"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-[#F4F7FB] rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col items-start">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  AI Powered Credential Screening
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  Speed up hiring and reduce manual checks with automated
                  license and document verification.
                </p>
              </div>
            </div>

            {/* Third Column - Two feature cards */}
            <div className="bg-[#F4F7FB] rounded-3xl p-8 shadow-sm">
              <div className="flex flex-col items-start">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Real-Time Shift Tracking
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  Clock in and out with proof and see hours logged instantly for
                  full transparency.
                </p>
              </div>
            </div>
            <div className="bg-[#F4F7FB] rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col items-start">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Built-In Communication
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  Interview, chat, or call directly from the app without
                  switching platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
