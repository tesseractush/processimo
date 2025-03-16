
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
      { name: "Anthropic Claude", logo: "https://framerusercontent.com/images/nXLK5EqKJBT9IJfEpM2j7B0GYI.png" },
      { name: "Google Gemini", logo: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemini_1.max-1000x1000.png" },
      { name: "Meta Llama", logo: "https://about.fb.com/wp-content/uploads/2021/10/Meta-Logo.png?fit=1200%2C613" },
      { name: "Mistral AI", logo: "https://avatars.githubusercontent.com/u/128122921?s=200&v=4" },
    ]
  },
  {
    id: "tools",
    name: "Tools & Services",
    items: [
      { name: "Google Drive", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1200px-Google_Drive_icon_%282020%29.svg.png" },
      { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png" },
      { name: "Dropbox", logo: "https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/app-dropbox.png" },
      { name: "ARXIV", logo: "https://static.arxiv.org/static/base/0.19.4/images/arxiv-logo-web.svg" },
      { name: "Wikipedia", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png" },
      { name: "Google Search", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" },
      { name: "ERPNext", logo: "https://erpnext.com/files/erpnext-logo.png" },
      { name: "SuiteCRM", logo: "https://suitecrm.com/wp-content/uploads/2017/12/SuiteCRM-Logo.svg" },
      { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" },
      { name: "LinkedIn", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" },
      { name: "Asana", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Asana_logo.svg/1200px-Asana_logo.svg.png" },
      { name: "Jira", logo: "https://wac-cdn.atlassian.com/dam/jcr:e348b562-4152-4cdc-8a55-3d297e509cc8/Jira%20Software-blue.svg" },
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
      { name: "Audio", logo: "https://cdn-icons-png.flaticon.com/512/6295/6295417.png" },
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
            <img src="./public/images/2.png" className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large aspect-square h-full w-full object-cover object-top" alt="Integerations" data-loaded="true"></img>
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
