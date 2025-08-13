import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const QuickCheckCTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-2xl border bg-background p-8 md:p-12 text-center shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-primary">
            Ready to experience peace of mind with QuickCheck?
          </h3>
          <p className="text-muted-foreground mt-3 mb-6">
            Get human‑verified welfare check‑ins in under 30 seconds.
          </p>
          <Button size="lg" asChild>
            <a href="#quickcheck">
              Get QuickCheck Trial Pack @ INR 50 Only
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickCheckCTASection;
