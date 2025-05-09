import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const PrismPage = () => {
  return (
    <Layout>
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionHeading
            badge="Open Source"
            title="PRISM - Platform for Rapid Innovation & Smart Modeling"
            subtitle="Development Strategy for our Open Source Low Code AI Agent Builder"
          />
          
          <div className="max-w-4xl mx-auto mt-10 space-y-8">
            {/* Introduction */}
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                PRISM empowers teams to build, deploy, and scale AI solutions without extensive coding expertise. 
                Explore our development roadmap and contribute to the future of accessible AI.
              </p>
              
              <Button asChild size="lg" className="mb-4">
                <a href="https://github.com/tesseractush/prism" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </Button>
              
              <div className="flex items-center justify-center text-sm text-muted-foreground">
                <span>Help us improve! </span>
                <a href="https://github.com/tesseractush/prism/issues" target="_blank" rel="noopener noreferrer" className="text-primary underline ml-1">Submit issues & feedback</a>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            {/* Notion Content Section */}
            <div className="bg-background border border-border rounded-xl overflow-hidden p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Development Roadmap</h2>
                <Button variant="outline" asChild>
                  <a 
                    href="https://www.notion.so/1ed8e0f076f780709daad82b67536ce4?v=1ed8e0f076f780b098f6000c873fd9f9&pvs=4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View in Notion
                  </a>
                </Button>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Phase 1: Foundation</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Core architecture development</li>
                    <li>Low-code interface design</li>
                    <li>Basic AI agent creation capabilities</li>
                    <li>Component library establishment</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Phase 2: Integration</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Multi-agent workflow capabilities</li>
                    <li>External API connections</li>
                    <li>Data source integration</li>
                    <li>Custom training modules</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Phase 3: Advanced Features</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Workflow templates marketplace</li>
                    <li>Advanced analytics</li>
                    <li>Collaboration features</li>
                    <li>Enterprise-grade security</li>
                  </ul>
                </div>
                
                <div className="mt-8 p-4 bg-secondary/30 rounded-lg">
                  <p className="italic text-muted-foreground">
                    For the complete and detailed development strategy, including timelines, technical specifications, and contribution guidelines, 
                    please view the full document in Notion. We welcome your insights and contributions to make PRISM the leading open-source low-code AI platform.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-12 bg-secondary/30 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Join the PRISM Community</h3>
              <p className="text-muted-foreground mb-6">
                We believe in the power of community-driven development. Share your expertise, report issues, 
                or contribute code to help make PRISM the most powerful low-code AI platform available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="https://github.com/tesseractush/prism" target="_blank" rel="noopener noreferrer">
                    Star on GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/tesseractush/prism/issues" target="_blank" rel="noopener noreferrer">
                    Submit Feedback
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrismPage;
