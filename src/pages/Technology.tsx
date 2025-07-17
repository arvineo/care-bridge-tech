import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Shield, Siren, Monitor, User, Phone, MapPin, AlertTriangle, Clock, Users, Headphones, Home, Zap, Wifi, Heart, ArrowRight, ArrowDown, Bell, Flame, Wind, Radar } from "lucide-react";
const Technology = () => {
  useEffect(() => {
    document.title = "CareSanctum Safety Ecosystem | Advanced Technology";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover CareSanctum\'s integrated safety ecosystem - smart devices, real-time monitoring, and automated emergency response for senior safety.');
    }
  }, []);
  const devices = [{
    name: "Gas Leak Detector",
    image: "/lovable-uploads/edf55032-b429-437e-b9bc-8c545a69b946.png",
    location: "Kitchen",
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  }, {
    name: "Smoke Detector",
    image: "/lovable-uploads/c7b29839-f2c8-48b5-84ae-bb081580bb0c.png",
    location: "Living Room",
    color: "text-red-600",
    bgColor: "bg-red-100"
  }, {
    name: "SOS Button",
    image: "/lovable-uploads/c2082bef-7a12-4b78-a8ca-dd9f990b7cfd.png",
    location: "Bedroom, Washroom, Living Room, Kitchen",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  }, {
    name: "Senior Smart Watch",
    image: "/lovable-uploads/fd001da4-22b7-4188-98c3-63b7b6690585.png",
    location: "Works inside or outside your home",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  }, {
    name: "Motion Sensor",
    image: "/lovable-uploads/16efc6b1-cb11-4c73-867a-5a01d5141d25.png",
    location: "Hallway",
    color: "text-green-600",
    bgColor: "bg-green-100"
  }];
  return <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Care Sanctum Safety Ecosystem
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive network of smart devices working together to ensure senior safety, 
                with real-time monitoring and automated emergency response.
              </p>
            </div>
          </div>
        </section>

        {/* Three-Section Ecosystem Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-primary mb-8">
                How Our Safety Ecosystem Works
              </h2>
              <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-16">
                We integrate IoT and health tracking devices into a seamless ecosystem that monitors for abnormalities and triggers instant alerts. With real-time monitoring and an automated emergency response system, we ensure timely intervention, delivering help in under 4 minutes.
              </p>

              {/* Three Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                
                {/* Column 1: Senior's Home */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border-2 border-gray-200 h-full">
                    <div className="text-center mb-8">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Home className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-bold text-primary">Senior's Home</h3>
                      </div>
                    </div>

                    {/* Devices */}
                    <div className="space-y-6">
                      {devices.map((device, index) => <div key={device.name} className="relative">
                        <div className={`${device.bgColor} rounded-xl p-4 shadow-lg border-2 border-white transition-all hover:scale-105 hover:shadow-xl group`}>
                           <div className="flex items-center gap-3">
                             <div className={`inline-flex items-center justify-center w-12 h-12 bg-white rounded-full border-2 border-white shadow-md overflow-hidden relative cursor-pointer`}>
                               <img src={device.image} alt={device.name} className="w-8 h-8 object-contain transition-all duration-500 group-hover:fixed group-hover:top-1/2 group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:w-48 group-hover:h-48 group-hover:z-50 group-hover:bg-white group-hover:p-4 group-hover:rounded-lg group-hover:shadow-2xl group-hover:border-4 group-hover:border-primary" />
                             </div>
                             <div>
                               <h4 className="font-bold text-gray-800 text-sm">{device.name}</h4>
                               <p className="text-xs text-gray-600">{device.location}</p>
                             </div>
                           </div>
                            
                            {/* Alert Animation */}
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
                              <Bell className="h-2 w-2 text-white" />
                            </div>
                          </div>
                        </div>)}
                    </div>
                  </div>
                  
                  {/* Arrow to Security Station */}
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
                    <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
                  </div>
                </div>

                {/* Column 2: Security Station */}
                <div className="relative">
                  <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 h-full">
                    <div className="text-center mb-8">
                      <h3 className="text-xl font-bold text-primary">Security Station</h3>
                    </div>

                    {/* Central Alarm Hub */}
                    <div className="mb-6">
                       <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 shadow-xl border-2 border-white group">
                         <div className="text-center">
                           <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-3 shadow-lg overflow-hidden relative cursor-pointer">
                             <img src="/lovable-uploads/b8cf7c01-6de8-47da-8cdd-e0ddd21a0386.png" alt="Central Alarm Hub" className="w-12 h-12 object-contain transition-all duration-500 group-hover:fixed group-hover:top-1/2 group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:w-48 group-hover:h-48 group-hover:z-50 group-hover:bg-white group-hover:p-4 group-hover:rounded-lg group-hover:shadow-2xl group-hover:border-4 group-hover:border-primary" />
                           </div>
                          <h4 className="text-lg font-bold text-white mb-2">Central Alarm Hub</h4>
                          <div className="flex items-center justify-center gap-2 bg-white/20 rounded-lg py-1 px-3">
                            <Siren className="h-4 w-4 text-yellow-300 animate-pulse" />
                            <span className="text-white text-sm font-medium">SIREN ACTIVE</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Security Guard Response */}
                    <div className="mb-6">
                      <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center">
                            <User className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 text-sm">Security Guard Response</h4>
                            <p className="text-xs text-gray-600">First responder - 2 min</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Preview */}
                    <div className="group">
                      <h4 className="text-sm font-semibold text-gray-800 mb-3 text-center">Security Dashboard</h4>
                      <div className="relative overflow-hidden rounded-lg border border-gray-300 cursor-pointer">
                        <img 
                          src="/lovable-uploads/e2fc5292-f0fa-4e65-a487-5ae4a16b1856.png" 
                          alt="Care Sanctum Emergency Response Dashboard" 
                          className="w-full h-32 object-contain bg-gray-50 transition-all duration-300 group-hover:fixed group-hover:top-1/2 group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:w-auto group-hover:h-auto group-hover:max-w-[90vw] group-hover:max-h-[90vh] group-hover:z-50 group-hover:bg-white group-hover:p-4 group-hover:rounded-lg group-hover:shadow-2xl group-hover:border-4 group-hover:border-primary group-hover:object-contain" 
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 group-hover:backdrop-blur-sm transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow to Backend */}
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
                    <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
                  </div>
                </div>

                {/* Column 3: CareSanctum Backend */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border-2 border-purple-200 h-full">
                    <div className="text-center mb-8">
                      <h3 className="text-xl font-bold text-primary">CareSanctum Backend</h3>
                    </div>

                    {/* Escalation Process */}
                    <div className="space-y-6">
                      <div className="bg-white rounded-xl p-4 shadow-md border border-purple-200">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-orange-100 rounded-full w-10 h-10 flex items-center justify-center">
                            <Clock className="h-5 w-5 text-orange-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 text-sm">Auto Escalation To Our Backend Operations Team</h4>
                            <p className="text-xs text-gray-600">If no response in 5 min or if there is a critical issue validated by security guard</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-4 shadow-md border border-purple-200">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center">
                            <Users className="h-5 w-5 text-red-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 text-sm">Emergency Services Coordination</h4>
                            <p className="text-xs text-gray-600">Next of Kin informed + Backend Team coordinates with ambulance or fire station, etc</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <Wifi className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-800 mb-2">24/7 Connectivity</h4>
                  <p className="text-gray-600 text-sm">Continuous monitoring with reliable IoT connectivity</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-800 mb-2">Instant Response</h4>
                  <p className="text-gray-600 text-sm">Real-time alerts and immediate action protocols</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                  <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-800 mb-2">Comprehensive Safety</h4>
                  <p className="text-gray-600 text-sm">Multi-layered protection for complete peace of mind</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Secure Your Loved Ones?
            </h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">Experience the peace of mind that comes with CareSanctum's comprehensive safety and security ecosystem.</p>
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
                Get Started Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>;
};
export default Technology;