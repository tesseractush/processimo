import { ArrowRight, Tag } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    title: "How AI Agents Will Replace 50% of Legal Tasks",
    tags: ["AI", "LegalTech"],
    date: "June 2025",
    link: "#",
  },
  {
    title: "Behind the Mindmap: Visualizing Complex Legal Cases",
    tags: ["Product", "UX"],
    date: "May 2025",
    link: "#",
  },
  {
    title: "The Open-Source Legal OS",
    tags: ["OSS", "Architecture"],
    date: "April 2025",
    link: "#",
  },
];

const BlogPage = () => {
  return (
    <Layout>
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionHeading
            badge="Blog"
            title="Legal AI is the New Legal Assistant"
            subtitle="Insights, research, and product deep dives from the Processimo team."
          />
          
          <div className="max-w-5xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="group overflow-hidden">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                    <h3 className="text-xl font-semibold mb-3 h-20 group-hover:text-primary transition-colors">
                      <a href={post.link}>{post.title}</a>
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full flex items-center">
                          <Tag className="w-3 h-3 mr-1" /> {tag}
                        </span>
                      ))}
                    </div>
                    <a href={post.link} className="text-sm font-semibold text-primary inline-flex items-center">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button size="lg" variant="outline">
                Read All Posts
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
