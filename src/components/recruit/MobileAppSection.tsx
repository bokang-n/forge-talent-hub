
import { Smartphone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileAppSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="/51WXfFeNestye56yKPh7J.jpg"
              alt="Mobile app"
              className="rounded-lg w-full"
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-purple-900/20 text-purple-400 px-4 py-2 rounded-full">
              <Smartphone className="w-4 h-4" />
              <span>Mobile App</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">
              Recruit On The Go
            </h2>
            
            <p className="text-xl text-purple-200/80">
              Download our mobile app to manage your recruitment process from anywhere. Post jobs, review candidates, and schedule interviews - all from your smartphone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Download className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Download className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
