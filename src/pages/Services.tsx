
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall, UserCheck, Bell, Watch, ShoppingBag, Users, Plane, Shield, HeartPulse, Thermometer, Heart } from "lucide-react";

const services = [{
  title: "Teleconsultations",
  description: "Remote doctor support for timely medical advice",
  icon: PhoneCall
}, {
  title: "Care Manager Visits",
  description: "Regular check-ups and personalized care plans",
  icon: UserCheck
}, {
  title: "Emergency Response System",
  description: "SOS and medical assistance within minutes",
  icon: Bell
}, {
  title: "Health Monitoring Wearables",
  description: "Track vitals, predict risks, and prevent crises",
  icon: Watch
}, {
  title: "Concierge Assistance",
  description: "Grocery shopping, travel arrangements, lifestyle support",
  icon: ShoppingBag
}, {
  title: "Community Support",
  description: "Join a network of seniors and caregivers who share experiences",
  icon: Users
}, {
  title: "Travel Companion",
  description: "Assistance for seniors during travel and short visits",
  icon: Plane
}];

const Services = () => {
  return <>
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Our Services
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive care solutions designed for seniors' well-being and
                family peace of mind
              </p>
            </div>

            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <img alt="Caring for seniors" className="rounded-xl shadow-lg object-cover h-[400px]" src="/lovable-uploads/42c4c59f-1f60-43d2-a4af-989e702b63f0.jpg" />
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-primary mb-6">
                    Personalized Senior Care
                  </h2>
                  <p className="text-gray-600 mb-4">
                    At CareSanctum, we understand that each senior has unique needs. Our services are tailored to provide personalized care that respects individual preferences while ensuring safety and well-being.
                  </p>
                  <p className="text-gray-600">
                    From health monitoring to companionship, our comprehensive approach addresses all aspects of senior care, allowing families to feel confident that their loved ones are receiving the best possible support.
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor & Specialist Care Section (Moved from Technology) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img alt="Doctor and specialist care services" className="w-full h-full object-cover" src="/lovable-uploads/d2e03337-a080-4d8e-8da7-09f49092e306.jpg" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full bg-secondary/10 p-3">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">
                    Doctor & Specialist Care
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Our comprehensive healthcare approach connects seniors with qualified medical professionals for personalized care. Whether for urgent consultations or routine checkups, we ensure access to quality healthcare services whenever needed.
                </p>
                
                {/* Healthcare Services Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3 p-3 rounded-lg shadow-sm bg-purple-100">
                    <PhoneCall className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">On-Demand Specialist Consultation</h4>
                      <p className="text-sm text-gray-500">Connect with specialists via video calls when needed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg shadow-sm bg-purple-100">
                    <HeartPulse className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">Scheduled Doctor Visits</h4>
                      <p className="text-sm text-gray-500">Regular appointments with primary care physicians</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg shadow-sm bg-purple-100">
                    <Thermometer className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">Routine Health Checkups</h4>
                      <p className="text-sm text-gray-500">Preventive screenings and regular assessments</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg shadow-sm bg-purple-100">
                    <Heart className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">Home Visits</h4>
                      <p className="text-sm text-gray-500">Healthcare professionals and nurses visit at home</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map(service => <Card key={service.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="rounded-full bg-secondary/10 p-4">
                        <service.icon className="h-8 w-8 text-secondary" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4">
                How It Works
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[{
              step: "1",
              title: "Sign Up",
              description: "Get started with CareSanctum"
            }, {
              step: "2",
              title: "Onboarding",
              description: "Complete assessment and personalized care plan"
            }, {
              step: "3",
              title: "Receive Care",
              description: "24/7 emergency support & scheduled visits"
            }, {
              step: "4",
              title: "Stay Informed",
              description: "Real-time health updates & insights"
            }].map(step => <div key={step.step} className="text-center">
                  <div className="bg-secondary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-secondary font-bold">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Explore Our Offerings
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/tech" className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-primary">
                  Technology Solutions
                </a>
                <a href="/plans" className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-primary">
                  Care Plans
                </a>
                <a href="/services" className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-primary">
                  Care Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>;
};

export default Services;
