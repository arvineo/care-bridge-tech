import Navbar from "../components/Navbar";
import Team from "../components/Team";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              About Us
            </h1>
            
            <div className="text-lg text-gray-600 space-y-6 mb-16">
              <p>
                At CareSanctum, we're dedicated to revolutionizing senior care through innovative technology and compassionate service. Our mission is to ensure that every senior feels safe, valued, and cherished while maintaining their independence and dignity.
              </p>
              
              <p>
                We understand the unique challenges faced by families, especially NRIs who worry about their aging parents back home. Our comprehensive solutions bridge the gap between technology and human care, providing peace of mind for families and safety for seniors.
              </p>
            </div>

            <Team />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;