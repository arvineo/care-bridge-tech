
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
    id: "2",
    title: "NRI Guide to Long-Distance Senior Care",
    category: "Wellness",
    date: "May 18, 2024",
    description: "Practical solutions for NRIs to manage elderly care for parents in India, from health monitoring to emergency assistance.",
    image: "/lovable-uploads/42c4c59f-1f60-43d2-a4af-989e702b63f0.jpg",
    icon: "wellness",
    slug: "nri-guide-senior-care"
  },
  {
    id: "3",
    title: "How We Designed Care Sanctum for NRIs",
    category: "Stories",
    date: "May 21, 2024",
    description: "Learn how we created a platform that bridges the gap for NRIs caring for their loved ones in India, leveraging technology and compassionate care.",
    image: "/lovable-uploads/d2e03337-a080-4d8e-8da7-09f49092e306.jpg",
    icon: "stories",
    slug: "how-we-designed-care-sanctum-for-nris"
  }
];
