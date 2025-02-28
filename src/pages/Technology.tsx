
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800" 
                alt="Health monitoring technology" 
                className="rounded-xl shadow-lg object-cover h-[400px]"
              />
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Technology-Driven Care
                </h2>
                <p className="text-gray-600 mb-4">
                  Our innovative technological solutions form the backbone of CareSanctum's approach to senior care. By leveraging advanced IoT devices, AI analytics, and secure communication platforms, we're able to provide comprehensive monitoring and support.
                </p>
                <p className="text-gray-600">
                  These technologies work seamlessly together to create a virtual safety net that not only responds to emergencies but also helps prevent them through early detection and intervention.
                </p>
              </div>
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

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Intelligent Health Monitoring
                </h2>
                <p className="text-gray-600 mb-4">
                  Our advanced monitoring systems continuously collect and analyze health data to identify patterns and detect potential issues before they become serious. This proactive approach allows for timely interventions and peace of mind for families.
                </p>
                <p className="text-gray-600">
                  The seamless integration between wearable devices, home sensors, and our central monitoring platform ensures that care is both comprehensive and unobtrusive, allowing seniors to maintain their independence while staying safe.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800" 
                alt="Advanced technology" 
                className="rounded-xl shadow-lg object-cover h-[400px] order-1 lg:order-2"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Technology;
