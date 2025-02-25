
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Team />
        
        {/* Community Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <h2 className="text-3xl font-bold text-primary">
                      Join Our Free Community!
                    </h2>
                    <p className="text-gray-600">
                      Get expert tips and tricks for healthy aging. Stay updated
                      with insights on elder care.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                      <Input placeholder="Enter your email" type="email" />
                      <Button>
                        Join Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
