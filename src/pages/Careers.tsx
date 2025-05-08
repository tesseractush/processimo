
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CareersPage = () => {
  return (
    <Layout>
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionHeading
            badge="Careers"
            title="Join our team"
            subtitle="Be part of the revolution in AI agent technology and help shape the future of business productivity."
          />
          
          <div className="max-w-4xl mx-auto mt-16 space-y-12">
            {/* Main content */}
            <div className="text-center">
              <div className="rounded-xl overflow-hidden border border-border shadow-md mb-8">
                <div className="aspect-[16/9] bg-secondary/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Team Culture Image</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">Strategic Growth Opportunities</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                We are actively seeking visionary business strategists and innovative marketing professionals to join our founding team. Through our networks at Y Combinator, LinkedIn, and CoffeeSpace, we're connecting with exceptional talent who are passionate about revolutionizing AI implementation across industries.
              </p>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                If you possess entrepreneurial drive and wish to shape the future of business AI at a ground-floor opportunity, we welcome your connection. Your expertise could be instrumental in our journey toward transforming how businesses harness artificial intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="mailto:tesseractush@gmail.com" target="_blank" rel="noopener noreferrer">
                    Connect via Email
                  </a>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <a href="https://www.linkedin.com/in/tesseractush" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Why join us */}
            <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-center">Why join Processimo?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4 py-1">
                    <h4 className="font-medium">Impactful Work</h4>
                    <p className="text-sm text-muted-foreground">
                      Build technology that transforms how businesses operate and helps them achieve dramatic productivity improvements.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4 py-1">
                    <h4 className="font-medium">Cutting-Edge Technology</h4>
                    <p className="text-sm text-muted-foreground">
                      Work at the forefront of AI innovation, implementing and developing the latest advances in machine learning.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4 py-1">
                    <h4 className="font-medium">Growth Opportunities</h4>
                    <p className="text-sm text-muted-foreground">
                      Join a rapidly growing company with abundant opportunities for personal and professional development.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4 py-1">
                    <h4 className="font-medium">Collaborative Culture</h4>
                    <p className="text-sm text-muted-foreground">
                      Be part of a supportive team that values diverse perspectives and works together to solve challenging problems.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4 py-1">
                    <h4 className="font-medium">Customer Focus</h4>
                    <p className="text-sm text-muted-foreground">
                      Make a direct impact on users across industries and see the real-world results of your work.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4 py-1">
                    <h4 className="font-medium">Flexible Work Environment</h4>
                    <p className="text-sm text-muted-foreground">
                      Enjoy a flexible and balanced approach to work that prioritizes outcomes and supports your wellbeing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareersPage;
