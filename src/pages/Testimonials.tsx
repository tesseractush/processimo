
import { Quote } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Processimo has revolutionized my legal practice. The AI agents handle routine document review while I focus on client strategy. My productivity has increased by at least 40%.",
    author: "Priya Sharma",
    title: "Lawyer, Delhi High Court",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    company: "Delhi High Court",
    industry: "Legal"
  },
  {
    quote: "The multi-agent workflows have transformed how I prepare lesson plans and grade assignments. I'm creating educational content and providing feedback faster than ever before.",
    author: "Rajesh Patel",
    title: "Teacher, Delhi Public School",
    avatar: "https://images.unsplash.com/photo-1605664042097-e67a4357d70c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    company: "Delhi Public School",
    industry: "Education"
  },
  {
    quote: "Implementing Processimo's AI agents for content creation has reduced our posting time by 65% while maintaining high quality interactions with our audience.",
    author: "Ananya Desai",
    title: "Social Media Manager, TrendWave",
    avatar: "https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    company: "TrendWave",
    industry: "Marketing"
  },
  {
    quote: "The ease of training AI agents with our proprietary data has given our HR team a competitive edge. Our recruitment workflow now runs 24/7 without constant human intervention.",
    author: "Vikram Malhotra",
    title: "HR Manager, IndiTech Solutions",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    company: "IndiTech Solutions",
    industry: "Human Resources"
  },
  {
    quote: "Our accounting team has seen incredible results using Processimo. We can now process, analyze, and reconcile financial data with unprecedented speed and accuracy.",
    author: "Deepa Krishnan",
    title: "Senior Accountant, FinancePlus",
    avatar: "https://images.unsplash.com/photo-1619085078268-29a4e1c41c2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    company: "FinancePlus",
    industry: "Finance"
  },
  {
    quote: "As a software developer, code quality and speed are crucial. Processimo's AI agents have automated our testing and documentation processes, saving us hundreds of hours per month.",
    author: "Arjun Mehta",
    title: "Full Stack Developer, CodeCraft",
    avatar: "https://images.unsplash.com/photo-1618151313441-bc79b11e5c45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    company: "CodeCraft",
    industry: "Software Development"
  },
  {
    quote: "The collaboration features between AI agents have streamlined our content creation pipeline. We've reduced production time by over 30% without sacrificing quality.",
    author: "Neha Gupta",
    title: "Content Writer, StoryScape",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    company: "StoryScape",
    industry: "Content Creation"
  },
  {
    quote: "Processimo's AI agents have transformed how we support our team members. What used to take days now happens in minutes with perfect accuracy and care.",
    author: "Sanjay Verma",
    title: "HR Team Lead, GlobalTech India",
    avatar: "https://images.unsplash.com/photo-1600878459108-617a253537e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    company: "GlobalTech India",
    industry: "Human Resources"
  },
];

const industryFilters = [
  "All", 
  "Legal", 
  "Education", 
  "Marketing", 
  "Human Resources", 
  "Finance",
  "Software Development",
  "Content Creation"
];

const TestimonialsPage = () => {
  return (
    <Layout>
      <section className="py-24 px-4 md:px-6 bg-secondary/30">
        <div className="container mx-auto">
          <SectionHeading
            badge="Success Stories"
            title="Hear from our customers"
            subtitle="Industry leaders share how Processimo's AI agents have transformed their businesses and accelerated their growth."
          />
          
          <div className="max-w-7xl mx-auto mt-16">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {industryFilters.map((filter, index) => (
                <button
                  key={index}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    filter === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="card-hover border-border/30 bg-card/50 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 pt-6">
                    <div className="mb-4 flex justify-between items-start">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <Quote className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs bg-secondary/80 px-2 py-1 rounded-full">
                        {testimonial.industry}
                      </span>
                    </div>
                    
                    <blockquote className="text-base font-medium mb-6 line-clamp-4 text-balance">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TestimonialsPage;
