import { Bot, Award, CreditCard, Users, Building2 } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Chatbots & Talent Surveys",
    description: "Get personalized career guidance powered by AI",
  },
  {
    icon: Award,
    title: "Industry-Recognized Certifications",
    description: "Earn certifications from AWS, DMI, CompTIA, and more",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment Plans",
    description: "Affordable learning with installment and subscription options",
  },
  {
    icon: Users,
    title: "Referral Incentives",
    description: "Earn discounts by referring friends",
  },
  {
    icon: Building2,
    title: "Pearson VUE Testing Centre",
    description: "Write exams at our certified testing center",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Forge Talent?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-100 hover:border-primary/20 transition-colors"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;