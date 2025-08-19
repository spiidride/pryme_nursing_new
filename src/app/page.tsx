import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
// import { TabbedSection } from "@/components/tabbed-section";
// import { ServicesSection } from "@/components/services-section";
// import { FeaturesSection } from "@/components/features-section";
// import { FAQSection } from "@/components/faq-section";
// import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white ">
      <Header />
      <main>
        <HeroSection />
        {/* <TabbedSection />
        <ServicesSection />
        <FeaturesSection />
        <FAQSection /> */}
      </main>
      {/* <Footer /> */}
      <Toaster />
    </div>
  );
}
