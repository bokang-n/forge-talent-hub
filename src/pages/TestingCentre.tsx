import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TalentSurvey from "@/components/TalentSurvey";
import { Button } from "@/components/ui/button";

const TestingCentre = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Pearson VUE Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to the Pearson VUE Testing Centre at Forge Academy
            </h1>
            <p className="text-xl mb-8">
              Your gateway to globally recognized certifications in a convenient and professional environment.
            </p>
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Testing Centre?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Globally Recognized Certifications</h3>
                <p>Write exams for certifications like AWS, CompTIA, Cisco, and more.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">State-of-the-Art Facilities</h3>
                <p>Our testing centre is equipped with modern technology and a comfortable environment.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Convenient Location</h3>
                <p>Located at Forge Academy, making it easy for students and professionals to access.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
                <p>Our staff is here to assist you with scheduling and exam preparation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Take Your Exam?</h2>
            <p className="text-xl mb-8">Book your seat today and take the next step in your career.</p>
            <Button variant="secondary" size="lg">
              Book Now
            </Button>
          </div>
        </section>

        {/* AI Talent Survey Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">AI Talent Assessment</h2>
              <p className="text-lg text-muted-foreground">
                Take our AI-powered survey to discover the perfect course for your career goals
              </p>
            </div>
            <TalentSurvey />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TestingCentre;