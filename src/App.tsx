import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FeaturesPage from "./pages/Features";
import TestimonialsPage from "./pages/Testimonials";
import PricingPage from "./pages/Pricing";
import ResourcesPage from "./pages/Resources";
import ContactPage from "./pages/Contact";
import BlogPost from "./pages/BlogPost";
import DocumentationPost from "./pages/DocumentationPost";
import GuidesPost from "./pages/GuidesPost";
import NotFound from "./pages/NotFound";
import CareersPage from "./pages/Careers";
import TermsPage from "./pages/Terms";
import PrivacyPage from "./pages/Privacy";
import AboutPage from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/documentation/:slug" element={<DocumentationPost />} />
          <Route path="/guides/:slug" element={<GuidesPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
