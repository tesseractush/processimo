
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-purple-100/10 to-transparent opacity-30 dark:from-purple-900/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto backdrop-blur-sm glass-morphism rounded-3xl p-8 md:p-12 lg:p-16 animate-fade-in">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Ready to transform your workflow with AI?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Start building specialized AI agents today and experience the 40x productivity boost that Processimo delivers.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/prism"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border bg-background hover:bg-secondary transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
