
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { blogPosts } from "@/data/blog-posts";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((post) => post.slug === slug);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    if (post) {
      document.title = `${post.title} | Processimo`;
    }
  }, [post]);

  if (!post) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
          <Link to="/resources">
            <Button>Return to Resources</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  // Extract headings from content for table of contents
  const headings = post.content.filter(section => section.type === 'heading').map(section => ({
    id: section.content.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
    title: section.content
  }));

  return (
    <Layout>
      <div className="container max-w-7xl py-12">
        <div className="mb-8">
          <Link to="/resources" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left sidebar - Table of Contents on large screens */}
            <div className="hidden lg:block">
              <div className="sticky top-20">
                <div className="bg-card rounded-lg border p-4">
                  <h3 className="font-medium mb-3">Table of Contents</h3>
                  <ScrollArea className="h-[calc(100vh-250px)]">
                    <nav className="flex flex-col space-y-1">
                      {headings.map((heading) => (
                        <a
                          key={heading.id}
                          href={`#${heading.id}`}
                          className="text-sm py-1 hover:text-primary transition-colors"
                        >
                          {heading.title}
                        </a>
                      ))}
                    </nav>
                  </ScrollArea>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-3">
              {/* Mobile table of contents */}
              <div className="lg:hidden mb-6">
                <Accordion type="single" collapsible className="border rounded-lg">
                  <AccordionItem value="toc">
                    <AccordionTrigger className="px-4">Table of Contents</AccordionTrigger>
                    <AccordionContent className="px-4">
                      <nav className="flex flex-col space-y-2">
                        {headings.map((heading) => (
                          <a
                            key={heading.id}
                            href={`#${heading.id}`}
                            className="text-sm py-1 hover:text-primary transition-colors"
                          >
                            {heading.title}
                          </a>
                        ))}
                      </nav>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              {/* Hero image */}
              <div className="mb-8 rounded-lg overflow-hidden border bg-secondary/20">
                {post.coverImage ? (
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-[400px] object-cover"
                  />
                ) : (
                  <div className="w-full h-[400px] flex items-center justify-center bg-secondary/50">
                      <img src="/images/4.png" className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large aspect-square h-full w-full object-cover object-top" alt="Mimic how you actually work" data-loaded="true"></img>
                  </div>
                )}
              </div>
              
              {/* Title and metadata */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  {post.readTime && (
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <span className="mr-2">Share:</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              {/* Blog content */}
              <article className="prose prose-stone dark:prose-invert max-w-none">
                {post.content.map((section, index) => {
                  if (section.type === 'paragraph') {
                    return <p key={index} className="mb-6">{section.content}</p>;
                  } else if (section.type === 'heading') {
                    const id = section.content.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
                    return (
                      <h2 key={index} id={id} className="text-2xl font-bold mt-10 mb-4 scroll-mt-20">
                        {section.content}
                      </h2>
                    );
                  } else if (section.type === 'subheading') {
                    return <h3 key={index} className="text-xl font-semibold mt-8 mb-3">{section.content}</h3>;
                  } else if (section.type === 'list') {
                    return (
                      <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    );
                  } else if (section.type === 'image') {
                    return (
                      <figure key={index} className="my-8">
                        <div className="bg-secondary/20 rounded-lg overflow-hidden">
                          <div className="aspect-[16/9] flex items-center justify-center">
                            <p className="text-muted-foreground">Blog Image: {section.alt}</p>
                          </div>
                        </div>
                        {section.caption && (
                          <figcaption className="text-sm text-center text-muted-foreground mt-2">
                            {section.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  } else if (section.type === 'quote') {
                    return (
                      <blockquote key={index} className="border-l-4 border-primary pl-4 italic my-6">
                        {section.content}
                        {section.author && <cite className="block mt-2 text-sm not-italic">— {section.author}</cite>}
                      </blockquote>
                    );
                  } else if (section.type === 'code') {
                    return (
                      <pre key={index} className="bg-secondary/30 p-4 rounded-lg overflow-x-auto my-6">
                        <code>{section.content}</code>
                      </pre>
                    );
                  }
                  return null;
                })}
              </article>
              
              {/* Author info */}
              <div className="mt-12 bg-secondary/20 rounded-lg p-6 border">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-secondary-foreground font-medium">AP</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Processimo Team</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      AI experts and researchers at Processimo dedicated to making AI accessible for businesses.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Related posts would go here */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts
                    .filter(relatedPost => relatedPost.slug !== slug)
                    .slice(0, 2)
                    .map((relatedPost, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden">
                        <div className="aspect-[16/9] bg-secondary/50 flex items-center justify-center">
                          <p className="text-muted-foreground">Related Post Image</p>
                        </div>
                        <div className="p-4">
                          <h4 className="font-medium mb-2 line-clamp-2">{relatedPost.title}</h4>
                          <Link to={`/blog/${relatedPost.slug}`} className="text-primary text-sm hover:underline">
                            Read Article
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
