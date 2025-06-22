
import { CheckCircle, UploadCloud, Bot, Workflow, BarChart, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const timelineSteps = [
  {
    title: "Onboard & Integrate",
    description: "Connect your existing systems—DMS, CMS, email, and calendars—in minutes.",
    icon: CheckCircle,
  },
  {
    title: "Ingest Your Data",
    description: "Securely upload documents, case files, and contracts into your private, encrypted knowledge base.",
    icon: UploadCloud,
  },
  {
    title: "Deploy Legal AI Agents",
    description: "Activate pre-built agents like ContractBot and ComplianceBot to start automating tasks immediately.",
    icon: Bot,
  },
  {
    title: "Automate Workflows",
    description: "Use our no-code builder to design custom legal workflows for intake, approvals, and e-discovery.",
    icon: Workflow,
  },
  {
    title: "Gain Insights",
    description: "Track case progress, monitor risk, and analyze team performance from a unified dashboard.",
    icon: BarChart,
  },
  {
    title: "Scale Securely",
    description: "Expand usage across your firm with enterprise-grade security, role-based access, and on-premise options.",
    icon: Shield,
  },
];

const Timeline = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground inline-block mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Your Path to an AI-Powered Legal Practice
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined, six-step journey to automate your legal operations and unlock new efficiencies.
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
