
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
];
