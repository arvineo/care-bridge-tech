
import { useEffect } from 'react';
import { generateSitemap } from '@/utils/generateSitemap';

const Sitemap = () => {
  useEffect(() => {
    // Generate sitemap XML
    const sitemap = generateSitemap();
    
    // Set the content type to XML
    document.contentType = 'application/xml';
    
    // Replace the document's content with the sitemap XML
    document.open('text/xml');
    document.write(sitemap);
    document.close();
  }, []);
  
  return null; // This component doesn't render any UI
};

export default Sitemap;
