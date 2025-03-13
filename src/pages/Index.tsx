
import Hero from "../components/Hero";
import Features from "../components/Features";
import Navbar from "../components/Navbar";
import Team from "../components/Team";
import Plans from "../components/Plans";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Plans />
        <Team />
      </main>
    </>
  );
};

export default Index;
