
import { useState } from "react";
import { Network } from "lucide-react";
import SectionHeading from "../ui/section-heading";
import { cn } from "@/lib/utils";

const integrationCategories = [
  {
    id: "models",
    name: "AI Models",
    items: [
      { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png" },
      { name: "Anthropic Claude", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Claude_AI_logo.svg/520px-Claude_AI_logo.svg.png" },
      { name: "Google Gemini", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/460px-Google_Gemini_logo.svg.png" },
      { name: "Meta Llama", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg/2880px-Meta_Platforms_Inc._logo_%28cropped%29.svg.png" },
      { name: "Mistral AI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Mistral_AI_logo_%282025%E2%80%93%29.svg/360px-Mistral_AI_logo_%282025%E2%80%93%29.svg.png" },
    ]
  },
  {
    id: "tools",
    name: "Tools & Services",
    items: [
      { name: "Google Drive", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1200px-Google_Drive_icon_%282020%29.svg.png" },
      { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png" },
      { name: "Dropbox", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Dropbox_logo_2017.svg/250px-Dropbox_logo_2017.svg.png" },
      { name: "ARXIV", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/ArXiv_logo_2022.svg/250px-ArXiv_logo_2022.svg.png" },
      { name: "Google Search", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" },
      { name: "SuiteCRM", logo: "https://suitecrm.com/wp-content/uploads/2018/02/suitecrm-logo-300x68.png" },
    ]
  },
  {
    id: "files",
    name: "File Types",
    items: [
      { name: "PDF", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png" },
      { name: "Word", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_Word_%282019%E2%80%93present%29.svg.png" },
      { name: "PowerPoint", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png" },
      { name: "Excel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png" },
      { name: "Audio", logo: "https://www.pngwing.com/en/free-png-ixqvm" },
      { name: "Video", logo: "https://cdn-icons-png.flaticon.com/512/1179/1179069.png" },
    ]
  }
];

const Integration = () => {
  const [activeCategory, setActiveCategory] = useState(integrationCategories[0].id);

  const activeItems = integrationCategories.find(cat => cat.id === activeCategory)?.items || [];

  return (
    <section className="py-24 px-4 md:px-6 bg-secondary/50">
      <div className="container mx-auto">
        <SectionHeading
          badge="Integrations"
          title="Connect with your favorite tools"
          subtitle="Processimo seamlessly integrates with the best AI models, popular services, and supports various file formats to enhance your workflow."
        />

        {/* Image placeholder */}
        <div className="max-w-4xl mx-auto mt-8 mb-12 rounded-lg overflow-hidden border border-border shadow-md">
          <div className="aspect-[16/9] w-full bg-secondary/70 flex items-center justify-center">
            <img src="/images/2.png" className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large aspect-square h-full w-full object-cover object-top" alt="Integerations" data-loaded="true"></img>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {integrationCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:bg-background/80"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="bg-background border border-border rounded-2xl p-8 shadow-soft animate-fade-in">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {activeItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="w-16 h-16 flex items-center justify-center mb-4">
                    <img 
                      src={item.logo} 
                      alt={item.name} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-center">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium text-muted-foreground animate-pulse-subtle">
              <Network className="w-4 h-4 mr-2" />
              <span>More integrations coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
