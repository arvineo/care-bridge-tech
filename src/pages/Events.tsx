
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

const upcomingEvents = [
  {
    title: "Healthy Aging Webinar",
    date: "April 15, 2025",
    time: "11:00 AM IST",
    description: "Join our expert panel for insights on maintaining health in senior years.",
  },
  {
    title: "Tech & Seniors Workshop",
    date: "April 20, 2025",
    time: "3:00 PM IST",
    description: "Learn how to use smart devices for better health monitoring.",
  },
  {
    title: "Community Wellness Session",
    date: "April 25, 2025",
    time: "10:00 AM IST",
    description: "Group session focusing on mental wellness and social connection.",
  },
];

const Events = () => {
  useEffect(() => {
    document.title = "Best Senior Wellness Events for Elders | Care sanctum";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join the best senior wellness events for elders by Care sanctum. Explore health tech, safety tips, and expert care solutions tailored for aging loved ones.');
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Events & Programs
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join our community events and wellness programs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Upcoming Events
                </h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <Card key={event.title}>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-primary text-lg mb-2">
                          {event.title}
                        </h3>
                        <p className="text-secondary font-medium">
                          {event.date} at {event.time}
                        </p>
                        <p className="text-gray-600 mt-2">{event.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Events Calendar
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <Calendar
                      mode="single"
                      className="rounded-md border"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Events;
