
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Brain, Bot } from "lucide-react";

const Technology = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Our Technology
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Cutting-edge solutions for advanced senior care
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full bg-secondary/10 p-4">
                      <Activity className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      Smart Wearables & IoT
                    </h3>
                    <p className="text-gray-600">
                      Real-time vitals tracking through smart rings & watches
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full bg-secondary/10 p-4">
                      <Bot className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      Emergency SOS & Motion Sensors
                    </h3>
                    <p className="text-gray-600">
                      In-home monitoring to detect falls, inactivity, and emergencies
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full bg-secondary/10 p-4">
                      <Brain className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      AI & Predictive Analytics
                    </h3>
                    <p className="text-gray-600">
                      Data-driven risk assessment for early intervention
                    </p>
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

export default Technology;
