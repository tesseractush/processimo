import { Building, Briefcase, Landmark } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const solutions = [
  {
    icon: Landmark,
    title: "Law Firms",
    features: [
      "Streamline client intake to court filings",
      "Automate billing, time tracking, and compliance",
      "Use AI to scale legal assistants",
    ],
  },
  {
    icon: Briefcase,
    title: "In-House Counsel",
    features: [
      "Track internal legal matters across departments",
      "Generate and review contracts on-demand",
      "Stay audit-ready and compliant",
    ],
  },
  {
    icon: Building,
    title: "Enterprises & Government",
    features: [
      "On-premise legal automation",
      "Custom AI agents for FOIA, audits, RTIs, and policy reviews",
      "Role-based access and full data control",
    ],
  },
];

const SolutionsPage = () => {
  return (
    <Layout>
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionHeading
            badge="Solutions"
            title="Tailored for Every Legal Professional"
            subtitle="Processimo is designed to meet the unique needs of different legal environments."
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <Card key={index}>
                <CardHeader className="flex-row items-center gap-4">
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center">
                    <solution.icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionsPage;
