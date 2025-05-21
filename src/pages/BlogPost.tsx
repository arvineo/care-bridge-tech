
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Import the blog posts data (for a real app, this would be fetched from an API or database)
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);

  // Content for the NRI Guide post
  const nriGuideContent = `
    <h1>Introduction</h1>
    <p>If you're an NRI, you know how tough it can be to care for your family back in India. You want to be there for them, but distance makes it difficult. You worry about their health and overall well-being.</p>
    
    <p>As your parents age, it's natural to worry about their safety, especially when you live far away in another country. Senior citizens in India, particularly in busy cities, face various risks, from health emergencies to social isolation and even theft. It can feel stressful to think about how to protect them from a distance.</p>
    
    <p>You want to make sure your parents are safe, healthy, and happy, but how can you do that when you're thousands of miles away?</p>
    
    <p>The good news is that you can still care for your family, even from afar. With services like <a href="https://caresanctum.com/" target="_blank" rel="noopener noreferrer" class="text-secondary hover:underline">Care Sanctum</a>, where technology meets compassionate care, you can stay connected with your parents and ensure they get the support they need.</p>
    
    <p>In this blog, we'll let you know about the right support so you can make a real difference in their lives, no matter how far away you are.</p>
    
    <h2>1. Around-the-Clock Health Monitoring</h2>
    <p>Imagine having peace of mind knowing that your parents' health is being monitored 24/7. You can set up regular check-ins or use health tracking devices that alert you to any changes in their vital signs.</p>
    
    <p>This way, you can stay informed and ensure they receive help if needed. With <a href="https://caresanctum.com/" target="_blank" rel="noopener noreferrer" class="text-secondary hover:underline">Care Sanctum</a>, you can access continuous health monitoring services that keep you connected to your parents' well-being. Consider using a <a href="https://caresanctum.com/tech" target="_blank" rel="noopener noreferrer" class="text-secondary hover:underline">health device for seniors</a> to facilitate this process.</p>
    
    <h2>2. Swift Emergency Assistance</h2>
    <p>Emergencies can happen at any time, and it's natural to worry about how your parents would handle them. Make sure they have access to emergency services or a local contact who can respond quickly if something goes wrong.</p>
    
    <p>Having a plan in place can help ease your worries. <a href="https://caresanctum.com/" target="_blank" rel="noopener noreferrer" class="text-secondary hover:underline">Care Sanctum</a> has trained emergency response teams ready to act when your parents need help the most—from responding instantly to SOS alarms for the elderly to coordinating ambulances and ensuring smooth hospital admissions. We're there every step of the way.</p>
    
    <h3>3. Everyday Concierge Support</h3>
    <p>Daily tasks can become challenging for seniors. Consider arranging for local services that can assist your parents with everyday activities, such as grocery shopping, doctor appointments, and running errands.</p>
    
    <p>This support helps them maintain their independence while ensuring they have help when they need it. Additionally, incorporating <a href="https://caresanctum.com/tech" target="_blank" rel="noopener noreferrer" class="text-secondary hover:underline">health devices for seniors</a> can further change their daily living experience, providing them with tools to monitor their health and stay connected.</p>
    
    <h3>4. Proactive Health Care</h3>
    <p>Encourage your parents to have regular health checkups and screenings. Staying on top of their health can help catch potential issues early. You can also share resources or apps that provide health tips and reminders for medication or appointments.</p>
    
    <p>With our AI-powered health analytics, you can help your parents stay proactive about their health and prevent potential issues before they arise. Utilizing a <a href="https://caresanctum.com/services" target="_blank" rel="noopener noreferrer" class="text-secondary hover:underline">health monitoring device</a> can also aid in this effort.</p>
    
    <h3>5. Safe Travel Companionship</h3>
    <p>If your parents need to travel, it can be stressful for both them and you. Consider arranging for a trusted friend or family member to accompany them on trips.</p>
    
    <p>This ensures they feel comfortable and safe during their journey, making travel easier for everyone involved. You might also want to provide them with an SOS alarm for emergencies, giving you peace of mind while they are on the go.</p>
    
    <h4>Final Thoughts</h4>
    <p>Caring for your parents from afar doesn't have to be difficult. By taking proactive steps and utilizing available resources, you can ensure they receive the support they need to stay safe and healthy.</p>
    
    <p>You can have peace of mind knowing that your loved ones are well taken care of, allowing you to focus on your life while still being there for them in meaningful ways.</p>
    
    <p>Are you ready to care for your parents, no matter the distance? Explore the services offered by <a href="https://caresanctum.com/" target="_blank" rel="noopener noreferrer" class="text-secondary hover:underline">Care Sanctum</a> today and take the first step towards ensuring your loved ones receive the best care possible!</p>
  `;

  // Content for the "How We Designed Care Sanctum for NRIs" post
  const careDesignContent = `
    <p>Imagine living far away from your family and worrying about their health every day. For Non-Resident Indians (NRIs), this is a common struggle. Managing healthcare for loved ones in India can be stressful and confusing.</p>
    
    <p>At <a href="https://caresanctum.com/" target="_blank" rel="noopener noreferrer" class="text-secondary hover:underline">Care Sanctum</a>, we understand these challenges and aim to make healthcare and overall well-being for seniors easy. By using advanced technology, including <a href="https://caresanctum.com/services" target="_blank" rel="noopener noreferrer" class="text-secondary hover:underline">health monitoring device</a> and health monitor watch, along with a simple, user-friendly design, we've created a platform that helps NRIs ensure their family members get the best care possible, no matter the distance.</p>
    
    <p>Let's take a look at how we designed Care Sanctum to meet the requirements of NRIs and give them peace of mind.</p>
    
    <h1>Understanding the Challenges Faced by NRIs</h1>
    <p>At Care Sanctum, we started our project with the goal of understanding what it's like for Non-Resident Indians (NRIs) to take care of their loved ones back in India.</p>
    
    <p>We found that NRIs experience many common challenges, such as time zone changes, feelings of guilt for being away, unreliable healthcare, and the need for consistent updates on the health of their family.</p>
    
    <p>To better understand experiences, we held surveys and interviews and spoke to many NRI families, where they shared their main concerns, including reliable healthcare management, clear updates, and meaningful human connections. By understanding key challenges faced by them, we became clear about their mindset and concerns.</p>
    
    <h2>Creating a Trustworthy Online Experience</h2>
    <p>The next step we took was to build trust and reliability, as when you're taking care of someone from far away, trust is very important. That's why we made <a href="https://caresanctum.com/" target="_blank" rel="noopener noreferrer" class="text-secondary hover:underline">Care Sanctum</a> easy to use and clear:</p>
    
    <p><strong>Clear Services:</strong> We explain our services in simple terms, whether it's managing ongoing health issues or providing companionship. There are no hidden details or confusing medical language.</p>
    
    <p><strong>Easy Navigation:</strong> We understand that NRIs often look for information quickly, sometimes late at night. Our website is designed to be user-friendly, with simple menus and quick buttons to book appointments or get updates.</p>
    
    <p><strong>Transparent Communication:</strong> We prioritize open communication by providing regular updates and clear information about your loved ones' care. You can always reach out to us with questions or concerns, and we'll be here to help.</p>
    
    <h2>Bringing Care Sanctum to Life</h2>
    <p>We concluded our design journey with a clear mission: to support Non-Resident Indians (NRIs) in caring for their senior loved ones, no matter the distance. We envisioned a community where seniors feel safe, supported, and connected by utilizing technologies like <a href="https://caresanctum.com/services" target="_blank" rel="noopener noreferrer" class="text-secondary hover:underline">health monitoring device</a> and SOS alarm.</p>
    
    <p>To achieve this, we implemented 24/7 health monitoring, allowing us to track vital signs around the clock using <a href="https://caresanctum.com/services" target="_blank" rel="noopener noreferrer" class="text-secondary hover:underline">health monitoring device</a>. Our dedicated care team is always ready to assist, ensuring that seniors never feel alone. In emergencies, our trained response team is just a button press away, providing quick help when it's needed most, including the use of SOS alarm for elderly.</p>
    
    <p>Recognizing that daily tasks can be tough, we introduced concierge services to assist with errands and appointments, helping seniors maintain their independence while enjoying friendly support. We also utilized smart technology for preemptive care, identifying potential health issues early on to promote healthier living. This includes the use of health monitor watch and other <a href="https://caresanctum.com/tech" target="_blank" rel="noopener noreferrer" class="text-secondary hover:underline">health devices for seniors</a>.</p>
    
    <p>Further, we found out that traveling can be a nightmare for seniors, so we created a travel companion service, pairing them with caring buddies to ensure comfort and safety during outings.</p>
    
    <p>Finally, we built a supportive community where seniors and caregivers can share their experiences and connect, creating a sense of belonging and understanding.</p>
    
    <p>With these thoughtful features, <a href="https://caresanctum.com/" target="_blank" rel="noopener noreferrer" class="text-secondary hover:underline">Care Sanctum</a> is designed to bridge the gap for NRIs and their families using technology, ensuring that every senior feels valued, cared for, and connected.</p>
    
    <p>Together, we aim to create a brighter and healthier future for our loved ones, no matter where they are in the world.</p>
    
    <h4>Wrapping Up</h4>
    <p>Summing up, our platform is a safe space for families who are far apart but still connected by love. We listen to the real experiences of Non-Resident Indians (NRIs) and design our services with honesty and kindness. By setting up strong care practices, including the use of SOS alarm and <a href="https://caresanctum.com/services" target="_blank" rel="noopener noreferrer" class="text-secondary hover:underline">health monitoring device</a>, we provide a service that gives you peace of mind.</p>
    
    <p>If you're an NRI searching for trustworthy healthcare management for your loved ones in India, check out <a href="https://caresanctum.com/" target="_blank" rel="noopener noreferrer" class="text-secondary hover:underline">Care Sanctum</a> today, where care and commitment come together.</p>
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

  // Determine which content to display based on post slug
  let postContent = "";
  if (post.slug === "nri-guide-senior-care") {
    postContent = nriGuideContent;
  } else if (post.slug === "how-we-designed-care-sanctum-for-nris") {
    postContent = careDesignContent;
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
                className="prose max-w-none prose-headings:text-primary prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-h1:font-bold prose-h2:font-semibold prose-h3:font-semibold prose-h4:font-medium prose-a:text-secondary prose-a:no-underline hover:prose-a:underline text-gray-700 mb-8 space-y-6"
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
