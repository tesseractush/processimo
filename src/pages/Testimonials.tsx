
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const logos = [
  { name: "Top Law Firm" },
  { name: "Global Corp Counsel" },
  { name: "Public Sector Unit" },
  { name: "Boutique IP Firm" },
  { name: "LegalTech Innovator" },
];

const TestimonialsPage = () => {
  return (
    <Layout>
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <SectionHeading
            badge="Who Uses Processimo?"
            title="Trusted by Forward-Thinking Legal Teams"
            subtitle="From solo practitioners to large enterprises, Processimo is the trusted platform for legal operations management across India, the U.S., and beyond."
          />
          
          <div className="max-w-5xl mx-auto mt-16">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
              Powering the most innovative legal departments and law firms
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 gap-y-8">
              {logos.map((logo, index) => (
                <div key={index} className="text-muted-foreground font-medium text-lg grayscale opacity-75 hover:opacity-100 hover:grayscale-0 transition-all">
                  {logo.name}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 bg-background border border-border rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Modernize Your Legal Stack?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Processimo empowers your team to automate and scale legal operations.
              Start free or schedule a custom demo today.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">
                Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TestimonialsPage;
