
import { Check, PlusCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Open Source",
    forWhom: "Solo lawyers",
    price: "Free",
    features: [
      "1 AI agent",
      "Limited workflows",
      "Community support",
    ],
    cta: "Get Started",
    isPopular: false,
  },
  {
    name: "Pro",
    forWhom: "Small firms",
    price: "₹3,999/mo",
    features: [
      "All AI agents",
      "Unlimited workflows",
      "Priority integrations",
      "Dedicated support",
    ],
    cta: "Start Pro Trial",
    isPopular: true,
  },
  {
    name: "Enterprise",
    forWhom: "Law firms & in-house teams",
    price: "Custom",
    features: [
      "Unlimited users",
      "On-premise deployment",
      "Custom AI agents",
      "Service Level Agreement (SLA)",
    ],
    cta: "Contact Sales",
    isPopular: false,
  },
];

const addOns = [
  { name: "Due DiligenceBot", description: "Automated risk scanning and entity verification." },
  { name: "Legal Clause Library", description: "Access a pre-vetted library of contract clauses." },
  { name: "LLM Usage Credits", description: "Additional credits for high-volume AI tasks." },
];

const PricingPage = () => {
  return (
    <Layout>
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionHeading
            badge="Pricing"
            title="Clear pricing for every legal team"
            subtitle="From solo lawyers to large enterprises, find the plan that fits your needs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={cn("flex flex-col", plan.isPopular && "border-primary ring-2 ring-primary shadow-lg")}>
                <CardHeader>
                  {plan.isPopular && (
                    <div className="text-sm font-bold text-primary text-center mb-2">Most Popular</div>
                  )}
                  <CardTitle className="text-center text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-center">{plan.forWhom}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.isPopular ? "default" : "outline"}>{plan.cta}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-24">
            <h3 className="text-2xl font-semibold text-center mb-8">Available Add-ons</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-background border border-border rounded-xl p-6 text-center">
                  <PlusCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-lg mb-2">{addon.name}</h4>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Button variant="ghost" className="mr-4">Compare Plans</Button>
            <Button>Download Full Pricing Guide</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;
