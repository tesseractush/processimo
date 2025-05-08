import { FileText, BookOpen } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";

const ResourcesPage = () => {
  return (
    <Layout>
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionHeading
            badge="Resources"
            title="Helpful resources"
            subtitle="Explore our comprehensive collection of guides, tutorials, and insights to get the most out of Processimo."
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            {/* Resource cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Blogs Card */}
              <div className="bg-background border border-border rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-medium mb-2">Blogs</h3>
                <p className="text-muted-foreground mb-4">
                  Unlock the Future: Insights, Innovation, and breakthrough in AI and Startups.
                </p>
                <a href="https://blog.processimo.com" target="_blank" rel="noopener noreferrer" 
                  className="inline-flex items-center text-primary hover:underline">
                  Read blogs
                </a>
              </div>
              
              {/* Documentation Card */}
              <div className="bg-background border border-border rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-medium mb-2">Documentation</h3>
                <p className="text-muted-foreground mb-4">
                  Explore our Docs: Build, Deploy & Scale with AI with Processimo's low code builder Called: Prism (Platform for Rapid Innovation & Smart modelling).
                </p>
                <a href="https://docs.processimo.com" target="_blank" rel="noopener noreferrer" 
                  className="inline-flex items-center text-primary hover:underline">
                  View documentation
                </a>
              </div>
            </div>
            
            {/* Large banner image */}
            <div className="mt-20 rounded-lg overflow-hidden border border-border shadow-md">
              <div className="aspect-[21/9] w-full bg-secondary/50 flex items-center justify-center">
                <img src="/images/3.png" className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large aspect-square h-full w-full object-cover object-top" alt="Mimic how you actually work" data-loaded="true"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResourcesPage;
