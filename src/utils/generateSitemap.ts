
import { blogPosts } from '@/data/blogPosts';

export type SitemapUrl = {
  loc: string;
  lastmod?: string;
  priority?: number;
};

export const generateSitemap = (): string => {
  const baseUrl = 'https://caresanctum.com';
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  // Define static routes with their priorities
  const staticRoutes: SitemapUrl[] = [
    { loc: '/', priority: 1.0 },
    { loc: '/services', priority: 0.8 },
    { loc: '/tech', priority: 0.8 },
    { loc: '/plans', priority: 0.8 },
    { loc: '/events', priority: 0.7 },
    { loc: '/blog', priority: 0.8 },
    { loc: '/partnership', priority: 0.7 },
    { loc: '/contact', priority: 0.8 },
  ];
  
  // Add dynamic blog post routes
  const blogPostRoutes: SitemapUrl[] = blogPosts.map(post => ({
    loc: `/blog/${post.slug}`,
    priority: 0.7,
  }));
  
  // Combine all routes
  const allRoutes = [...staticRoutes, ...blogPostRoutes];
  
  // Generate XML
  const urlElements = allRoutes.map(route => `
  <url>
    <loc>${baseUrl}${route.loc}</loc>
    <lastmod>${today}</lastmod>
    <priority>${route.priority}</priority>
  </url>`).join('');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
};
