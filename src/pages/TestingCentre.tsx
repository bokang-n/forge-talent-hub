import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TestingCentre = () => {
  const features = [
    {
      title: "Globally Recognized Certifications",
      description: "Write exams for certifications like AWS, CompTIA, Cisco, and more.",
    },
    {
      title: "State-of-the-Art Facilities",
      description: "Our testing centre is equipped with modern technology and a comfortable environment.",
    },
    {
      title: "Convenient Location",
      description: "Located at Forge Academy, making it easy for students and professionals to access.",
    },
    {
      title: "Expert Support",
      description: "Our staff is here to assist you with scheduling and exam preparation.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to the Pearson VUE Testing Centre at Forge Academy
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Your gateway to globally recognized certifications in a convenient and professional environment.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-accent hover:bg-accent/90"
              asChild
            >
              <a href="#features">Learn More</a>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Our Testing Centre?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Take Your Exam?</h2>
            <p className="text-xl mb-8">
              Book your seat today and take the next step in your career.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-accent hover:bg-accent/90"
            >
              Book Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TestingCentre;