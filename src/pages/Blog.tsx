
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Senior Health & Wellness Tips",
    category: "Health",
    date: "March 25, 2024",
    description: "Essential tips for maintaining health and wellness in senior years.",
    image: "/lovable-uploads/c0e8a5eb-8a7c-47cd-8539-e8c485e65196.png",
  },
  {
    title: "The Future of Tech-Enabled Elder Care",
    category: "Technology",
    date: "March 20, 2024",
    description: "How technology is transforming senior care services.",
    image: "/lovable-uploads/65bc6a87-0813-4dce-be19-c35df23cf73f.png",
  },
  {
    title: "Success Stories: Living Independently",
    category: "Stories",
    date: "March 15, 2024",
    description: "Real stories of seniors thriving with CareSanctum support.",
    image: "/lovable-uploads/69165008-873b-4a06-900c-83f10a11d07d.png",
  },
];

const Blog = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Blog & Resources
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Insights and stories about senior care, technology, and healthy
                aging
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post) => (
                <Card key={post.title} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-secondary font-medium">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <Button variant="outline">Read More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
