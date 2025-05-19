
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Import the blog posts data (for a real app, this would be fetched from an API or database)
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);

  // Fallback content for the NRI Guide post
  const nriGuideContent = `
    <h2>Introduction</h2>
    <p>If you're an NRI, you know how tough it can be to care for your family back in India. You want to be there for them, but distance makes it difficult. You worry about their health and overall well-being.</p>
    
    <p>As your parents age, it's natural to worry about their safety, especially when you live far away in another country. Senior citizens in India, particularly in busy cities, face various risks, from health emergencies to social isolation and even theft. It can feel stressful to think about how to protect them from a distance.</p>
    
    <p>You want to make sure your parents are safe, healthy, and happy, but how can you do that when you're thousands of miles away?</p>
    
    <p>The good news is that you can still care for your family, even from afar. With services like Care Sanctum, where technology meets compassionate care, you can stay connected with your parents and ensure they get the support they need.</p>
    
    <p>In this blog, we'll let you know about the right support so you can make a real difference in their lives, no matter how far away you are.</p>
    
    <h2>1. Around-the-Clock Health Monitoring</h2>
    <p>Imagine having peace of mind knowing that your parents' health is being monitored 24/7. You can set up regular check-ins or use health tracking devices that alert you to any changes in their vital signs.</p>
    
    <p>This way, you can stay informed and ensure they receive help if needed. With Care Sanctum, you can access continuous health monitoring services that keep you connected to your parents' well-being. Consider using a health monitor watch or other health devices for seniors to facilitate this process.</p>
    
    <h2>2. Swift Emergency Assistance</h2>
    <p>Emergencies can happen at any time, and it's natural to worry about how your parents would handle them. Make sure they have access to emergency services or a local contact who can respond quickly if something goes wrong.</p>
    
    <p>Having a plan in place can help ease your worries. Care Sanctum has trained emergency response teams ready to act when your parents need help the most—from responding instantly to SOS alarms for the elderly to coordinating ambulances and ensuring smooth hospital admissions. We're there every step of the way.</p>
    
    <h2>3. Everyday Concierge Support</h2>
    <p>Daily tasks can become challenging for seniors. Consider arranging for local services that can assist your parents with everyday activities, such as grocery shopping, doctor appointments, and running errands.</p>
    
    <p>This support helps them maintain their independence while ensuring they have help when they need it. Additionally, incorporating health devices for seniors can further change their daily living experience, providing them with tools to monitor their health and stay connected.</p>
    
    <h2>4. Proactive Health Care</h2>
    <p>Encourage your parents to have regular health checkups and screenings. Staying on top of their health can help catch potential issues early. You can also share resources or apps that provide health tips and reminders for medication or appointments.</p>
    
    <p>With our AI-powered health analytics, you can help your parents stay proactive about their health and prevent potential issues before they arise. Utilizing a health monitoring device can also aid in this effort.</p>
    
    <h2>5. Safe Travel Companionship</h2>
    <p>If your parents need to travel, it can be stressful for both them and you. Consider arranging for a trusted friend or family member to accompany them on trips.</p>
    
    <p>This ensures they feel comfortable and safe during their journey, making travel easier for everyone involved. You might also want to provide them with an SOS alarm for emergencies, giving you peace of mind while they are on the go.</p>
    
    <h2>Final Thoughts</h2>
    <p>Caring for your parents from afar doesn't have to be difficult. By taking proactive steps and utilizing available resources, you can ensure they receive the support they need to stay safe and healthy.</p>
    
    <p>You can have peace of mind knowing that your loved ones are well taken care of, allowing you to focus on your life while still being there for them in meaningful ways.</p>
    
    <p>Are you ready to care for your parents, no matter the distance? Explore the services offered by Care Sanctum today and take the first step towards ensuring your loved ones receive the best care possible!</p>
  `;

  // Default content for health tips post
  const healthTipsContent = `
    <h2>Essential Health & Wellness Tips for Seniors</h2>
    <p>Maintaining good health in your senior years is essential for quality of life. Here are some key tips to help seniors stay healthy and active.</p>
    
    <h3>Regular Exercise</h3>
    <p>Even light activity like walking or swimming can make a significant difference in overall health and mobility.</p>
    
    <h3>Balanced Diet</h3>
    <p>Focus on nutrient-rich foods, adequate hydration, and appropriate portion sizes.</p>
    
    <h3>Preventive Care</h3>
    <p>Regular check-ups and screenings can catch potential health issues before they become serious problems.</p>
    
    <h3>Mental Wellness</h3>
    <p>Staying socially active and engaging in mentally stimulating activities helps maintain cognitive function.</p>
  `;

  // If post not found, display error message
  if (!post) {
    return (
      <>
        <Navbar />
        <div className="pt-20 container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-primary mb-6">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-6">Sorry, the blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </>
    );
  }

  // Determine which content to display based on post ID
  let postContent = "";
  if (post.slug === "nri-guide-senior-care") {
    postContent = nriGuideContent;
  } else if (post.slug === "health-wellness-tips") {
    postContent = healthTipsContent;
  } else {
    postContent = "<p>Content coming soon...</p>";
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <article className="py-16 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Button variant="ghost" className="mb-6" asChild>
                <Link to="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              
              <h1 className="text-4xl font-bold text-primary mb-6">
                {post.title}
              </h1>
              
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div 
                className="prose max-w-none text-gray-700 mb-8 space-y-6"
                dangerouslySetInnerHTML={{ __html: postContent }}
              />
              
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Need personalized care solutions?
                </h3>
                <p className="text-gray-600 mb-6">
                  CareSanctum offers comprehensive care plans for seniors, including health monitoring and emergency assistance.
                </p>
                <Button asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default BlogPost;
