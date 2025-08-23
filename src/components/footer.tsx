"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react"; // use plus and x icons
import { EmailForm } from "./email-form";
import Image from "next/image";

export default function LandingPage() {
  const [openFAQ, setOpenFAQ] = useState<string | null>("join");

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const faqs = [
    {
      id: "join",
      question: "How do I join Pryme Nursing?",
      answer:
        "Yes. You can start with the free Starter plan. Premium and Ultimate plans offer more features like unlimited job applications, analytics, and priority listings.",
    },
    {
      id: "verification",
      question: "How are professionals verified?",
      answer:
        "We use AI-powered screening, license board checks, and background verification to ensure all professionals are qualified and trustworthy.",
    },
    {
      id: "attendance",
      question: "How does the clock-in and attendance system work?",
      answer:
        "Workers clock in and out using OTP and proof of location. Hours are automatically recorded and synced to the agency dashboard.",
    },
    {
      id: "homecare",
      question: "How do patients request home care?",
      answer:
        "Fill out our digital intake form, upload any medical documents if needed, and we will match you with a verified caregiver who fits your schedule and needs.",
    },
    {
      id: "records",
      question: "Can I store medical records in the app?",
      answer:
        "Yes. Outpatients can upload, store, and share medical records securely for continuity of care.",
    },
  ];

  return (
    <main className="bg-[#1B2736] text-[#FFFFFF] rounded-t-3xl md:rounded-t-[52px]">
      <section
        id="faqs"
        className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12 sm:py-20 text-center px-4"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          We&apos;re Growing Fast
        </h1>
        <p className="max-w-2xl mx-auto text-lg lg:text-2xl mb-8 text-[#EFEBFF]">
          Thousands of healthcare professionals, agencies, and patients have
          already joined Pryme Nursing, and the numbers keep climbing every day.
        </p>
        <div
          id="waitlist"
          className="flex flex-col justify-center gap-2 max-w-lg mx-auto"
        >
          <EmailForm />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Common questions people ask us.
            </h2>
          </div>
          <div className="lg:col-span-2 space-y-4 lg:space-y-7">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-[#213344] rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                  className="cursor-pointer w-full flex justify-between items-center text-left px-4 py-4 hover:bg-primary-foreground/10 text-primary-foreground hover:text-primary-foreground"
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  {openFAQ === faq.id ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </button>

                {/* Animate open/close */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFAQ === faq.id
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 pb-4 text-[#CACFD8]">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start mt-5 sm:mt-10">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <p
                    className="hover:underline cursor-pointer"
                    onClick={() => scrollToSection("features")}
                  >
                    Features
                  </p>
                </li>
                <li>
                  <p
                    className="hover:underline cursor-pointer"
                    onClick={() => scrollToSection("home")}
                  >
                    Home
                  </p>
                </li>
                {/* <li>
                  <p  className="hover:underline cursor-pointer"
                    onClick={() => scrollToSection("features")}>Contact</p>
                </li> */}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-3 sm:space-y-4 text-primary-foreground/80">
                <div className="flex flex-row gap-3 items-center">
                  <Image
                    src={"/svg/location.svg"}
                    alt="Location Icon"
                    width={24}
                    height={24}
                  />
                  <p>9701 Apollo Drive, Suite 100 Largo MD 20774</p>
                </div>

                <div className="flex flex-row gap-3 items-center">
                  <Image
                    src={"/svg/phone.svg"}
                    alt="Phone Icon"
                    width={24}
                    height={24}
                    className="w-5 h-5"
                  />
                  <p>1 (800) 317-6113, (202) 704-7853</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:place-items-end">
              <Image
                width={318}
                height={134}
                src="/logo-white.svg"
                alt="Pryme Nursing Logo"
                className="h-full w-auto mb-4"
              />
            </div>
          </div>

          <div className="border-t-[1px] border-[#CACFD8] mt-12 pt-8 text-center text-primary-foreground/60">
            <p>
              &copy; Pryme Nursing {new Date().getFullYear()} All right reserved
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
