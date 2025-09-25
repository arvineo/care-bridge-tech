import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import ImageCarousel from "@/components/ImageCarousel";
import { Check, Shield, Phone, Zap, RotateCcw } from "lucide-react";

const WatchOnlyPlan = () => {
  useEffect(() => {
    document.title = "Watch Only Plan | CareSanctum - Smartwatch Safety Plan";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Watch Only Plan by CareSanctum - Managed smartwatch safety plan with SIM, support, upgrades, and human backup."
      );
    }

    // Canonical tag
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical!.setAttribute("href", `${window.location.origin}/watch-only`);

    // Basic JSON-LD for Service
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "CareSanctum Watch Only Plan",
      description:
        "Managed smartwatch safety subscription with GPS, SOS, calling, upgrades, and lifetime warranty.",
      provider: { "@type": "Organization", name: "CareSanctum" },
      areaServed: "IN"
    });
    document.head.appendChild(ld);
    return () => {
      document.head.removeChild(ld);
    };
  }, []);

  const [showMore, setShowMore] = useState(false);

  const carouselImages = [
    { src: "/lovable-uploads/watch-01.png", alt: "CareSanctum kids smartwatch - mint and lilac" },
    { src: "/lovable-uploads/watch-02.png", alt: "CareSanctum kids smartwatch - blue and red with SIM" },
    { src: "/lovable-uploads/kids-01.jpg", alt: "Happy kids wearing CareSanctum smartwatches" },
    { src: "/lovable-uploads/customer-02.png", alt: "CareSanctum customer showcasing smartwatch at event" },
    { src: "/lovable-uploads/customer-02.png", alt: "Customer showcasing CareSanctum smartwatch at event" },
    { src: "/lovable-uploads/happy-kids-with-smartwatches-3.jpg", alt: "Happy kids wearing CareSanctum smartwatches together" },
  ];

  const features = [
    "One-Tap SOS with 24x7 Backup",
    "Live GPS Tracking & Safe Zone Alerts",
    "Two-Way Video Calling & Voice Chat",
    "SIM Included & Managed by CareSanctum",
    "Lifetime Warranty & Free Replacements",
    "Free Hardware & Software Upgrades",
  ];

  const signupUrl = "https://sanctum-guardians.lovable.app/auth";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
        {/* Hero with Carousel */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                    CareSanctum Safety & Security Net for Children & Seniors!
                  </h1>
                  <p className="text-xl lg:text-2xl text-muted-foreground max-w-lg">
                    Safety for your child or parent with a simple smartwatch plan
                  </p>
                </div>

                {/* Bulleted features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {features.map((text, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl lg:text-3xl text-muted-foreground line-through">₹599/month</span>
                    <span className="text-4xl lg:text-5xl font-bold text-primary">Starts at ₹351/month</span>
                  </div>
                  <p className="text-sm text-secondary-foreground">Offer for limited time.</p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-lg px-8">
                    <a href={signupUrl} target="_blank" rel="noopener noreferrer">Sign up</a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8">
                    <Link to="/contact">
                      <Phone className="w-4 h-4 mr-2" />
                      Talk to an expert
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg" className="text-lg px-8">
                    <Link to="/contact">Get More Details</Link>
                  </Button>
                </div>
              </div>

              {/* Right - Carousel */}
              <div>
                <div className="bg-gradient-to-br from-primary/10 to-accent/20 rounded-3xl p-4 lg:p-6">
                  <ImageCarousel
                    images={carouselImages}
                    autoSwitchInterval={4000}
                    className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who is it for */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <article className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-2xl lg:text-3xl font-semibold">Who is the Watch Only Plan for?</h2>
              <p className="text-muted-foreground">The Watch Only Plan is designed for two groups who value independence yet deserve constant safety: children and seniors.</p>
              <div className="space-y-4">
                <p className="font-medium">For Children (6–15 years):</p>
                <p className="text-muted-foreground">It’s the perfect first step toward responsibility. Kids can walk to the playground, classes, or a friend’s house on their own — while parents stay reassured with GPS tracking, geo-fencing, SOS alerts, and two-way calling.</p>
                {showMore && (
                  <>
                    <p className="font-medium">For Seniors:</p>
                    <p className="text-muted-foreground">Real-time health monitoring (BP, heart rate, SpO₂, skin temperature), automatic fall detection, and instant SOS calling keep help a tap away. Two-way and video calling keep seniors connected.</p>
                    <p className="text-muted-foreground">Whether it’s a child taking their first steps toward independence or a senior embracing life on their own terms, the Watch Only Plan makes sure safety and freedom go hand in hand.</p>
                  </>
                )}
                <Button variant="ghost" onClick={() => setShowMore((s) => !s)} className="px-0 w-fit">
                  {showMore ? "Read less" : "Read more"}
                </Button>
              </div>
            </article>
          </div>
        </section>

        {/* Payment Plans */}
        <section className="py-12 bg-accent/10">
          <div className="container mx-auto px-4 lg:px-8">
            <header className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-semibold">Payment Plans</h2>
              <p className="text-muted-foreground">Available payment options for users</p>
            </header>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Standard */}
              <div className="rounded-2xl border p-6 bg-background">
                <div className="text-sm mb-1">Standard</div>
                <div className="text-3xl font-bold">₹399<span className="text-base font-medium">/month</span></div>
                <p className="text-sm text-muted-foreground mb-4">+ ₹4000 refundable security deposit</p>
                <ul className="space-y-2 text-sm mb-6">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 text-primary mt-0.5" />{f}</li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <a href={signupUrl} target="_blank" rel="noopener noreferrer">Sign up</a>
                </Button>
              </div>

              {/* 6 Months */}
              <div className="rounded-2xl border p-6 bg-background">
                <div className="text-sm">6 Months</div>
                <div className="text-emerald-600 text-xs font-medium mb-1">6% Discount</div>
                <div className="text-3xl font-bold">₹375<span className="text-base font-medium">/month</span></div>
                <p className="text-sm text-muted-foreground mb-4">+ ₹4000 refundable security deposit</p>
                <ul className="space-y-2 text-sm mb-6">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 text-primary mt-0.5" />{f}</li>
                  ))}
                </ul>
                <Button asChild className="w-full" variant="secondary">
                  <a href={signupUrl} target="_blank" rel="noopener noreferrer">Sign up</a>
                </Button>
              </div>

              {/* Annual - Most Preferred */}
              <div className="rounded-2xl border p-6 bg-background ring-2 ring-primary relative">
                <span className="absolute -top-3 right-4 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">Most Preferred</span>
                <div className="text-sm">Annual</div>
                <div className="text-emerald-600 text-xs font-medium mb-1">12% Discount</div>
                <div className="text-3xl font-bold">₹351<span className="text-base font-medium">/month</span></div>
                <p className="text-sm text-muted-foreground mb-2">+ ₹4000 refundable security deposit</p>
                <p className="text-sm mb-4"><strong>Includes</strong>: Free watch refresh every 18 months + 12% extra discount</p>
                <ul className="space-y-2 text-sm mb-6">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 text-primary mt-0.5" />{f}</li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <a href={signupUrl} target="_blank" rel="noopener noreferrer">Sign up (Annual)</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Subscribe */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-semibold">Why Subscribe to Safety Instead of Just Buying a Watch?</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-primary mt-0.5" />Safety Net vs. Just Device – 24/7 backup even if parents miss the SOS call.</li>
                  <li className="flex items-start gap-3"><Zap className="w-5 h-5 text-primary mt-0.5" />Cost Advantage – Buying costs ~₹10k in 1st year, ~₹12k in 2 years vs Subscription only ₹4,212/year.</li>
                  <li className="flex items-start gap-3"><RotateCcw className="w-5 h-5 text-primary mt-0.5" />Lifetime Warranty – always covered.</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary mt-0.5" />Free Tech Upgrades – hardware + software included.</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary mt-0.5" />Free Watch Refresh every 18 months with annual plan.</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary mt-0.5" />Coming Soon – Child Engagement & Safety Plan.</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary mt-0.5" />Risk-Free Trial – subscribe for a month, return if not satisfied.</li>
                </ul>
                <div>
                  <Button asChild size="lg">
                    <a href={signupUrl} target="_blank" rel="noopener noreferrer">Choose Subscription. Choose Safety. Choose Peace of Mind.</a>
                  </Button>
                </div>
              </div>
              <aside className="rounded-2xl border p-6 bg-accent/10">
                <h3 className="font-semibold mb-3">Why Annual is recommended</h3>
                <p className="text-sm text-muted-foreground">Annual plan gives you the best value with 12% discount and includes a free watch refresh every 18 months. Ideal for growing kids and long-term peace of mind.</p>
              </aside>
            </div>
          </div>
        </section>

        {/* Beta Community */}
        <section className="py-12 bg-accent/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="rounded-2xl border p-6 text-center">
              <h2 className="text-2xl font-semibold mb-2">Beta – Children's community with reward programs</h2>
              <p className="text-muted-foreground">Coming soon: up to ₹100 cashback per month to help children learn savings and safety. Stay tuned!</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-10">What parents have to say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <article className="rounded-2xl border p-6 bg-background">
                <p className="mb-4">"My daughter is only 7, and I wanted her to start doing small things on her own - like going to the playground or her dance class. The Watch Only Plan gave me the confidence to let her try, knowing I can track her location and get alerts if she steps out of the safe zone. She feels more grown-up, and I feel completely at peace."</p>
                <p className="text-sm text-muted-foreground">— Neha Sharma, Mumbai</p>
              </article>
              <article className="rounded-2xl border p-6 bg-background">
                <p className="mb-4">"Our 10-year-old always wanted to go cycling with his friends, but I was constantly worried about where he was. With this watch, I don’t need to call him every few minutes - I can see where he is, and he can reach us instantly if needed. It’s freedom for him and reassurance for us."</p>
                <p className="text-sm text-muted-foreground">— Rohit & Aarti Mehta, Pune</p>
              </article>
              <article className="rounded-2xl border p-6 bg-background">
                <p className="mb-4">"Between work and errands, I used to worry every time my son stepped out for his football class. Now, with real-time GPS and geo-alerts, I know exactly where he is. The SOS feature makes me feel he’s never truly alone. It’s like I’m right there with him, even when I’m not."</p>
                <p className="text-sm text-muted-foreground">— Arun Mehta, Pune</p>
              </article>
            </div>
          </div>
        </section>

        {/* Photo Gallery - same images and style */}
        <section className="py-12 bg-accent/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <ImageCarousel
                images={carouselImages}
                autoSwitchInterval={3500}
                className="w-full h-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WatchOnlyPlan;