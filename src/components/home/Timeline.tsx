
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const timelineSteps = [
  {
    title: "Initialization",
    description: "Set up your Processimo account and configure your workspace to match your business needs.",
    icon: CheckCircle,
  },
  {
    title: "Agent Creation",
    description: "Design and build specialized AI agents tailored to your specific business tasks and workflows.",
    icon: CheckCircle,
  },
  {
    title: "Knowledge Training",
    description: "Train your agents with relevant business data, documents, and domain-specific information.",
    icon: CheckCircle,
  },
  {
    title: "Workflow Design",
    description: "Connect multiple agents into automated workflows that handle complex, multi-step processes.",
    icon: CheckCircle,
  },
  {
    title: "Feedback Loop",
    description: "Analyze agent performance and refine them based on real-world interactions and outcomes.",
    icon: CheckCircle,
  },
  {
    title: "Deployment & Scaling",
    description: "Fully deploy your agents across your organization and scale as your business grows.",
    icon: CheckCircle,
  },
];

const Timeline = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground inline-block mb-4">
            Implementation Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Your journey to AI-powered productivity
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow these six steps to transform your business operations with Processimo's AI agents.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border rounded-full"></div>
          
          <div className="space-y-16">
            {timelineSteps.map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  "relative flex items-center",
                  index % 2 === 0 ? "justify-start" : "justify-end"
                )}
              >
                {/* Timeline dots with icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Content */}
                <div 
                  className={cn(
                    "w-5/12 bg-card border border-border rounded-lg p-6 shadow-sm",
                    index % 2 === 0 ? "pr-12" : "pl-12",
                    "animate-fade-in"
                  )}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-muted-foreground">Step {index + 1}</span>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image placeholder */}
        <div className="mt-20 max-w-3xl mx-auto rounded-lg overflow-hidden border border-border shadow-md">
          <div className="aspect-[16/9] w-full bg-secondary/50 flex items-center justify-center">
            <img src="/images/1.png?raw=true" className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large aspect-square h-full w-full object-cover object-top" alt="Mimic how you actually work" data-loaded="true"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
