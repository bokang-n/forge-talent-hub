import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              <img src="/public/4-removebg-preview (1).png" alt="ForgeTalent Logo" height="44px" width="150px"></img>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-secondary hover:text-primary transition-colors">
              Home
            </a>
            <a href="/about" className="text-secondary hover:text-primary transition-colors">
              About
            </a>
            <a href="/courses" className="text-secondary hover:text-primary transition-colors">
              Courses
            </a>
            <a href="/pricing" className="text-secondary hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="/referral" className="text-secondary hover:text-primary transition-colors">
              Referral Program
            </a>
            <a href="/contact" className="text-secondary hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <Menu className="h-6 w-6 text-secondary" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
