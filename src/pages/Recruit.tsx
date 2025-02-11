
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/recruit/HeroSection";
import ProcessSection from "@/components/recruit/ProcessSection";
import BenefitsSection from "@/components/recruit/BenefitsSection";
import MobileAppSection from "@/components/recruit/MobileAppSection";

const Recruit = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProcessSection />
        <BenefitsSection />
        <MobileAppSection />
      </main>
      <Footer />
    </div>
  );
};

export default Recruit;
