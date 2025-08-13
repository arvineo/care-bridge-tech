import { Button } from "./ui/button";
import { Zap, HandHeart, Wallet, Globe } from "lucide-react";

const QuickCheckOverview = () => {
  return (
    <section id="quickcheck" className="py-20 bg-gradient-to-b from-white to-purple-50 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What is QuickCheck?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            QuickCheck is a rapid welfare check-in service designed for busy professionals who want to ensure their loved ones are safe — even when they can’t answer the phone. With just one tap, we verify their well-being and keep you informed in under 30 seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="rounded-xl border bg-background p-6 shadow-sm">
            <Zap className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Fast Check-ins</h3>
            <p className="text-sm text-muted-foreground">Immediate human-verified responses.</p>
          </div>
          <div className="rounded-xl border bg-background p-6 shadow-sm">
            <HandHeart className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Human Touch</h3>
            <p className="text-sm text-muted-foreground">Real people checking on your loved ones.</p>
          </div>
          <div className="rounded-xl border bg-background p-6 shadow-sm">
            <Wallet className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Affordable Model</h3>
            <p className="text-sm text-muted-foreground">Pay only ₹7 per check.</p>
          </div>
          <div className="rounded-xl border bg-background p-6 shadow-sm">
            <Globe className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Global Ready</h3>
            <p className="text-sm text-muted-foreground">NRI family support coming soon.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a href="#quickcheck">Start with QuickCheck Today</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickCheckOverview;
