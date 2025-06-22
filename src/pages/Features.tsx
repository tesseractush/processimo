
import { Briefcase, FolderKanban, Users, Bot, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const coreFeatures = [
  {
    icon: Briefcase,
    title: "Case Management",
    description: "A unified dashboard to track matters, deadlines, and client communications. Never miss a critical date again.",
  },
  {
    icon: FolderKanban,
    title: "Document Management",
    description: "Securely store, search, and collaborate on legal documents with version control and AI-powered summarization.",
  },
  {
    icon: Users,
    title: "Client Management",
    description: "Manage client intake, relationships, and billing from a single, integrated interface.",
  },
  {
    icon: Bot,
    title: "Agentic Workflow Automation",
    description: "Deploy autonomous AI agents to handle routine tasks like e-discovery, contract review, and compliance checks.",
  },
];

const ProductPage = () => {
  return (
    <Layout>
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionHeading
            badge="Product"
            title="The AI-Native Platform for Legal Operations"
            subtitle="One platform to manage your cases, documents, clients, and workflows."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="bg-background border border-border rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-6 bg-secondary/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Practice?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            See how Processimo can help you automate your legal operations, reduce costs, and deliver better outcomes for your clients.
          </p>
          <Button asChild size="lg">
            <Link to="/pricing">Book a Demo <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;
