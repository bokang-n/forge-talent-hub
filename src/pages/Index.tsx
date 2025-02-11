
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import InteractiveFeature from "@/components/InteractiveFeature";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <InteractiveFeature />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
