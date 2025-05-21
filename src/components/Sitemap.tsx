
import { useEffect } from 'react';
import { generateSitemap } from '@/utils/generateSitemap';

const Sitemap = () => {
  useEffect(() => {
    // Generate sitemap XML
    const sitemap = generateSitemap();
    
    // Replace the document's content with the sitemap XML
    document.open('text/xml');
    document.write('<?xml version="1.0" encoding="UTF-8"?>');
    document.write(sitemap);
    document.close();
    
    // Set content type through meta tag since document.contentType is read-only
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Type';
    meta.content = 'application/xml; charset=utf-8';
    document.head.appendChild(meta);
  }, []);
  
  return null; // This component doesn't render any UI
};

export default Sitemap;
