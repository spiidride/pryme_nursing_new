"use client";

import { EmailForm } from "./email-form";

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
  const userTypes: UserType[] = [
    {
      id: "healthcare",
      title: "Healthcare professionals",
      image: "/smiling-healthcare-professional.png",
      color: "bg-blue-500",
      label: "Professionals",
    },
    {
      id: "recruiters",
      title: "Recruiters",
      image: "/business-recruiters-office.png",
      color: "bg-red-500",
      label: "Recruiters",
    },
    {
      id: "patients",
      title: "Patients",
      image: "/happy-elderly-homecare.png",
      color: "bg-teal-500",
      label: "Patients",
    },
  ];

  return (
    <section
      className={`bg-primary text-primary-foreground py-16 lg:py-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
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

          <div className="relative">
            <div className="flex h-80 gap-2 group">
              {userTypes.map((userType, index) => (
                <div
                  key={userType.id}
                  className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                    index === 0
                      ? "flex-[2] hover:flex-[2] group-hover:[&:not(:hover)]:flex-[0.8]"
                      : "flex-[0.8] hover:flex-[2] group-hover:[&:not(:hover)]:flex-[0.5]"
                  }`}
                >
                  <img
                    src={userType.image || "/placeholder.svg"}
                    alt={userType.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Horizontal text for expanded cards */}
                  <div
                    className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
                      index === 0
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`${userType.color} text-white px-3 py-1 rounded-full text-sm font-medium mb-2 w-fit`}
                    >
                      {userType.label}
                    </div>
                    <h3 className="text-white font-semibold text-lg">
                      {userType.title}
                    </h3>
                  </div>

                  {/* Vertical text for collapsed cards */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                      index === 0
                        ? "opacity-0"
                        : "opacity-100 group-hover:opacity-0"
                    }`}
                  >
                    <div className="transform -rotate-90 whitespace-nowrap">
                      <div
                        className={`${userType.color} text-white px-2 py-1 rounded text-xs font-medium mb-1 inline-block`}
                      >
                        {userType.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
