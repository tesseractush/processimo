
import { Brain, FileText, Link, Users, Calendar, Network, Share2 } from "lucide-react";
import SectionHeading from "../ui/section-heading";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Brain,
    title: "Specialized AI Agents",
    description: "Build custom AI agents for thousands of tasks with your specific instructions and context.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Network,
    title: "MCP Server Integration",
    description: "Seamlessly connect with your preferred MCP server for enhanced AI capabilities.",
    color: "bg-red-500/10 text-red-500",
  },
  {
    icon: FileText,
    title: "Train with Any Data",
    description: "Feed your AI agents with PDF, Word, PowerPoint, Excel, Audio, Video, and more.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: Link,
    title: "Connect to Your Tools",
    description: "Seamlessly integrate with Google Drive, Notion, Dropbox, ARXIV, Wikipedia, and Google.",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: Users,
    title: "Multi-Agent Collaboration",
    description: "Create workflows where multiple agents work together to solve complex tasks.",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    icon: Calendar,
    title: "Automate Workflows",
    description: "Provide a to-do list for any workflow, and let it finish all tasks on autopilot.",
    color: "bg-pink-500/10 text-pink-500",
  },
  {
    icon: Share2,
    title: "Share & Publish",
    description: "Share your workflows with a public link or embed them directly on your website.",
    color: "bg-indigo-500/10 text-indigo-500",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 md:px-6 overflow-hidden">
      <div className="container mx-auto">
        <SectionHeading
          badge="Features"
          title="Everything you need to build powerful AI agents"
          subtitle="Our platform offers all the tools you need to create, train, and deploy specialized AI agents that accelerate your business processes."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-xl p-6 hover:shadow-soft transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", feature.color)}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
