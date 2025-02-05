import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

type Question = {
  id: number;
  text: string;
  options: string[];
};

const questions: Question[] = [
  {
    id: 1,
    text: "What is your primary area of interest in technology?",
    options: ["Software Development", "Cloud Computing", "Cybersecurity", "Data Science", "Digital Marketing"],
  },
  {
    id: 2,
    text: "How much technical experience do you currently have?",
    options: ["No Experience", "Beginner", "Intermediate", "Advanced"],
  },
  {
    id: 3,
    text: "What is your preferred learning style?",
    options: ["Self-paced", "Instructor-led", "Hands-on Projects", "Mixed Learning"],
  },
  {
    id: 4,
    text: "What is your career goal in the next 2 years?",
    options: ["Career Switch", "Skill Enhancement", "Certification", "Leadership Role"],
  },
  {
    id: 5,
    text: "Which type of work environment interests you most?",
    options: ["Remote Work", "Office-based", "Hybrid", "Freelancing"],
  },
  {
    id: 6,
    text: "How much time can you dedicate to learning per week?",
    options: ["0-5 hours", "5-10 hours", "10-20 hours", "20+ hours"],
  },
  {
    id: 7,
    text: "What is your preferred project scale?",
    options: ["Small Individual Projects", "Medium Team Projects", "Large Enterprise Projects"],
  },
  {
    id: 8,
    text: "Which industry sector interests you most?",
    options: ["Finance", "Healthcare", "E-commerce", "Education", "Gaming"],
  },
  {
    id: 9,
    text: "What is your primary motivation for taking a course?",
    options: ["Higher Salary", "Personal Interest", "Job Requirements", "Career Growth"],
  },
  {
    id: 10,
    text: "What is your budget range for education?",
    options: ["R0-R5,000", "R5,000-R10,000", "R10,000-R20,000", "R20,000+"],
  },
];

const courseRecommendations = {
  "Software Development": ["Full Stack Web Development", "Mobile App Development"],
  "Cloud Computing": ["AWS Certified Solutions Architect", "Azure Fundamentals"],
  "Cybersecurity": ["CompTIA Security+", "Ethical Hacking"],
  "Data Science": ["Data Analytics Fundamentals", "Machine Learning Basics"],
  "Digital Marketing": ["Digital Marketing Professional", "Social Media Marketing"],
};

const TalentSurvey = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: answer }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      analyzeSurvey();
    }
  };

  const analyzeSurvey = () => {
    // Simple analysis based on primary interest
    const primaryInterest = answers[0];
    const recommendedCourses = courseRecommendations[primaryInterest as keyof typeof courseRecommendations] || [];
    
    setShowResults(true);
    toast({
      title: "Survey Complete!",
      description: "We've analyzed your responses and prepared your recommendations.",
    });
  };

  if (showResults) {
    const primaryInterest = answers[0];
    const recommendedCourses = courseRecommendations[primaryInterest as keyof typeof courseRecommendations] || [];

    return (
      <Card className="w-full max-w-2xl mx-auto mt-8">
        <CardHeader>
          <CardTitle>Your Personalized Course Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-lg">Based on your interests in {primaryInterest}, we recommend:</p>
            <ul className="list-disc pl-6 space-y-2">
              {recommendedCourses.map((course, index) => (
                <li key={index} className="text-primary">{course}</li>
              ))}
            </ul>
            <Button onClick={() => window.location.href = '/courses'} className="mt-4">
              View Courses
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>AI Talent Survey</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <h2 className="text-xl font-semibold">
            {questions[currentQuestion].text}
          </h2>
          <RadioGroup
            onValueChange={handleAnswer}
            className="space-y-3"
          >
            {questions[currentQuestion].options.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={option} />
                <Label htmlFor={option}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
};

export default TalentSurvey;