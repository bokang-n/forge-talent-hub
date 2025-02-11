
import { Star, Award, Shield } from "lucide-react";

const ProcessSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">
            How it works?
          </h2>
          <p className="text-xl text-purple-200/80">
            Our AI-powered platform simplifies tech recruitment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-lg border border-purple-500/20 bg-purple-900/10 backdrop-blur-sm hover:border-purple-500/40 transition-colors">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-purple-200 mb-4">Post Your Requirements</h3>
            <p className="text-purple-200/80">
              Specify your needs and let our AI match you with the perfect candidates
            </p>
          </div>

          <div className="p-8 rounded-lg border border-purple-500/20 bg-purple-900/10 backdrop-blur-sm hover:border-purple-500/40 transition-colors">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-purple-200 mb-4">Review Matches</h3>
            <p className="text-purple-200/80">
              Get a curated list of pre-screened candidates that match your criteria
            </p>
          </div>

          <div className="p-8 rounded-lg border border-purple-500/20 bg-purple-900/10 backdrop-blur-sm hover:border-purple-500/40 transition-colors">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-purple-200 mb-4">Hire the Best</h3>
            <p className="text-purple-200/80">
              Interview and hire top tech talent efficiently
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
