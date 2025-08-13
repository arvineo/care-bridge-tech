import { ShieldAlert, Activity, Users, HeartPulse } from "lucide-react";

const QuickCheckCoreMuted = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Beyond QuickCheck – Complete Senior Safety & Wellness
          </h2>
          <p className="text-muted-foreground mt-3">
            CareSanctum continues to provide smart, connected safety solutions for seniors — from SOS buttons and motion sensors to wellness monitoring and community engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 opacity-90">
          <div className="rounded-xl border bg-muted/40 p-5">
            <ShieldAlert className="h-5 w-5 text-primary mb-2" />
            <h3 className="font-semibold">SOS Buttons</h3>
            <p className="text-sm text-muted-foreground">Instant help at a tap.</p>
          </div>
          <div className="rounded-xl border bg-muted/40 p-5">
            <Activity className="h-5 w-5 text-primary mb-2" />
            <h3 className="font-semibold">Motion Sensors</h3>
            <p className="text-sm text-muted-foreground">Proactive safety at home.</p>
          </div>
          <div className="rounded-xl border bg-muted/40 p-5">
            <HeartPulse className="h-5 w-5 text-primary mb-2" />
            <h3 className="font-semibold">Wellness Monitoring</h3>
            <p className="text-sm text-muted-foreground">Vitals and daily well-being.</p>
          </div>
          <div className="rounded-xl border bg-muted/40 p-5">
            <Users className="h-5 w-5 text-primary mb-2" />
            <h3 className="font-semibold">Community Engagement</h3>
            <p className="text-sm text-muted-foreground">Keep them active and connected.</p>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Trusted by caring families and communities. Partnerships and testimonials available on request.
        </p>
      </div>
    </section>
  );
};

export default QuickCheckCoreMuted;
