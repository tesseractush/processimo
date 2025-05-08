
import { Building, Users, GraduationCap, Award, Target, BarChart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const AboutPage = () => {
  return (
    <Layout>
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionHeading
            badge="About Us"
            title="Our mission is to democratize AI for businesses"
            subtitle="Processimo is transforming how businesses deploy AI by making specialized agents accessible to organizations of all sizes."
          />
          
          <div className="max-w-6xl mx-auto mt-16 space-y-24">
            {/* Company story */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Born in 2025, Processimo emerged from the collective vision of passionate software engineers and industry pioneers who identified a critical market void: despite the proliferation of sophisticated AI models, businesses lacked accessible pathways to harness this power for their unique operational challenges.
                  </p>
                  <p>
                    Our founding mission was revolutionary yet practical—to democratize AI implementation through an intuitive platform where organizations of any size could craft specialized AI agents precisely aligned with their business objectives, eliminating the traditional barriers of technical expertise and resource constraints.
                  </p>
                  <p>
                    Today, Processimo stands at the forefront of business transformation, enabling companies across diverse sectors to achieve unprecedented productivity gains through seamlessly integrated AI agent workflows. These intelligent systems not only automate complex operational processes but foster a new paradigm of human-AI collaboration that amplifies organizational capabilities beyond conventional limits.
                  </p>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden border border-border shadow-md">
                <div className="aspect-[4/3] bg-secondary/50 flex items-center justify-center">
                  <p className="text-muted-foreground">Company Story Image</p>
                </div>
              </div>
            </div>
            
            {/* Values */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Our Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Target,
                    title: "Customer Focus",
                    description: "We put our customers' success at the center of everything we do, ensuring our platform delivers real-world results and transforms their operations.",
                    color: "bg-blue-500/10 text-blue-500",
                  },
                  {
                    icon: Award,
                    title: "Excellence",
                    description: "We strive for excellence in our technology, our service, and our understanding of how AI can best serve different business needs.",
                    color: "bg-purple-500/10 text-purple-500",
                  },
                  {
                    icon: Users,
                    title: "Collaboration",
                    description: "We believe in the power of collaboration—both within our team and in how our AI agents work together to solve complex problems.",
                    color: "bg-green-500/10 text-green-500",
                  },
                  {
                    icon: GraduationCap,
                    title: "Continuous Learning",
                    description: "We're committed to constant improvement, staying at the forefront of AI advancements and evolving our platform based on feedback.",
                    color: "bg-orange-500/10 text-orange-500",
                  },
                  {
                    icon: Building,
                    title: "Responsibility",
                    description: "We develop and deploy AI technology responsibly, with strong security practices and a focus on privacy and ethical use.",
                    color: "bg-pink-500/10 text-pink-500",
                  },
                  {
                    icon: BarChart,
                    title: "Impact",
                    description: "We measure our success by the tangible impact our platform has on our customers' businesses and their ability to achieve their goals.",
                    color: "bg-indigo-500/10 text-indigo-500",
                  },
                ].map((value, index) => (
                  <div 
                    key={index}
                    className="bg-background border border-border rounded-xl p-6 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", value.color)}>
                      <value.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Team section */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Meet Our Leadership Team</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Founder */}
                <div 
                  className="bg-background border border-border rounded-xl overflow-hidden shadow-sm animate-fade-in"
                  style={{ animationDelay: `100ms` }}
                >
                  <div className="aspect-square w-full bg-secondary/50 flex items-center justify-center">
                    <p className="text-muted-foreground">Founder Photo</p>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-lg">Mrityunjay Srivastava</h4>
                    <p className="text-sm text-muted-foreground mb-2">Founder, Gen AI Engineer</p>
                    <p className="text-sm text-muted-foreground mb-2">Software Engineer turned Gen AI Engineer. Looking forward to make tools that eliminates manual work.</p>
                    <a href="https://www.tesseractush.in" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">www.tesseractush.in</a>
                  </div>
                </div>
                
                {/* Open Positions */}
                {[1, 2, 3].map((position) => (
                  <div 
                    key={position}
                    className="bg-background border border-border rounded-xl overflow-hidden shadow-sm animate-fade-in"
                    style={{ animationDelay: `${(position + 1) * 100}ms` }}
                  >
                    <div className="aspect-square w-full bg-secondary/40 flex items-center justify-center">
                      <p className="text-muted-foreground">Open Position</p>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-lg">Join Our Team</h4>
                      <p className="text-sm text-muted-foreground mb-2">We're Hiring!</p>
                      <p className="text-sm text-muted-foreground">We're currently looking for positions on YCombinator and Coffeespace. Please contact us at <a href="mailto:tesseractush@gmail.com" className="text-primary hover:underline">tesseractush@gmail.com</a></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
