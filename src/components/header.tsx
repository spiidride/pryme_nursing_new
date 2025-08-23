"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`bg-white border-b border-[#083244]/20 border-border sticky top-0 z-50 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4.5">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              width={95.4}
              height={40.17}
              src="/logo.svg"
              alt="Pryme Nursing Logo"
              className="h-10 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Button
                variant={"secondary"}
                onClick={() => scrollToSection("features")}
                className="text-foreground hover:text-primary"
              >
                Features
              </Button>
              <Button
                variant={"secondary"}
                onClick={() => scrollToSection("faqs")}
                className="text-foreground hover:text-primary"
              >
                FAQs
              </Button>
            </nav>
            <Button variant={"primary"} onClick={() => scrollToSection("faqs")}>
              Join waitlist
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 px-4 bg-white shadow-lg border-t border-[#083244]/20 rounded-lg mt-2">
            <nav className="flex flex-col space-y-4">
              <Button
                variant="secondary"
                onClick={() => scrollToSection("features")}
                className="-ml-4 sm:-ml-8 w-full justify-start text-foreground hover:text-primary"
              >
                Features
              </Button>
              <Button
                variant="secondary"
                onClick={() => scrollToSection("faqs")}
                className="-ml-4 sm:-ml-8 w-full justify-start text-foreground hover:text-primary"
              >
                FAQs
              </Button>
              <Button
                variant="primary"
                onClick={() => scrollToSection("faqs")}
                className="w-full"
              >
                Join waitlist
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
