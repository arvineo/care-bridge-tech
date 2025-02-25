
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";

const locations = [
  { city: "Mumbai", status: "Current" },
  { city: "Goa", status: "Upcoming" },
  { city: "Bengaluru", status: "Upcoming" },
  { city: "Hyderabad", status: "Upcoming" },
  { city: "Delhi NCR", status: "Upcoming" },
  { city: "Kolkata", status: "Upcoming" },
  { city: "Chennai", status: "Upcoming" },
  { city: "Pune", status: "Upcoming" },
];

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Contact Us
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get in touch with us for any queries or assistance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div>
                      <Input placeholder="Name" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Phone Number" />
                    </div>
                    <div>
                      <Textarea placeholder="Your Message" />
                    </div>
                    <Button className="w-full">Request Callback</Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Write to us
                  </h3>
                  <a
                    href="mailto:connect@caresanctum.com"
                    className="text-secondary hover:underline"
                  >
                    connect@caresanctum.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Our Locations
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {locations.map((location) => (
                      <div
                        key={location.city}
                        className="flex items-center space-x-2"
                      >
                        <MapPin className="h-4 w-4 text-secondary" />
                        <span>
                          {location.city}
                          {location.status === "Current" && (
                            <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                              Current
                            </span>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
