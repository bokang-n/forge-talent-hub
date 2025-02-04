import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Link, Share2, UserPlus, Gift } from "lucide-react";

const Referral = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4">
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-center mb-12">How the Referral Program Works</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <Share2 className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Share Your Referral Link</h3>
                  <p>Send your unique referral link to friends and family</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <UserPlus className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Your Friend Enrolls</h3>
                  <p>They sign up using your link</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <Gift className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Earn Discounts</h3>
                  <p>You'll receive a discount code for your next enrollment</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="max-w-xl mx-auto mb-16">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-center mb-6">Start Referring Today</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                  <div>
                    <label htmlFor="referralCode" className="block text-sm font-medium mb-2">
                      Referral Code (if applicable)
                    </label>
                    <Input id="referralCode" placeholder="Enter referral code" />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Referral;