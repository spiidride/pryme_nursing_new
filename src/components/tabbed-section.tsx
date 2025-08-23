"use client";

import type React from "react";

import { useRef } from "react";
import Image from "next/image";

interface Tab {
  id: string;
  label: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

interface ContentSection {
  title: string;
  description: string;
  features: string[];
  image: string;
  cta: string;
}

interface ContentData {
  healthcare: ContentSection;
  recruiters: ContentSection;
  patients: ContentSection;
}

export function TabbedSection() {
  const healthcareRef = useRef<HTMLDivElement>(null);
  const recruitersRef = useRef<HTMLDivElement>(null);
  const patientsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement | null>
  ): void => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const tabs: Tab[] = [
    { id: "healthcare", label: "Healthcare Professionals", ref: healthcareRef },
    { id: "recruiters", label: "Recruiters", ref: recruitersRef },
    { id: "patients", label: "Out-patients", ref: patientsRef },
  ];

  const content: ContentData = {
    healthcare: {
      title: "Find verified healthcare jobs that match your skills",
      description:
        "Browse opportunities from trusted employers, apply in one click, and track your shifts all in one place.",
      features: [
        "Browse roles that match your specialty and schedule",
        "Apply in one click using your stored profile and credentials",
        "Track shifts, clock in and out with proof, and get paid on time",
      ],
      image: "/images/nurse.jpg",
      cta: "Apply Now",
    },
    recruiters: {
      title: "Connect with verified professionals when you need them most",
      description:
        "Every candidate is verified, every credential is checked, and every shift is tracked for complete peace of mind.",
      features: [
        "Post jobs in minutes and access pre-screened candidates",
        "Use AI to verify credentials and licenses quickly",
        "Manage applicants, schedule interviews, and track attendance in real time",
      ],
      image: "/images/recruiters-prof.jpg",
      cta: "Get Started",
    },
    patients: {
      title:
        "For individuals or families seeking trusted in-home care services.",
      description:
        "Access a network of licensed healthcare providers, review their credentials, and store your medical records securely.",
      features: [
        "Submit care requests easily through a guided intake form",
        "Get matched with verified professionals from partner agencies",
        "Track request status, store medical records, and keep guardian information updated",
      ],
      image: "/images/patients.jpg",
      cta: "Track request",
    },
  };

  return (
    <section id="features" className={`bg-[#083244] mb-5`}>
      <div className="">
        <div className="bg-white rounded-t-3xl md:rounded-t-[52px] pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-row justify-between gap-4 py-2 md:px-18">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.ref || null)}
                  className={`leading-tight py-2 md:py-4 text-sm sm:text-lg md:text-2xl  transition-all duration-300 text-[#070B11] hover:text-[#070B11]/80 hover:bg-gray-50 ${
                    index === 0
                      ? "font-semibold border-b-4 border-[#070B11]"
                      : "font-normal"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="">
          {/* Healthcare Professionals Section */}
          <div
            ref={healthcareRef}
            className="rounded-t-3xl md:rounded-t-[52px] -mt-12 bg-[#CFFAFE] pt-4 lg:pt-18 pb-12 lg:pb-32"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
                <div className="w-full md:w-[45%]">
                  <div className="rounded-3xl overflow-hidden shadow-xl relative h-[400px] sm:h-[660px] ">
                    <Image
                      width={488}
                      height={82}
                      alt="Inner Description"
                      src="/svg/nurse-inner.svg"
                      className="absolute bottom-[20px] left-[20px] right-[20px] mx-auto z-30 w-full max-w-[calc(100%-40px)]"
                    />
                    <Image
                      fill
                      priority
                      src={content.healthcare.image || "/placeholder.svg"}
                      alt={content.healthcare.title}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-[55%] space-y-6 text-[#083244]">
                  <h2 className="text-3xl lg:text-4xl font-semibold leading-wider">
                    {content.healthcare.title}
                  </h2>
                  <p className="text-lg md:text-2xl ">
                    {content.healthcare.description}
                  </p>
                  <ul className="space-y-4">
                    {content.healthcare.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Image
                          width={30}
                          height={18}
                          src={"/svg/mark-teal.svg"}
                          alt="Mark Teal Icon"
                          className="w-[27px] h-[16px] sm:w-[30px] sm:h-[18px]"
                        />
                        <span className="text-lg md:text-2xl">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Recruiters Section */}
          <div
            ref={recruitersRef}
            className="rounded-t-3xl md:rounded-t-[52px] -mt-6 md:-mt-12 bg-[#FFE1E0] pt-4 lg:pt-18 pb-12 lg:pb-28"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-12 items-center">
                <div className="w-full md:w-[55%] space-y-6 text-[#4A0605]">
                  <h2 className="text-3xl lg:text-4xl font-semibold leading-wider">
                    {content.recruiters.title}{" "}
                  </h2>
                  <p className="text-lg md:text-2xl ">
                    {content.recruiters.description}
                  </p>
                  <ul className="space-y-4">
                    {content.recruiters.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Image
                          width={30}
                          height={18}
                          src={"/svg/mark-red.svg"}
                          alt="Mark red Icon"
                           className="w-[27px] h-[16px] sm:w-[30px] sm:h-[18px]"
                        />
                        <span className="text-lg md:text-2xl">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-[45%]">
                  <div className="rounded-3xl overflow-hidden shadow-xl relative h-[400px] sm:h-[660px] ">
                    <Image
                      width={262}
                      height={298}
                      alt="Verified Image"
                      src="/svg/verified.svg"
                      className="absolute bottom-[20px] right-[20px] w-[50%] z-30"
                    />
                    <Image
                      fill
                      priority
                      src={content.recruiters.image || "/placeholder.svg"}
                      alt={content.recruiters.title}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Out-patients Section */}

          <div
            ref={patientsRef}
            className="rounded-t-3xl md:rounded-t-[52px] -mt-6 md:-mt-12 bg-[#DBF6D1] pt-4 lg:pt-18 pb-12 lg:pb-28"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
                <div className="w-full md:w-[45%]">
                  <div className="rounded-3xl overflow-hidden shadow-xl relative h-[400px] sm:h-[660px] ">
                    <Image
                      width={357}
                      height={62}
                      alt="Inner Description"
                      src="/svg/track-request.svg"
                      className="absolute bottom-[20px] right-[20px] mx-auto z-30 w-full max-w-[calc(75%-20px)]"
                    />
                    <Image
                      fill
                      priority
                      src={content.patients.image || "/placeholder.svg"}
                      alt={content.patients.title}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-[55%] space-y-6 text-[#0D290A]">
                  <h2 className="text-3xl lg:text-4xl font-semibold leading-wider">
                    {content.patients.title}
                  </h2>
                  <p className="text-lg md:text-2xl ">
                    {content.patients.description}
                  </p>
                  <ul className="space-y-4">
                    {content.patients.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Image
                          width={30}
                          height={18}
                          src={"/svg/mark-green.svg"}
                          alt="Mark Green Icon"
                           className="w-[27px] h-[16px] sm:w-[30px] sm:h-[18px]"
                        />
                        <span className="text-lg md:text-2xl">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
