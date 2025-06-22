import { ShieldCheck, Lock, DatabaseZap, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "FedRAMP / HIPAA / GDPR-ready",
    description: "Our platform is built to meet the stringent security and compliance requirements of government and healthcare.",
  },
  {
    icon: Users,
    title: "Role-Based Access Control",
    description: "Ensure that users only have access to the information and features they need to perform their jobs.",
  },
  {
    icon: Lock,
    title: "SSO / LDAP Integration",
    description: "Integrate with your existing identity provider for seamless and secure authentication.",
  },
  {
    icon: DatabaseZap,
    title: "Optional On-Premise Deployments",
    description: "For maximum control, deploy Processimo on your own infrastructure, keeping your data within your network.",
  },
];

const SecurityCompliancePage = () => {
  return (
    <Layout>
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionHeading
            badge="Security & Compliance"
            title="Built for the Most Demanding Legal Environments"
            subtitle='“Security is not a feature — it’s our foundation.”'
          />
          
          <div className="max-w-4xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-background border border-border rounded-xl p-6">
                  <feature.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SecurityCompliancePage;
