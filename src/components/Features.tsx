
import {
  Shield,
  Heart,
  Users,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    title: "Safety & Security",
    description: "Comprehensive protection for peace of mind",
    icon: Shield,
    details: [
      "Fall Detection",
      "SOS Alerts", 
      "GPS Tracking",
      "Geo Fencing",
      "Gas Leak Detection",
      "Smoke Detection and more"
    ]
  },
  {
    title: "Physical Health & Mental WellBeing",
    description: "Complete health monitoring and wellness support",
    icon: Heart,
    details: [
      "Heart Rate Tracking",
      "BP Monitoring",
      "Skin Temperature",
      "SpO2 Tracking",
      "Wellness Community Access",
      "Doctor Tele Consultations",
      "Expert Guidance from Nutritionist, Physiotherapist",
      "Palliative Care Expert, Ayurveda and Yoga Expert",
      "Medicine Reminders",
      "Medical Record Management"
    ]
  },
  {
    title: "Day to Day Need Management",
    description: "Seamless support for daily living requirements",
    icon: Users,
    details: [
      "Concierge Service",
      "Travel Assistance"
    ]
  },
  {
    title: "Emergency Crisis Management", 
    description: "Rapid response coordination when it matters most",
    icon: AlertTriangle,
    details: [
      "Ambulance Coordination",
      "Safety Service Coordination", 
      "Hospital and Other Emergency Services Coordination"
    ]
  }
];

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
              onMouseEnter={() => setHoveredFeature(feature.title)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-secondary/10 p-3 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-primary text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {feature.description}
                    </p>
                    
                    {/* Details that appear on hover */}
                    <div className={`transition-all duration-300 ${
                      hoveredFeature === feature.title 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-primary mb-2">Includes:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {feature.details.map((detail, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-secondary mr-2">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
