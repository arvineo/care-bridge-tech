import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Brain, Bot, Bluetooth, WifiIcon, Smartphone, Watch, Shield, HeartPulse, Search, Network } from "lucide-react";

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

            {/* Smart Wearables & IOT Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-32 items-center">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full bg-secondary/10 p-3">
                    <Watch className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">
                    Smart Wearables & IoT
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Our advanced wearable devices continuously monitor vital signs and activity levels, providing real-time health insights. Combined with IoT sensors throughout the living space, we create a comprehensive monitoring system that ensures safety while maintaining independence.
                </p>
                <div className="flex gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Bluetooth className="h-5 w-5 text-secondary" />
                    <span>Real-time tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <WifiIcon className="h-5 w-5 text-secondary" />
                    <span>Connected home</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-secondary" />
                    <span>Mobile alerts</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-first lg:order-last">
                <img 
                  src="https://images.unsplash.com/photo-1557595721-d285905afeba?auto=format&fit=crop&q=80" 
                  alt="Smart wearables and IoT devices"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Emergency SOS Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-32 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1563920517766-acdfffeadf42?auto=format&fit=crop&q=80" 
                  alt="Emergency response system"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full bg-secondary/10 p-3">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">
                    Emergency SOS & Motion Sensors
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Our advanced motion detection system and emergency response infrastructure ensure immediate assistance when needed. With fall detection, irregular movement patterns, and one-touch SOS capabilities, help is always at hand.
                </p>
                <div className="flex gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <HeartPulse className="h-5 w-5 text-secondary" />
                    <span>Fall detection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-secondary" />
                    <span>Motion tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-secondary" />
                    <span>24/7 monitoring</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI & Predictive Analytics Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-32 items-center">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full bg-secondary/10 p-3">
                    <Brain className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">
                    AI & Predictive Analytics
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Our AI-powered system analyzes patterns in health data and daily activities to predict and prevent potential health issues before they become serious. This proactive approach allows for early intervention and better health outcomes.
                </p>
                <div className="flex gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-secondary" />
                    <span>Pattern analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Network className="h-5 w-5 text-secondary" />
                    <span>Health predictions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-secondary" />
                    <span>Smart alerts</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-first lg:order-last">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
                  alt="AI and predictive analytics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Features Grid */}
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

            {/* Intelligent Health Monitoring Section */}
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
          </div>
        </section>
      </main>
    </>
  );
};

export default Technology;
