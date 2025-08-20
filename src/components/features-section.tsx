import { Clock, MessageSquare, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FeaturesSection() {
  const features = [
    {
      icon: Target,
      title: "All Roles in One Platform",
      description:
        "Serve professionals, agencies, and patients equally with tailored tools for each need.",
      position: "top-left",
    },
    {
      icon: Clock,
      title: "Real-Time Shift Tracking",
      description:
        "Clock in and out with proof and see hours logged instantly for full transparency.",
      position: "top-right",
    },
    {
      icon: Zap,
      title: "AI Powered Credential Screening",
      description:
        "Speed up hiring and reduce manual checks with automated license and document verification.",
      position: "bottom-left",
    },
    {
      icon: MessageSquare,
      title: "Built-In Communication",
      description:
        "Interview, chat, or call directly from the app without switching platforms.",
      position: "bottom-right",
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            We are building more than just a job board.
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Pryme Nursing is the all-in-one platform that connects verified
            healthcare professionals, agencies, and patients with tools that
            make hiring, working, and getting care faster, safer, and easier.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-16">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="flex-1"
          />
          <Button variant="primary" className="whitespace-nowrap">
            Join waitlist
          </Button>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Mobile Layout - Stack vertically */}
          <div className="lg:hidden space-y-8">
            <div className="relative mx-auto w-80 h-80 rounded-2xl overflow-hidden mb-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-20%20at%207.57.52%E2%80%AFPM-JH35D7d8e6okJkTArLiPbyyVtVkSE9.png"
                alt="Healthcare professionals"
                className="w-full h-full object-cover"
              />
            </div>
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-red-600" />
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

          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
            {/* First Column - Two feature cards */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex flex-col items-start">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    All Roles in One Platform
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Serve professionals, agencies, and patients equally with
                    tailored tools for each need.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex flex-col items-start">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    AI Powered Credential Screening
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Speed up hiring and reduce manual checks with automated
                    license and document verification.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Column - Central image spanning 2 rows */}
            <div className="row-span-2 flex items-center justify-center">
              <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-20%20at%207.57.52%E2%80%AFPM-JH35D7d8e6okJkTArLiPbyyVtVkSE9.png"
                  alt="Healthcare professionals"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Third Column - Two feature cards */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex flex-col items-start">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Real-Time Shift Tracking
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Clock in and out with proof and see hours logged instantly
                    for full transparency.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex flex-col items-start">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Built-In Communication
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Interview, chat, or call directly from the app without
                    switching platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
