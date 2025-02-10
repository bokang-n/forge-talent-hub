
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative bg-background min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Empower Your Career with AI-Driven Learning
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8">
            Gain the skills and certifications you need to land your dream job
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6">
              Explore Courses
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-6 border-purple-500 text-purple-400 hover:bg-purple-900/20"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat with AI
            </Button>
          </div>
          
          <div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl relative">
            <video
              ref={videoRef}
              className="w-full"
              src="/freecompress-invideo-ai-1080 Unlock Your Career with Forge Talent! 2025-02-07.mp4"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <button
                onClick={togglePlayPause}
                className="p-3 bg-purple-600/80 text-white rounded-full shadow-lg hover:bg-purple-700/80 focus:outline-none backdrop-blur-sm transition-all"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
};

export default Hero;
