import { useState } from "react";
import { Search, Filter, BookOpen, Video, FileText, BookMarked } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import ResourceCard, { ResourceCardProps } from "@/components/resources/ResourceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/data/blog-posts";

const blogCards: ResourceCardProps[] = blogPosts.map(post => ({
  title: post.title,
  description: post.description,
  imageUrl: post.imageUrl,
  date: post.date,
  readTime: post.readTime,
  link: `/blog/${post.slug}`,
  type: 'blog'
}));

const resources: Record<string, ResourceCardProps[]> = {
  blog: blogCards,
  documentation: [
    {
      title: "Getting Started with Processimo",
      description: "A complete guide to setting up your Processimo account, creating your first agent, and building your first workflow.",
      imageUrl: "/placeholder.svg",
      date: "Updated: May 2023",
      link: "/documentation/getting-started",
      type: "documentation"
    },
    {
      title: "Agent Creation Guide",
      description: "Learn how to create specialized AI agents tailored to specific business tasks and train them with relevant data.",
      imageUrl: "/placeholder.svg",
      date: "Updated: June 2023",
      link: "/documentation/agent-creation",
      type: "documentation"
    },
    {
      title: "Workflow Builder Documentation",
      description: "Comprehensive documentation on using the visual workflow builder to create multi-agent collaboration processes.",
      imageUrl: "/placeholder.svg",
      date: "Updated: July 2023",
      link: "/documentation/workflow-builder",
      type: "documentation"
    },
    {
      title: "Knowledge Base Integration",
      description: "Detailed instructions for connecting and integrating external knowledge sources to train and inform your AI agents.",
      imageUrl: "/placeholder.svg",
      date: "Updated: August 2023",
      link: "/documentation/knowledge-integration",
      type: "documentation"
    },
    {
      title: "API Reference",
      description: "Complete API documentation for developers looking to integrate Processimo capabilities into their applications.",
      imageUrl: "/placeholder.svg",
      date: "Updated: September 2023",
      link: "/documentation/api-reference",
      type: "documentation"
    },
    {
      title: "Security Best Practices",
      description: "Guidelines and recommendations for securing your Processimo implementation and protecting sensitive business data.",
      imageUrl: "/placeholder.svg",
      date: "Updated: October 2023",
      link: "/documentation/security-practices",
      type: "documentation"
    }
  ],
  video: [
    {
      title: "Processimo Platform Overview",
      description: "A comprehensive overview of the Processimo platform, its features, and how it can transform your business operations.",
      imageUrl: "/placeholder.svg",
      readTime: "15:20",
      link: "/videos/platform-overview",
      type: "video"
    },
    {
      title: "Creating Your First AI Agent",
      description: "Step-by-step tutorial on creating and configuring your first specialized AI agent with Processimo.",
      imageUrl: "/placeholder.svg",
      readTime: "12:45",
      link: "/videos/first-agent",
      type: "video"
    },
    {
      title: "Building Multi-Agent Workflows",
      description: "Learn how to design and implement workflows that allow multiple AI agents to collaborate on complex tasks.",
      imageUrl: "/placeholder.svg",
      readTime: "18:30",
      link: "/videos/workflows",
      type: "video"
    },
    {
      title: "Training Agents with Custom Data",
      description: "Detailed walkthrough of uploading and using custom business data to enhance your AI agents' capabilities.",
      imageUrl: "/placeholder.svg",
      readTime: "14:15",
      link: "/videos/custom-training",
      type: "video"
    },
    {
      title: "Integration with External Tools",
      description: "How to connect Processimo with popular business tools and services to create seamless workflows.",
      imageUrl: "/placeholder.svg",
      readTime: "20:10",
      link: "/videos/integrations",
      type: "video"
    },
    {
      title: "Advanced Agent Configurations",
      description: "Expert techniques for fine-tuning AI agent parameters and optimizing performance for specific use cases.",
      imageUrl: "/placeholder.svg",
      readTime: "22:35",
      link: "/videos/advanced-config",
      type: "video"
    }
  ],
  guides: [
    {
      title: "AI Agent Implementation Roadmap",
      description: "A comprehensive guide to planning and executing your organization's AI agent strategy from initial setup to full deployment.",
      imageUrl: "/placeholder.svg",
      date: "January 2023",
      readTime: "15 min read",
      link: "/guides/implementation-roadmap",
      type: "guide"
    },
    {
      title: "Industry-Specific Agent Templates",
      description: "Ready-to-use agent templates and configurations tailored for specific industries including healthcare, finance, legal, and more.",
      imageUrl: "/placeholder.svg",
      date: "February 2023",
      readTime: "12 min read",
      link: "/guides/industry-templates",
      type: "guide"
    },
    {
      title: "Data Preparation Guide",
      description: "Best practices for preparing, formatting, and organizing your business data to get the most out of your AI agents.",
      imageUrl: "/placeholder.svg",
      date: "March 2023",
      readTime: "9 min read",
      link: "/guides/data-preparation",
      type: "guide"
    },
    {
      title: "Workflow Optimization Strategies",
      description: "Advanced techniques for optimizing multi-agent workflows to maximize efficiency, accuracy, and business impact.",
      imageUrl: "/placeholder.svg",
      date: "April 2023",
      readTime: "11 min read",
      link: "/guides/workflow-optimization",
      type: "guide"
    },
    {
      title: "Change Management for AI Implementation",
      description: "Strategies for managing organizational change when introducing AI agents into your business processes.",
      imageUrl: "/placeholder.svg",
      date: "May 2023",
      readTime: "14 min read",
      link: "/guides/change-management",
      type: "guide"
    },
    {
      title: "ROI Measurement Framework",
      description: "A structured approach to measuring and reporting on the return on investment from your Processimo implementation.",
      imageUrl: "/placeholder.svg",
      date: "June 2023",
      readTime: "10 min read",
      link: "/guides/roi-framework",
      type: "guide"
    }
  ]
};

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("blog");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter resources based on search query
  const filteredResources = searchQuery
    ? resources[activeTab].filter(
        resource =>
          resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          resource.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : resources[activeTab];

  return (
    <Layout>
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionHeading
            badge="Resources"
            title="Helpful resources"
            subtitle="Explore our comprehensive collection of guides, tutorials, and insights to get the most out of Processimo."
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            {/* Search bar */}
            <div className="relative mb-10">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-muted-foreground" />
              </div>
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 py-6 h-auto text-base bg-background border border-border rounded-lg"
              />
            </div>
            
            {/* Resource tabs */}
            <Tabs defaultValue="blog" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-between items-center mb-6">
                <TabsList className="grid grid-cols-4 gap-2">
                  <TabsTrigger value="blog" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span className="hidden sm:inline">Blog</span>
                  </TabsTrigger>
                  <TabsTrigger value="documentation" className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span className="hidden sm:inline">Documentation</span>
                  </TabsTrigger>
                  <TabsTrigger value="video" className="flex items-center gap-2">
                    <Video className="w-4 h-4" />
                    <span className="hidden sm:inline">Video Tutorials</span>
                  </TabsTrigger>
                  <TabsTrigger value="guides" className="flex items-center gap-2">
                    <BookMarked className="w-4 h-4" />
                    <span className="hidden sm:inline">Guides</span>
                  </TabsTrigger>
                </TabsList>
                
                <button className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Filter className="w-4 h-4 mr-1" />
                  <span>Filter</span>
                </button>
              </div>
              
              <TabsContent value="blog" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResources.map((resource, index) => (
                    <ResourceCard key={index} {...resource} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="documentation" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResources.map((resource, index) => (
                    <ResourceCard key={index} {...resource} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="video" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResources.map((resource, index) => (
                    <ResourceCard key={index} {...resource} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="guides" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResources.map((resource, index) => (
                    <ResourceCard key={index} {...resource} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Large banner image */}
            <div className="mt-20 rounded-lg overflow-hidden border border-border shadow-md">
              <div className="aspect-[21/9] w-full bg-secondary/50 flex items-center justify-center">
                <img src="/images/3.png" className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large aspect-square h-full w-full object-cover object-top" alt="Mimic how you actually work" data-loaded="true"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResourcesPage;
