import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FeaturesPage from "./pages/Features";
import TestimonialsPage from "./pages/Testimonials";
import PricingPage from "./pages/Pricing";

import ContactPage from "./pages/Contact";
import SolutionsPage from "./pages/Solutions";
import HowItWorksPage from "./pages/HowItWorks";
import OpenSourcePage from "./pages/OpenSource";
import SecurityCompliancePage from "./pages/SecurityCompliance";
import BlogPost from "./pages/BlogPost";
import DocumentationPost from "./pages/DocumentationPost";
import GuidesPost from "./pages/GuidesPost";
import NotFound from "./pages/NotFound";
import CareersPage from "./pages/Careers";
import TermsPage from "./pages/Terms";
import PrivacyPage from "./pages/Privacy";
import AboutPage from "./pages/About";
import PrismPage from "./pages/Prism";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product" element={<FeaturesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/open-source" element={<OpenSourcePage />} />
          <Route path="/security-compliance" element={<SecurityCompliancePage />} />
          
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/prism" element={<PrismPage />} />
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
