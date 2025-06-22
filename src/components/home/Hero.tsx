
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Users, ShieldCheck, Scale } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const phrases = [
    "Contract Drafting",
    "Legal Research",
    "Due Diligence",
    "Compliance Monitoring",
    "Case Management"
  ];
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        setTypingSpeed(150);
        
        if (displayText === currentPhrase) {
          setTypingSpeed(1500); // Pause before deleting
          setIsDeleting(true);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        setTypingSpeed(80);
        
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, currentPhraseIndex, isDeleting, phrases, typingSpeed]);
  
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] bg-gradient-radial from-purple-100/20 to-transparent opacity-30 dark:from-purple-900/20 blur-3xl"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-gradient-radial from-blue-100/20 to-transparent opacity-30 dark:from-blue-900/20 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Badge */}
          <div className="animate-fade-in">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground">
              <Scale className="w-4 h-4 mr-1" />
              <span>The AI-Powered Legal Operations Platform</span>
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl animate-slide-up text-balance">
            The AI-Native Platform to Automate your
            <span className="relative ml-2"><br />
              <span className="text-gradient min-h-[1.25em] inline-block">{displayText}</span>
              <span className="auto -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/40 to-cyan-500/40 rounded-full"></span>
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-2xl animate-slide-up animation-delay-100 text-balance">
            Processimo is the first AI-native legal platform. Automate routine tasks, manage cases effortlessly, and gain critical insights—all in one secure platform.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-200">
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              to="/product"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border bg-background hover:bg-secondary transition-colors"
            >
              Explore Product
            </Link>
          </div>
          
          {/* Feature highlights */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl pt-10 animate-fade-in animation-delay-300">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-2">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium">Legal AI Agents</h3>
              <p className="text-sm text-muted-foreground">
                Deploy AI agents like ContractBot and ComplianceBot to handle routine legal work.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium">Automated Workflows</h3>
              <p className="text-sm text-muted-foreground">
                Visually design and automate complex legal processes, from client intake to case filing.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-2">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium">Secure & Compliant</h3>
              <p className="text-sm text-muted-foreground">
                Built with enterprise-grade security and ready for on-premise deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
