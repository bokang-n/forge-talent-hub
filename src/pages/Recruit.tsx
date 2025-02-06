import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Award, Shield } from "lucide-react";

const Recruit = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#0B1829] text-white pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 bg-opacity-20 bg-[#4AFEC2] text-[#4AFEC2] px-4 py-2 rounded-full">
                  <Star className="w-4 h-4" />
                  <span>AI-Powered Recruitment</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Hire top tech talent wisely
                </h1>
                
                <p className="text-xl text-gray-300">
                  Find and hire the best tech professionals for your team with our AI-powered recruitment platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#4AFEC2] hover:bg-[#4AFEC2]/90 text-black">
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline" className="border-[#4AFEC2] text-[#4AFEC2] hover:bg-[#4AFEC2]/10">
                    Watch Demo
                  </Button>
                </div>

                <div className="bg-[#132337] p-6 rounded-lg inline-block">
                  <div className="text-5xl font-bold text-[#4AFEC2]">124k+</div>
                  <div className="text-gray-300">Active candidates</div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <img 
                  src="/lovable-uploads/dd9bbda7-2c5c-40e8-894c-ba1e719a12f4.png"
                  alt="Tech recruitment"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20 bg-[#0B1829]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">How it works?</h2>
              <p className="text-xl text-gray-300">
                Our AI-powered platform simplifies tech recruitment
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#132337] p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#4AFEC2] rounded-full flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Post Your Requirements</h3>
                <p className="text-gray-300">
                  Specify your needs and let our AI match you with the perfect candidates
                </p>
              </div>

              <div className="bg-[#132337] p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#4AFEC2] rounded-full flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Review Matches</h3>
                <p className="text-gray-300">
                  Get a curated list of pre-screened candidates that match your criteria
                </p>
              </div>

              <div className="bg-[#132337] p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#4AFEC2] rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Hire the Best</h3>
                <p className="text-gray-300">
                  Interview and hire top tech talent efficiently
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Recruit;