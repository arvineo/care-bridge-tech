
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, MessageSquare } from "lucide-react";

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
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Send Us a Message
                  </h2>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                      <Input id="email" type="email" placeholder="Your email address" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                      <Input id="phone" type="tel" placeholder="Your phone number" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="pincode" className="text-sm font-medium text-gray-700">Pin Code</label>
                      <Input 
                        id="pincode" 
                        type="text" 
                        placeholder="Enter your 6-digit pin code" 
                        maxLength={6}
                        pattern="[0-9]{6}"
                        className="font-medium tracking-wider"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                      <Textarea id="message" placeholder="How can we help you?" />
                    </div>
                    <Button className="w-full">Request Callback</Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800" 
                    alt="Contact us" 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-secondary/10 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary">Email</h3>
                          <a
                            href="mailto:connect@caresanctum.com"
                            className="text-secondary hover:underline"
                          >
                            connect@caresanctum.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-secondary/10 p-3 rounded-full">
                          <Phone className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary">Phone</h3>
                          <a
                            href="tel:8591350250"
                            className="text-secondary hover:underline"
                          >
                            +91 859 135 0250
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-secondary/10 p-3 rounded-full">
                          <MessageSquare className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary">WhatsApp</h3>
                          <a
                            href="https://wa.me/918591350250"
                            className="text-secondary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Connect on WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-6">
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
