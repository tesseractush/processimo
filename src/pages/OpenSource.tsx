import { Github, Book, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const openSourceInfo = [
  {
    icon: Github,
    title: "GitHub Repository",
    description: "Fork the repository, submit pull requests, and help us improve Processimo.",
    link: "https://github.com/tesseractush/processimo-app",
    linkText: "View on GitHub",
  },
  {
    icon: Book,
    title: "Plugin SDK",
    description: "Extend Processimo with custom workflows and integrations using our SDK.",
    link: "#",
    linkText: "Read the Docs",
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Join the discussion, ask questions, and share your projects with the community.",
    link: "#",
    linkText: "Join the Forum",
  },
];

const OpenSourcePage = () => {
  return (
    <Layout>
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <SectionHeading
            badge="Open Source"
            title="Build with Processimo. Fork. Contribute. Extend."
            subtitle="We believe the future of law is open, composable, and AI-powered. That's why we're committed to building in the open."
          />
          
          <div className="max-w-4xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {openSourceInfo.map((item, index) => (
                <div key={index} className="bg-background border border-border rounded-xl p-6">
                  <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Button asChild variant="outline">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.linkText}</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <p className="text-lg font-medium">Licensed under MIT</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OpenSourcePage;
