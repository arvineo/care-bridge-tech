import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Brain, Bot, Bluetooth, WifiIcon, Smartphone, Watch, Shield, HeartPulse, Search, Network, Heart, Thermometer, Locate, AlertTriangle, FileText, Bell, FileCheck } from "lucide-react";
const Technology = () => {
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
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <Heart className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">Heart Rate</h4>
                      <p className="text-sm text-gray-500">Continuous monitoring with alerts for irregularities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <Activity className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">BP Monitoring</h4>
                      <p className="text-sm text-gray-500">Regular blood pressure checks with trend analysis</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <Thermometer className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">Temperature</h4>
                      <p className="text-sm text-gray-500">Body temperature analysis for infection detection</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <HeartPulse className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">SPO2 Sensor</h4>
                      <p className="text-sm text-gray-500">Blood oxygen level monitoring 24/7</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <Locate className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">GPS Tracking</h4>
                      <p className="text-sm text-gray-500">Location monitoring and GeoFencing technology</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <AlertTriangle className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">Fall Detection</h4>
                      <p className="text-sm text-gray-500">Immediate alerts for falls or unusual patterns</p>
                    </div>
                  </div>
                </div>
                
                
                
                
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-first lg:order-last">
                <img alt="Smart wearables and IoT devices" className="w-full h-full object-cover" src="/lovable-uploads/fdbaf9b0-d2ca-45f9-90e1-875563374166.jpg" />
              </div>
            </div>

            {/* Doctor & Specialist Care Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-32 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80" alt="Doctor and specialist care services" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                
                <p className="text-gray-600 mb-6">
                  Our comprehensive healthcare approach connects seniors with qualified medical professionals for personalized care. Whether for urgent consultations or routine checkups, we ensure access to quality healthcare services whenever needed.
                </p>
                
                {/* Healthcare Services Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <Activity className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">On-Demand Specialist Consultation</h4>
                      <p className="text-sm text-gray-500">Connect with specialists via video calls when needed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <HeartPulse className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">Scheduled Doctor Visits</h4>
                      <p className="text-sm text-gray-500">Regular appointments with primary care physicians</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <Thermometer className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">Routine Health Checkups</h4>
                      <p className="text-sm text-gray-500">Preventive screenings and regular assessments</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <Heart className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">Home Visits</h4>
                      <p className="text-sm text-gray-500">Healthcare professionals and nurses visit at home</p>
                    </div>
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
                    
                    <span>Smart alerts</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-first lg:order-last">
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" alt="AI and predictive analytics" className="w-full h-full object-cover" />
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
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <Bell className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">Medicine Reminders & Delivery</h4>
                      <p className="text-sm text-gray-500">Timely medication alerts and convenient delivery service</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <FileCheck className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">Prescription & Lab Report Management</h4>
                      <p className="text-sm text-gray-500">Digital storage and organization of medical records</p>
                    </div>
                  </div>
                </div>

                
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-first lg:order-last">
                <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80" alt="Medication and reports management system" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Features Grid */}
            

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
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800" alt="Advanced technology" className="rounded-xl shadow-lg object-cover h-[400px] order-1 lg:order-2" />
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>;
};
export default Technology;