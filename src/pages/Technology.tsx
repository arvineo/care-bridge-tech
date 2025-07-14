import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Siren, 
  Monitor, 
  User, 
  Phone, 
  MapPin, 
  AlertTriangle, 
  Clock,
  Users,
  Headphones,
  Home,
  Zap,
  Wifi,
  Heart,
  ArrowRight,
  ArrowDown,
  Bell,
  Flame,
  Wind
} from "lucide-react";

const Technology = () => {
  useEffect(() => {
    document.title = "CareSanctum Safety Ecosystem | Advanced Technology";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover CareSanctum\'s integrated safety ecosystem - smart devices, real-time monitoring, and automated emergency response for senior safety.');
    }
  }, []);

  const devices = [
    {
      name: "Gas Leak Detector",
      icon: Wind,
      location: "Kitchen",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      name: "Smoke Detector", 
      icon: Flame,
      location: "Living Room",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      name: "SOS Button",
      icon: AlertTriangle,
      location: "Bedroom",
      color: "text-purple-600", 
      bgColor: "bg-purple-100"
    },
    {
      name: "Senior Smart Watch",
      icon: Heart,
      location: "Wearable",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                CareSanctum Safety Ecosystem
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive network of smart devices working together to ensure senior safety, 
                with real-time monitoring and automated emergency response.
              </p>
            </div>
          </div>
        </section>

        {/* Ecosystem Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-primary mb-16">
                How Our Safety Ecosystem Works
              </h2>

              {/* Home Layout with Devices */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 mb-16 border-2 border-gray-200">
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-primary">Senior's Home</span>
                  </div>
                </div>

                {/* Devices Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                  {devices.map((device, index) => (
                    <div key={device.name} className="relative">
                      <div className={`${device.bgColor} rounded-xl p-6 shadow-lg border-2 border-white transition-all hover:scale-105 hover:shadow-xl`}>
                        <div className="text-center">
                          <div className={`inline-flex items-center justify-center w-16 h-16 ${device.bgColor} rounded-full mb-4 border-2 border-white shadow-md`}>
                            <device.icon className={`h-8 w-8 ${device.color}`} />
                          </div>
                          <h3 className="font-bold text-gray-800 mb-2">{device.name}</h3>
                          <p className="text-sm text-gray-600">{device.location}</p>
                        </div>
                        
                        {/* Alert Animation */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
                          <Bell className="h-3 w-3 text-white" />
                        </div>
                      </div>

                      {/* Arrow pointing to hub */}
                      {index < 3 && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                          <ArrowRight className="h-6 w-6 text-primary animate-pulse" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Central Alarm Hub */}
                <div className="mt-12 flex justify-center">
                  <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-8 shadow-2xl border-4 border-white max-w-sm">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 shadow-lg">
                        <Shield className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Central Alarm Hub</h3>
                      <p className="text-purple-100 text-sm mb-4">
                        Receives alerts from all devices
                      </p>
                      
                      {/* Siren Indicator */}
                      <div className="flex items-center justify-center gap-2 bg-white/20 rounded-lg py-2 px-4">
                        <Siren className="h-5 w-5 text-yellow-300 animate-pulse" />
                        <span className="text-white font-medium">SIREN ACTIVATED</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow to Dashboard */}
                <div className="flex justify-center mt-8">
                  <ArrowDown className="h-8 w-8 text-primary animate-bounce" />
                </div>
              </div>

              {/* Security Station Dashboard */}
              <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Security Station Dashboard</h3>
                  <p className="text-gray-300">Real-time emergency alert management system</p>
                </div>

                {/* Dashboard Interface */}
                <div className="bg-gray-800 rounded-xl p-6 border-2 border-red-500 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-red-400 font-bold text-lg">EMERGENCY ALERT</span>
                    </div>
                    <div className="text-white text-sm">
                      <Clock className="inline-block h-4 w-4 mr-1" />
                      {new Date().toLocaleTimeString()}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Resident Details */}
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <User className="h-5 w-5" />
                        Resident Information
                      </h4>
                      <div className="space-y-2 text-gray-300">
                        <p><span className="text-white font-medium">Name:</span> Rajesh Kumar</p>
                        <p><span className="text-white font-medium">Flat:</span> A-401, Sunrise Apartments</p>
                        <p><span className="text-white font-medium">Phone:</span> +91 98765 43210</p>
                        <p><span className="text-white font-medium">Age:</span> 72 years</p>
                      </div>
                    </div>

                    {/* Emergency Contacts */}
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        Next of Kin (NOK)
                      </h4>
                      <div className="space-y-2 text-gray-300">
                        <p><span className="text-white font-medium">Son:</span> Amit Kumar</p>
                        <p><span className="text-white font-medium">Phone:</span> +91 98765 12345</p>
                        <p><span className="text-white font-medium">Location:</span> Bangalore</p>
                        <p><span className="text-white font-medium">Relation:</span> Primary Contact</p>
                      </div>
                    </div>
                  </div>

                  {/* Alert Details */}
                  <div className="mt-6 bg-red-900/50 border border-red-500 rounded-lg p-4">
                    <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      Alert Details
                    </h4>
                    <p className="text-white"><span className="text-red-400">Type:</span> Gas Leak Detected</p>
                    <p className="text-white"><span className="text-red-400">Location:</span> Kitchen Area</p>
                    <p className="text-white"><span className="text-red-400">Severity:</span> High Priority</p>
                    <p className="text-white"><span className="text-red-400">Time:</span> {new Date().toLocaleString()}</p>
                  </div>
                </div>

                {/* Response Actions */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="bg-green-600 hover:bg-green-700 text-white py-3">
                    <User className="h-5 w-5 mr-2" />
                    Security Guard Response
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white py-3">
                    <Phone className="h-5 w-5 mr-2" />
                    Call NOK
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white py-3">
                    <Headphones className="h-5 w-5 mr-2" />
                    Backend Team Alert
                  </Button>
                </div>
              </div>

              {/* Escalation Flow */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-center text-primary mb-12">
                  Automated Escalation Process
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* Step 1 */}
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Security Guard</h4>
                    <p className="text-sm text-gray-600">First responder receives alert</p>
                    <div className="text-xs text-blue-600 mt-2 font-medium">Response Time: 2 minutes</div>
                  </div>

                  <ArrowRight className="hidden md:block h-6 w-6 text-primary mx-auto mt-8" />

                  {/* Step 2 */}
                  <div className="text-center">
                    <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Auto Escalation</h4>
                    <p className="text-sm text-gray-600">If no response within defined time</p>
                    <div className="text-xs text-orange-600 mt-2 font-medium">Trigger: 5 minutes</div>
                  </div>

                  <ArrowRight className="hidden md:block h-6 w-6 text-primary mx-auto mt-8" />

                  {/* Step 3 */}
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Full Escalation</h4>
                    <p className="text-sm text-gray-600">NOK + Backend Response Team</p>
                    <div className="text-xs text-purple-600 mt-2 font-medium">Emergency Services</div>
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
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Experience the peace of mind that comes with CareSanctum's comprehensive safety ecosystem.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              Get Started Today
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Technology;