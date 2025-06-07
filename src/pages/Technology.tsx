
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Brain, Bot, Bluetooth, WifiIcon, Smartphone, Watch, Shield, HeartPulse, Search, Network, Heart, Thermometer, Locate, AlertTriangle, FileText, Bell, FileCheck } from "lucide-react";

const Technology = () => {
  useEffect(() => {
    document.title = "Buy best Health Monitor Watch for Seniors | Caresanctum";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover Care sanctum health monitor watch for seniors. Real-time health tracking to keep families informed and aging parents safe and connected.');
    }
  }, []);

  return <>
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
                
                {/* Health Monitoring Features */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3 p-3 rounded-lg shadow-sm bg-purple-100">
                    <Heart className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">Heart Rate</h4>
                      <p className="text-sm text-gray-500">Continuous monitoring with alerts for irregularities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg shadow-sm bg-purple-100">
                    <Activity className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">BP Monitoring</h4>
                      <p className="text-sm text-gray-500">Regular blood pressure checks with trend analysis</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg shadow-sm bg-purple-100">
                    <Thermometer className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">Temperature</h4>
                      <p className="text-sm text-gray-500">Body temperature analysis for infection detection</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg shadow-sm bg-purple-100">
                    <HeartPulse className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">SPO2 Sensor</h4>
                      <p className="text-sm text-gray-500">Blood oxygen level monitoring 24/7</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg shadow-sm bg-purple-100">
                    <Locate className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">GPS Tracking</h4>
                      <p className="text-sm text-gray-500">Location monitoring and GeoFencing technology</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg shadow-sm bg-purple-100">
                    <AlertTriangle className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">Fall Detection</h4>
                      <p className="text-sm text-gray-500">Immediate alerts for falls or unusual patterns</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-first lg:order-last">
                <img alt="Smart wearables and IoT devices" className="w-full h-full object-cover" src="/lovable-uploads/51fffb3d-2922-49c8-96a6-40d24de9796f.jpg" />
              </div>
            </div>

            {/* AI & Predictive Analytics Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-32 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img alt="AI and predictive analytics" className="w-full h-full object-contain" src="/lovable-uploads/e158d1ff-49b8-4a04-a8b2-7adcb8b0b6e8.png" />
              </div>
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
                    <Bell className="h-5 w-5 text-secondary" />
                    <span>Smart alerts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medication & Reports Management Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-32 items-center">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full bg-secondary/10 p-3">
                    <FileText className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">
                    Medication & Reports Management
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Stay on top of medication schedules and health records with our comprehensive management system. From timely medicine reminders to organized health reports, we ensure all important medical information is easily accessible and well-managed.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3 p-3 rounded-lg shadow-sm bg-purple-100">
                    <Bell className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">Medicine Reminders & Delivery</h4>
                      <p className="text-sm text-gray-500">Timely medication alerts and convenient delivery service</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg shadow-sm bg-purple-100">
                    <FileCheck className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">Prescription & Lab Report Management</h4>
                      <p className="text-sm text-gray-500">Digital storage and organization of medical records</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-first lg:order-last">
                <img alt="Medication and reports management system" className="w-full h-full object-cover" src="/lovable-uploads/b6ba1f1a-506b-4e58-9dff-57be8769a6c8.jpg" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>;
};

export default Technology;
