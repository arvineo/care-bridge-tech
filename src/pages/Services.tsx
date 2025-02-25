
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { 
  PhoneCall, 
  UserCheck, 
  Bell, 
  Watch, 
  ShoppingBag 
} from "lucide-react";

const services = [
  {
    title: "Teleconsultations",
    description: "Remote doctor support for timely medical advice",
    icon: PhoneCall,
  },
  {
    title: "Care Manager Visits",
    description: "Regular check-ups and personalized care plans",
    icon: UserCheck,
  },
  {
    title: "Emergency Response System",
    description: "SOS and medical assistance within minutes",
    icon: Bell,
  },
  {
    title: "Health Monitoring Wearables",
    description: "Track vitals, predict risks, and prevent crises",
    icon: Watch,
  },
  {
    title: "Concierge Assistance",
    description: "Grocery shopping, travel arrangements, lifestyle support",
    icon: ShoppingBag,
  },
];

const Services = () => {
  return (
    <>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
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
                </Card>
              ))}
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
              {[
                {
                  step: "1",
                  title: "Sign Up",
                  description: "Get started with CareSanctum",
                },
                {
                  step: "2",
                  title: "Connect Devices",
                  description: "Smart wearables and home sensors for real-time monitoring",
                },
                {
                  step: "3",
                  title: "Receive Care",
                  description: "24/7 emergency support & scheduled visits",
                },
                {
                  step: "4",
                  title: "Stay Informed",
                  description: "Real-time health updates & insights",
                },
              ].map((step) => (
                <div key={step.step} className="text-center">
                  <div className="bg-secondary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-secondary font-bold">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
