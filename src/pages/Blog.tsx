import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Heart, MessageSquare, CalendarDays } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

// Import blog posts from the data file
import { blogPosts } from "@/data/blogPosts";

// Category filter options
const categories = [
  { name: "All", value: "all" },
  { name: "Health", value: "Health" },
  { name: "Wellness", value: "Wellness" },
  { name: "Technology", value: "Technology" },
  { name: "Stories", value: "Stories" },
  { name: "Updates", value: "Updates" },
];

const Blog = () => {
  useEffect(() => {
    document.title = "Senior Care Blog | Health Tips & Devices | Care sanctum";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read Caresanctum\'s senior care blog for health tips, updates on health monitoring devices, and expert advice to support aging parents in India and abroad.');
    }
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Get icon based on post category
  const getPostIcon = (iconType: string) => {
    switch (iconType) {
      case "health":
        return <BookOpen className="h-5 w-5 text-secondary" />;
      case "wellness":
        return <Heart className="h-5 w-5 text-secondary" />;
      case "stories":
        return <MessageSquare className="h-5 w-5 text-secondary" />;
      case "updates":
        return <CalendarDays className="h-5 w-5 text-secondary" />;
      default:
        return <BookOpen className="h-5 w-5 text-secondary" />;
    }
  };

  // Handle newsletter subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you could add code to save to Supabase or send to a webhook
    toast({
      title: "Subscription Successful",
      description: "Thank you for subscribing to our newsletter!",
    });
    setEmail("");
  };

  // Check if we have any blog posts to display
  const hasNoBlogPosts = blogPosts.length === 0;

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Blog & Resources
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Insights and stories about senior care, holistic wellness, technology, 
                and healthy aging to support our community
              </p>
            </div>

            {/* Featured Post */}
            {!hasNoBlogPosts && (
              <div className="max-w-6xl mx-auto mb-16">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={blogPosts[0].image}
                        alt={blogPosts[0].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-4">
                          <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                          <span className="text-sm text-gray-500 ml-4">{blogPosts[0].date}</span>
                        </div>
                        <h2 className="text-3xl font-semibold text-primary mb-4">
                          {blogPosts[0].title}
                        </h2>
                        <p className="text-gray-600 mb-6">
                          {blogPosts[0].description}
                        </p>
                        <Button asChild>
                          <Link to={`/blog/${blogPosts[0].slug}`}>Read Full Article</Link>
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Category Filters */}
            {!hasNoBlogPosts && (
              <div className="max-w-6xl mx-auto mb-8">
                <div className="flex flex-wrap gap-2 justify-center">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category.value
                          ? "bg-secondary text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Blog Posts Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                    <div className="relative h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          {getPostIcon(post.icon)}
                          <span className="text-sm text-secondary font-medium ml-2">
                            {post.category}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow">{post.description}</p>
                      <Button variant="outline" className="mt-auto self-start" asChild>
                        <Link to={`/blog/${post.slug}`}>Read More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">No blog posts found</h2>
                <p className="text-gray-600 mb-4">Check back soon for new content!</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-gray-600">
                  Stay updated with the latest health tips, wellness advice, and CareSanctum news
                </p>
              </div>
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow"
                  />
                  <Button type="submit">Subscribe</Button>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  By subscribing, you agree to receive email communications from CareSanctum.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
