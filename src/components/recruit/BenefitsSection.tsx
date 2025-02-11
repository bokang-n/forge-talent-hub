
import { CheckCircle2 } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-purple-200/80">
            Experience the future of tech recruitment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-purple-200 mb-2">AI-Powered Matching</h3>
                <p className="text-purple-200/80">Our advanced AI algorithms ensure precise candidate matching based on skills, experience, and cultural fit.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-purple-200 mb-2">Time-Saving Process</h3>
                <p className="text-purple-200/80">Reduce hiring time by up to 75% with our streamlined recruitment process.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-purple-200 mb-2">Quality Guaranteed</h3>
                <p className="text-purple-200/80">Access pre-vetted candidates with verified skills and experience.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/86_pLNpTe83GZC6kHEKzQ.jpg"
              alt="Platform benefits"
              className="rounded-lg w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
