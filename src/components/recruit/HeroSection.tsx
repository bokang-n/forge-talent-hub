
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-purple-900/20 text-purple-400 px-4 py-2 rounded-full">
              <Star className="w-4 h-4" />
              <span>AI-Powered Recruitment</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gradient">
              Hire top tech talent wisely
            </h1>
            
            <p className="text-xl text-purple-200/80">
              Find and hire the best tech professionals for your team with our AI-powered recruitment platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-900/20">
                Watch Demo
              </Button>
            </div>

            <div className="bg-purple-900/20 p-6 rounded-lg inline-block backdrop-blur-sm border border-purple-500/20">
              <div className="text-5xl font-bold text-purple-400">124k+</div>
              <div className="text-purple-200/80">Active candidates</div>
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
  );
};

export default HeroSection;
