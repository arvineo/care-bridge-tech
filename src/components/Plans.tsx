
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Check, HelpCircle, X } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

type PlanFeature = {
  name: string;
  description: string;
  watchtower: boolean | string;
  trident: boolean | string;
  quantum: boolean | string;
};

const planFeatures: PlanFeature[] = [
  {
    name: "Device Provided",
    description: "Smart devices provided with the plan for health tracking",
    watchtower: "Smartwatch",
    trident: "Smartwatch & Essential Medical Devices",
    quantum: "Smartwatch, Smart Ring, Medical Devices & IoT devices like motion sensors and SOS buttons",
  },
  {
    name: "Fall Detection & Support",
    description: "Automatic detection of falls with immediate response protocols",
    watchtower: true,
    trident: true,
    quantum: true,
  },
  {
    name: "Continuous Health Monitoring",
    description: "24/7 monitoring of vital health metrics",
    watchtower: true,
    trident: true,
    quantum: true,
  },
  {
    name: "GPS Tracking",
    description: "Location tracking for safety and emergency response",
    watchtower: true,
    trident: true,
    quantum: true,
  },
  {
    name: "Emergency SOS Button",
    description: "One-touch emergency assistance",
    watchtower: "Smart Watch & Mobile App",
    trident: "Smart Watch & Mobile App",
    quantum: "Smart watch, mobile app and physical buttons installed in bedroom, living room, washroom, kitchen",
  },
  {
    name: "Caregiver Health & Safety Checks",
    description: "Health checks by care professionals",
    watchtower: "1 Virtual Check Monthly",
    trident: "2 Virtual Checks Monthly",
    quantum: "4 Physical Checks Monthly",
  },
  {
    name: "Activity Monitoring",
    description: "Track daily activities and movement patterns",
    watchtower: true,
    trident: true,
    quantum: true,
  },
  {
    name: "Personalized Health Insights",
    description: "Customized health recommendations based on data",
    watchtower: true,
    trident: true,
    quantum: true,
  },
  {
    name: "Low Battery Alerts",
    description: "Notifications when device battery is low",
    watchtower: true,
    trident: true,
    quantum: true,
  },
  {
    name: "Safe & Secure Communication",
    description: "Encrypted communication channels",
    watchtower: true,
    trident: true,
    quantum: true,
  },
  {
    name: "Medication & Appointment Reminders",
    description: "Regular alerts for medications and doctor visits",
    watchtower: false,
    trident: true,
    quantum: true,
  },
  {
    name: "Social & Emotional Well-being Support",
    description: "Programs to maintain mental and emotional health",
    watchtower: false,
    trident: true,
    quantum: true,
  },
  {
    name: "Doctor Teleconsultation",
    description: "Remote consultations with healthcare professionals",
    watchtower: false,
    trident: "1 per month",
    quantum: "2 per month",
  },
  {
    name: "Concierge Service",
    description: "Assistance with daily needs and errands",
    watchtower: false,
    trident: "30 calls per month",
    quantum: "Unlimited",
  },
  {
    name: "Community Events",
    description: "Social activities and engagement opportunities",
    watchtower: false,
    trident: "Virtual Events Only",
    quantum: "Both Virtual & Physical Events",
  },
  {
    name: "Medical Record Management",
    description: "Organization and storage of health records",
    watchtower: false,
    trident: true,
    quantum: true,
  },
  {
    name: "Medicine Management",
    description: "Tracking and organization of medications",
    watchtower: false,
    trident: true,
    quantum: true,
  },
  {
    name: "On-ground Emergency Support",
    description: "Physical assistance during emergencies",
    watchtower: false,
    trident: "Remote assistance",
    quantum: "Remote plus in-person support",
  },
  {
    name: "Annual Health Check-up",
    description: "Comprehensive yearly physical examination",
    watchtower: false,
    trident: false,
    quantum: true,
  },
];

const plans = [
  {
    name: "Watchtower Plan",
    highlighted: false,
    description:
      "Get peace of mind with our Watchtower Plan. This plan provides real-time health monitoring via a smartwatch, with our backend team keeping an eye on your vitals and intervening only when necessary.",
    bestFor:
      "Designed for seniors who need peace of mind with real-time health monitoring and emergency intervention only when necessary.",
    deposit: "₹4,500",
    monthly: "₹1,500",
    color: "bg-blue-50",
    accentColor: "bg-blue-600",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
  },
  {
    name: "Trident Shield Plan",
    highlighted: false,
    description:
      "Want proactive care for your loved ones? Our Trident Shield Plan includes a smartwatch and essential medical devices to track BP, SPO2, weight, and temperature. A Virtual Care Manager (VCM) will check in weekly.",
    bestFor:
      "Best for families seeking a more proactive approach to senior care, with health tracking, virtual care support, and regular doctor check-ins.",
    deposit: "₹7,000",
    monthly: "₹5,000",
    color: "bg-purple-50",
    accentColor: "bg-purple-600",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
  },
  {
    name: "Quantum Fortress Plan",
    highlighted: true,
    description:
      "For those who need full support, our Quantum Fortress Plan offers everything – a smartwatch and smart ring, BP and SPO2 tracking, motion and SOS sensors, and real-time emergency intervention.",
    bestFor:
      "For seniors who require the highest level of care and full-time health tracking, including physical care visits and in-person wellness events.",
    deposit: "₹12,000",
    monthly: "₹15,000",
    color: "bg-secondary/20",
    accentColor: "bg-secondary",
    buttonColor: "bg-secondary hover:bg-secondary/90",
  },
];

const faqs = [
  {
    question: "How do I know which plan is right for my family?",
    answer:
      "Consider your loved one's health condition, independence level, and your desire for involvement. The Watchtower Plan is great for independent seniors, Trident Shield for those needing some assistance, and Quantum Fortress for comprehensive care needs.",
  },
  {
    question: "What devices are included with each plan?",
    answer:
      "The Watchtower Plan includes a smartwatch, Trident Shield adds essential medical devices (BP monitor, SPO2 meter, etc.), and Quantum Fortress includes all devices plus additional sensors for complete monitoring.",
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer:
      "Yes, you can change your plan at any time. We'll adjust your billing and services accordingly, and any difference in security deposits will be credited or charged.",
  },
  {
    question: "Is the security deposit refundable?",
    answer:
      "Yes, the security deposit is fully refundable when you return all devices in good working condition upon cancellation of services.",
  },
  {
    question: "How does emergency response work?",
    answer:
      "Our systems monitor for emergencies 24/7. When detected, we immediately contact the senior, then their emergency contacts, and dispatch local emergency services if necessary.",
  },
];

const FeatureCheck = ({ included }: { included: boolean | string }) => {
  if (typeof included === "string") {
    return <span className="text-sm">{included}</span>;
  }
  
  return included ? (
    <Check className="h-5 w-5 text-green-600" />
  ) : (
    <X className="h-5 w-5 text-gray-300" />
  );
};

const Plans = () => {
  const [activeTab, setActiveTab] = useState<"table" | "cards">("cards");

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white" id="plans">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Choose the Right Care Plan for Your Loved Ones
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Compare our plans and find the best fit for senior care with real-time
            monitoring, emergency support, and personalized wellness services.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab("cards")}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-l-lg",
                activeTab === "cards"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              )}
            >
              Card View
            </button>
            <button
              onClick={() => setActiveTab("table")}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-r-lg",
                activeTab === "table"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              )}
            >
              Comparison Table
            </button>
          </div>
        </div>

        {activeTab === "cards" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={cn(
                  "border overflow-hidden transition-all duration-300",
                  plan.highlighted
                    ? "shadow-lg scale-105 border-secondary md:scale-110"
                    : "hover:shadow-md"
                )}
              >
                <div
                  className={cn(
                    "h-2 w-full",
                    plan.accentColor
                  )}
                />
                <CardHeader className={cn("pb-2", plan.color)}>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription className="mt-2">
                    {plan.bestFor}
                  </CardDescription>
                </CardHeader>
                <CardContent className={cn("space-y-4", plan.color)}>
                  <div className="text-xl font-bold flex items-baseline gap-2">
                    {plan.monthly}
                    <span className="text-sm font-normal text-gray-500">/ month</span>
                  </div>
                  <p className="text-sm mb-6">{plan.description}</p>
                  <div className="text-sm text-gray-600">
                    Refundable deposit: <span className="font-semibold">{plan.deposit}</span>
                  </div>
                </CardContent>
                <CardFooter className={cn("pt-0 pb-6 flex justify-center", plan.color)}>
                  <Button
                    className={plan.buttonColor}
                    size="lg"
                    onClick={() => window.location.href = "/contact"}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto mb-12">
            <div className="min-w-[1000px]">
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="p-4 font-bold text-lg">Features</div>
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={cn(
                      "p-4 rounded-t-lg text-center",
                      plan.color,
                      plan.highlighted && "border-2 border-secondary"
                    )}
                  >
                    <h3 className="font-bold text-lg">{plan.name}</h3>
                    <p className="text-2xl font-bold mt-2">
                      {plan.monthly}
                      <span className="text-sm font-normal text-gray-500"> / month</span>
                    </p>
                    <p className="text-sm mt-1">
                      Refundable deposit: <span className="font-semibold">{plan.deposit}</span>
                    </p>
                  </div>
                ))}
              </div>

              {planFeatures.map((feature, index) => (
                <div
                  key={feature.name}
                  className={cn(
                    "grid grid-cols-4 gap-4",
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  )}
                >
                  <div className="p-4 flex items-center">
                    <div className="flex items-center">
                      {feature.name}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span>
                              <HelpCircle className="h-4 w-4 ml-2 text-gray-400" />
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-64">{feature.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                  <div className="p-4 flex justify-center items-center">
                    <FeatureCheck included={feature.watchtower} />
                  </div>
                  <div className="p-4 flex justify-center items-center">
                    <FeatureCheck included={feature.trident} />
                  </div>
                  <div
                    className={cn(
                      "p-4 flex justify-center items-center",
                      plans[2].highlighted && "border-x-2 border-b-2 border-secondary"
                    )}
                  >
                    <FeatureCheck included={feature.quantum} />
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-4 gap-4 mt-4">
                <div></div>
                {plans.map((plan) => (
                  <div key={`${plan.name}-footer`} className="p-4 flex justify-center">
                    <Button
                      className={plan.buttonColor}
                      size="lg"
                      onClick={() => window.location.href = "/contact"}
                    >
                      Get Started
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="text-center mb-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.location.href = "/contact"}
          >
            Contact Us for More Information
          </Button>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
