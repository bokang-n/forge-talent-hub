import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TalentSurvey from "@/components/TalentSurvey";

const TestingCentre = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">AI Talent Assessment</h1>
          <p className="text-lg text-muted-foreground">
            Take our AI-powered survey to discover the perfect course for your career goals
          </p>
        </div>
        <TalentSurvey />
      </main>
      <Footer />
    </div>
  );
};

export default TestingCentre;