
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
    title: "Health & Wellness Tips",
    category: "Health",
    date: "March 25, 2024",
    description: "Essential tips for maintaining health and wellness in senior years including diet, exercise, and preventive care.",
    image: "/lovable-uploads/c0e8a5eb-8a7c-47cd-8539-e8c485e65196.png",
    icon: "health",
    slug: "health-wellness-tips"
  },
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
];
