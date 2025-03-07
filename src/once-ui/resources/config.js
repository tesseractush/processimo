const baseURL = "www.processimo.com";

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light
  neutral: "gray", // sand | gray | slate
  brand: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

// default metadata
const meta = {
  title: "Processimo - The future of work",
  description:
    "Businesses leveraging AI agents with RAG technology gain a competitive edge by making data- driven decisions, reducing operational inefficiencies, and delivering high-quality customer experiences.",
};

// default open graph data
const og = {
  title: "Processimo",
  description: "Processimo: AI That Works. So You Can Lead.",
  type: "website",
  image: "/images/processimo-icon.png"
};

// default schema data
const schema = {
  logo: "",
  type: "Organization",
  name: "Processimo",
  description: "AI That Works. So You Can Lead.",
  
};

// social links
const social = {
  twitter: "https://www.twitter.com/processsimo",
  linkedin: "https://www.linkedin.com/company/processimo/",
  
};

export { baseURL, style, meta, og, schema, social };
