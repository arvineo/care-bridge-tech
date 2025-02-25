
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Team />
      </main>
    </>
  );
};

export default Index;
