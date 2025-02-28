
import {
  Activity,
  Heart,
  Bell,
  Users,
  Plane,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    title: "24/7 Health Monitoring & Support",
    description:
      "Round-the-clock tracking of vital signs and access to our dedicated care team",
    icon: Activity,
  },
  {
    title: "Emergency Response",
    description:
      "Immediate assistance with our trained emergency response team",
    icon: Bell,
  },
  {
    title: "Concierge Services",
    description:
      "Personal assistance for daily tasks, appointments, and errands",
    icon: Users,
  },
  {
    title: "Preemptive Care",
    description:
      "AI-powered health analytics to prevent potential health issues",
    icon: Heart,
  },
  {
    title: "Travel Companion",
    description:
      "The travel buddy accompanies seniors on short visits, ensuring comfort and safety",
    icon: Plane,
  },
  {
    title: "Community",
    description:
      "Join a supportive network of seniors and caregivers who share experiences",
    icon: Users,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose CareSanctum?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of compassionate care and innovative
            technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-secondary/10 p-3">
                    <feature.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">{feature.title}</h3>
                    <p className="text-gray-600 mt-1 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
