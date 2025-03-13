
import Hero from "../components/Hero";
import Features from "../components/Features";
import Navbar from "../components/Navbar";
import Team from "../components/Team";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Team />
      </main>
    </>
  );
};

export default Index;
