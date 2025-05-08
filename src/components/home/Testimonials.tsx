
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "../ui/section-heading";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const testimonials = [
  {
    quote: "Processimo has revolutionized my legal practice. The AI agents handle routine document review while I focus on client strategy. My productivity has increased by at least 40%.",
    author: "Priya Sharma",
    title: "Lawyer, Delhi High Court",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "The multi-agent workflows have transformed how I prepare lesson plans and grade assignments. I'm creating educational content and providing feedback faster than ever before.",
    author: "Rajesh Patel",
    title: "Teacher, Delhi Public School",
    avatar: "https://images.unsplash.com/photo-1605664042097-e67a4357d70c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Implementing Processimo's AI agents for content creation has reduced our posting time by 65% while maintaining high quality interactions with our audience.",
    author: "Ananya Desai",
    title: "Social Media Manager, TrendWave",
    avatar: "https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "The ease of training AI agents with our proprietary data has given our HR team a competitive edge. Our recruitment workflow now runs 24/7 without constant human intervention.",
    author: "Vikram Malhotra",
    title: "HR Manager, IndiTech Solutions",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Our accounting team has seen incredible results using Processimo. We can now process, analyze, and reconcile financial data with unprecedented speed and accuracy.",
    author: "Deepa Krishnan",
    title: "Senior Accountant, FinancePlus",
    avatar: "https://images.unsplash.com/photo-1619085078268-29a4e1c41c2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "As a software developer, code quality and speed are crucial. Processimo's AI agents have automated our testing and documentation processes, saving us hundreds of hours per month.",
    author: "Arjun Mehta",
    title: "Full Stack Developer, CodeCraft",
    avatar: "https://images.unsplash.com/photo-1618151313441-bc79b11e5c45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
];

const Testimonials = () => {
  // For mobile slider
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 px-4 md:px-6 bg-secondary/30">
      <div className="container mx-auto">
        <SectionHeading
          badge="Testimonials"
          title="Trusted by innovative professionals"
          subtitle="Hear from industry leaders who have transformed their businesses with Processimo."
        />

        {/* Desktop Cards Grid - Hidden on mobile */}
        <div className="mt-12 hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover border-border/30 bg-card/50">
              <CardContent className="p-6 pt-6">
                <div className="mb-4 flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <blockquote className="text-base font-medium mb-6 min-h-[100px] text-balance">
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
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel - Only visible on mobile */}
        <div className="mt-12 md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-border/30 bg-card/50">
                    <CardContent className="p-6 pt-6">
                      <div className="mb-4 flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                          <Quote className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <blockquote className="text-base font-medium mb-6 text-balance">
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
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
