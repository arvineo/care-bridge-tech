
// Blog post data structure
export type BlogPost = {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  icon: "health" | "wellness" | "stories" | "updates";
  slug: string;
};

// Blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Emergency Protocols: How Care Sanctum Reacts",
    category: "Health",
    date: "May 30, 2025",
    description: "Learn how Care Sanctum's emergency response protocols and smart technology help protect seniors during critical situations, providing peace of mind for families living far away.",
    image: "/lovable-uploads/a54c91e8-3b4a-4c80-93a6-f4bda30a06e6.jpg",
    icon: "health",
    slug: "emergency-protocols-care-sanctum-reacts"
  },
  {
    id: "2",
    title: "Why Every Senior Needs an SOS Alarm and Health Monitoring Device",
    category: "Health",
    date: "June 5, 2025",
    description: "Discover the importance of SOS alarms and health monitoring devices for seniors, and how these technologies can provide safety, independence, and peace of mind.",
    image: "/lovable-uploads/d9984abb-90eb-4bfe-b1ca-59c06e8deba5.jpg",
    icon: "health",
    slug: "why-every-senior-needs-sos-alarm-health-monitoring"
  },
  {
    id: "3",
    title: "Why Every Senior Needs an SOS Alarm at Home",
    category: "Health",
    date: "June 25, 2025",
    description: "Learn through Mrs. Patel's story why SOS alarms are essential for senior safety at home, providing immediate emergency assistance and peace of mind for families.",
    image: "/lovable-uploads/fdbaf9b0-d2ca-45f9-90e1-875563374166.jpg",
    icon: "health",
    slug: "why-every-senior-needs-sos-alarm-at-home"
  },
  {
    id: "4",
    title: "Filing ITR for Senior Citizens: A Simple Guide to Tax Benefits",
    category: "Wellness",
    date: "June 8, 2025",
    description: "A comprehensive guide to filing Income Tax Returns for senior citizens, including tax benefits, exemptions, and how CareSanctum's services can support your well-being during tax season.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    icon: "wellness",
    slug: "filing-itr-senior-citizens-simple-guide-tax-benefits"
  },
  {
    id: "5",
    title: "NRI Guide to Long-Distance Senior Care",
    category: "Wellness",
    date: "May 18, 2024",
    description: "Practical solutions for NRIs to manage elderly care for parents in India, from health monitoring to emergency assistance.",
    image: "/lovable-uploads/42c4c59f-1f60-43d2-a4af-989e702b63f0.jpg",
    icon: "wellness",
    slug: "nri-guide-senior-care"
  },
  {
    id: "6",
    title: "How We Designed Care Sanctum for NRIs",
    category: "Stories",
    date: "May 21, 2024",
    description: "Learn how we created a platform that bridges the gap for NRIs caring for their loved ones in India, leveraging technology and compassionate care.",
    image: "/lovable-uploads/d2e03337-a080-4d8e-8da7-09f49092e306.jpg",
    icon: "stories",
    slug: "how-we-designed-care-sanctum-for-nris"
  }
];
