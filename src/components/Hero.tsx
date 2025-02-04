import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Empower Your Career with AI-Driven Learning
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-8">
            Gain the skills and certifications you need to land your dream job
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              Explore Courses
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6">
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat with AI
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
};

export default Hero;