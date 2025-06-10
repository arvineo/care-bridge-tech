import Navbar from "../components/Navbar";

const Content = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Join Our Community
            </h1>
            
            {/* Move the CTA button to the top */}
            <div className="bg-purple-50 p-6 rounded-lg mb-8 text-center">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Ready to Get Started?
              </h2>
              <p className="mb-6">
                Contact us to learn more about joining our community and how Care Sanctum can help you provide the best care for your loved ones.
              </p>
              <a 
                href="https://chat.whatsapp.com/IMVCZjM0rVJCkmR4cs3nl4" 
                className="inline-block bg-primary text-white px-8 py-4 text-lg font-bold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Join Free Community
              </a>
            </div>
            
            <div className="text-lg text-gray-600 space-y-6">
              <p>
                Welcome to the Care Sanctum community! We're building a supportive network of families, caregivers, and seniors who believe in the power of technology to enhance senior care.
              </p>
              
              <p>
                By joining our community, you'll gain access to:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Expert insights on senior care and wellness</li>
                <li>Technology updates and feature announcements</li>
                <li>Community support and shared experiences</li>
                <li>Exclusive content and resources</li>
                <li>Early access to new services and features</li>
              </ul>
              
              <p>
                Our community is a place where families can connect, share their experiences, and learn from one another. Whether you're an NRI looking after loved ones back home or a local caregiver seeking better solutions, you'll find valuable support and resources here.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Content;
