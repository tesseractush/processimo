
import { useEffect } from "react";
import { Check, Server, Users, Search, Beaker, Globe, Layers, FileCheck, Target } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const enterpriseFeatures = [
  {
    icon: Layers,
    title: "Tailored AI Agent Solutions",
    description: "We build custom workflows that integrate with your business systems — from CRM, ERP, to legal and compliance platforms. Whether it's contract review, lead scoring, or invoice automation, our PRISM Builder gives you modular and low-code agent orchestration."
  },
  {
    icon: Users,
    title: "Role-Based Workspaces",
    description: "Your teams get dedicated dashboards — whether Admins, Analysts, or Engineers. Each role sees only what they need, secured by fine-grained policies (via OPA), so sensitive data stays protected."
  },
  {
    icon: Search,
    title: "Unified Search & Analytics",
    description: "Search across agents, executions, versions, and logs with blazing speed — thanks to Elasticsearch-backed indexing. Use ClickHouse analytics to track usage, costs, and ROI across departments."
  },
  {
    icon: Beaker,
    title: "Safe & Private Agent Testing",
    description: "Your agents run in isolated Docker sandboxes or ephemeral microVMs, allowing you to safely test, simulate, and approve workflows — without affecting production data."
  },
  {
    icon: FileCheck,
    title: "Workflow Versioning & Governance",
    description: "Track every workflow change, roll back when needed, and audit actions across your org. Built on DoltDB and Cassandra, we offer Git-style transparency for your automation logic."
  },
  {
    icon: Globe,
    title: "Global-Ready & Secure",
    description: "We deploy across regions with Kubernetes failover, TLS encryption, and GDPR-ready anonymization pipelines. Your data is secure — both at rest and in motion."
  }
];

const useCase = [
  {
    title: "Legal & Compliance",
    description: "Automate document reviews, regulatory checks."
  },
  {
    title: "Finance & Ops",
    description: "Reconcile invoices, flag anomalies, handle approvals."
  },
  {
    title: "Sales & Marketing",
    description: "Lead enrichment, drip campaigns, CRM sync."
  },
  {
    title: "Product Teams",
    description: "Deploy AI copilots that assist users in real time."
  }
];

const PricingPage = () => {
  // Add Cal.com script to the document head
  if (typeof window !== 'undefined') {
    // This code will only run on the client side
    useEffect(() => {
      const calScript = document.createElement('script');
      calScript.innerHTML = `
        (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
        Cal("init", "processimo", {origin:"https://cal.com"});
        Cal.ns.processimo("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
      `;
      calScript.type = 'text/javascript';
      document.head.appendChild(calScript);
      
      return () => {
        // Clean up the script when component unmounts
        document.head.removeChild(calScript);
      };
    }, []);
  }

  return (
    <Layout>
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionHeading
            badge="Enterprise"
            title="🚀 Enterprise AI Automation for Scalable Growth"
            subtitle="Unleash the Power of Custom AI Agents & Intelligent Workflows"
          />
          
          <div className="max-w-5xl mx-auto mt-12">
            <div className="mb-14 text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              <p>Enterprises today face a data deluge, siloed systems, and growing operational complexity. 
                Our Enterprise Automation Platform helps you cut through the noise with LLM-powered AI Agents, 
                built for efficiency, accuracy, and scale.</p>
            </div>
            
            <Separator className="my-12" />
            
            {/* Enterprise features */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-center mb-12">🔧 What You Get with Our Enterprise Plan</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {enterpriseFeatures.map((feature, index) => (
                  <Card key={index} className="border border-border bg-card animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                    <CardContent className="p-6">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <Separator className="my-12" />
            
            {/* Ideal for section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-center mb-8">⚙️ Ideal For</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {useCase.map((item, index) => (
                  <div key={index} className="bg-secondary/30 rounded-xl p-6 text-center animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                    <h3 className="font-medium mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <Separator className="my-12" />
            
            {/* Let's Architect Your Enterprise AI Strategy */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 rounded-2xl p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">💼 Let's Architect Your Enterprise AI Strategy</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our team works closely with you to build, customize, and scale your automation stack — using LLM orchestration, 
                  real-time monitoring, and enterprise-grade controls.
                </p>
                
                <div className="mb-8 text-center">
                  <h3 className="text-xl font-medium mb-4">🎯 Ready to start?</h3>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 h-auto text-lg"
                    data-cal-link="tesseractush/processimo"
                    data-cal-namespace="processimo"
                    data-cal-config='{"layout":"month_view"}'
                  >
                    Book a Call
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground mt-6">
                  Have questions before scheduling? <a href="/contact" className="text-primary hover:underline">Contact our team</a> or 
                  check out our <a href="https://github.com/tesseractush/prism" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub repo</a> for technical details.  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;
