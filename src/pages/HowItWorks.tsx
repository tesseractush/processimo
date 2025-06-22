import { UploadCloud, Bot, Workflow, BarChart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";

const steps = [
  {
    icon: UploadCloud,
    title: "Ingest Your Data",
    description: "Upload docs, import from your CRM, or sync your email and calendar.",
  },
  {
    icon: Bot,
    title: "AI Agent Orchestration",
    description: "Agents like ContractBot & ComplianceBot get to work — analyzing, drafting, and reviewing.",
  },
  {
    icon: Workflow,
    title: "Automate Legal Flows",
    description: "Design repeatable workflows visually — or use our pre-built templates for common legal processes.",
  },
  {
    icon: BarChart,
    title: "Get Insights",
    description: "Track case performance, billing, and risk exposure in real-time with our analytics dashboard.",
  },
];

const HowItWorksPage = () => {
  return (
    <Layout>
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionHeading
            badge="How It Works"
            title="Built for the AI-First Legal Stack"
            subtitle="A simple, four-step process to automate your legal operations."
          />
          
          <div className="max-w-4xl mx-auto mt-16 relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-px bg-border" aria-hidden="true"></div>
            
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-8 even:flex-row-reverse">
                  <div className="w-1/2">
                    <div className="bg-background border border-border rounded-xl p-6 relative shadow-sm">
                      <div className="absolute -top-5 -left-5 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                        {index + 1}
                      </div>
                      <step.icon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorksPage;
