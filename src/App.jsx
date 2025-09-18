import React, { useMemo } from "react";
import { Mail, Linkedin, Download, Globe, Megaphone, Users, Rocket, LineChart, BookOpen, Award, Calendar, ExternalLink } from "lucide-react";

// --- DATA: customize this block with your info ---
const DATA = {
  name: "Silvia Chaves",
  title: "VP Marketing | Consumer Growth & Brand Leader",
  tagline: "Driving consumer growth, loyalty & brand engagement at scale",
  location: "New York, NY (Open to Remote)",
  email: "youremail@example.com",
  linkedin: "https://www.linkedin.com/in/your-handle/",
  website: "https://yourdomain.com",
  resumeUrl: "#", // replace with a real PDF link
  headshot: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop", // placeholder
  highlights: [
    { icon: <LineChart className="w-5 h-5"/>, text: "15% YoY portfolio growth via integrated campaigns (Synchrony)" },
    { icon: <Rocket className="w-5 h-5"/>, text: "20+ national launches; 20% lift in acquisition (Verizon)" },
    { icon: <Users className="w-5 h-5"/>, text: "Built & led teams 10–30+ across creative, PR, social, content" },
    { icon: <Megaphone className="w-5 h-5"/>, text: "Brand governance: voice, design system, and editorial ops" },
  ],
  skills: [
    "Corporate Brand Strategy", "PR/Comms & Thought Leadership", "Creative/Design Leadership",
    "Content Strategy & Copy", "Social & Community", "Integrated Campaigns (Paid/OOH/Digital/Lifecycle)",
    "Budget & KPI/ROI Frameworks", "Team Leadership & Org Design", "Partnership Marketing",
    "Engagement Platforms: Braze, Salesforce, HubSpot", "Analytics: GA, Adobe, Tableau"
  ],
  experience: [
    {
      company: "Synchrony Financial",
      role: "Vice President, Marketing Strategy & Execution",
      period: "Dec 2022 – Present • New York, NY",
      bullets: [
        "Set corporate/portfolio marketing strategy; delivered 15% YoY program growth.",
        "Owned annual budget and KPI framework; monthly ROI readouts to executives.",
        "Directed multi-disciplinary team (creative, content, social, agencies).",
        "Launched test-and-learn programs (A/B, audience/creative); +10% sales lift.",
        "Evolved visual identity & messaging; ensured cross-channel consistency.",
      ],
    },
    {
      company: "AG Parts Education",
      role: "Marketing Strategy & Communications Consultant",
      period: "Jul 2019 – Jun 2022 • Remote",
      bullets: [
        "Led rebrand (logo, site, tone, design system); elevated perception and consistency.",
        "+15% web traffic and +10% revenue via integrated campaigns (ABM, digital, events).",
        "Built editorial operations and persona-based messaging library.",
        "Managed & mentored 10-person team; optimized agency model and SLAs.",
      ],
    },
    {
      company: "Verizon Communications",
      role: "Corporate Marketing & Strategy Leader",
      period: "Jun 2005 – Jun 2019 • Basking Ridge, NJ",
      bullets: [
        "Directed 20+ national launches across TV/OTT, OOH, digital, social, retail, sponsorships.",
        "Contributed to a 20% increase in customer acquisition through full-funnel programs.",
        "Partnered with PR/Comms on media narratives and executive platforms.",
        "Built and managed a 30-person team; instituted design governance and QA.",
      ],
    },
    {
      company: "Comcast (Regional)",
      role: "Regional Marketing Leader",
      period: "Earlier Experience • Various Locations",
      bullets: [
        "Owned $20M budget; supported 1M+ subscribers; 24+ DM campaigns (~15M pieces/yr).",
        "Tripled Hispanic subscriber growth in 8 months; extended lifecycle by 15 months.",
      ],
    },
  ],
  caseStudies: [
    {
      title: "Synchrony Portfolio Acceleration",
      image: "https://images.unsplash.com/photo-1518085250887-2f903c200fee?q=80&w=1400&auto=format&fit=crop",
      timeframe: "2023–2024",
      summary: "Unified corporate narrative and integrated media/lifecycle programs for co-brand portfolio.",
      impact: [
        "15% YoY portfolio growth",
        "+10% sales lift via A/B and lifecycle",
        "New KPI/ROI dashboard and monthly exec readouts",
      ],
      link: "#",
    },
    {
      title: "Verizon Launch Machine",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop",
      timeframe: "2016–2019",
      summary: "National, multi-channel launch playbooks tied to brand pillars & partner activations.",
      impact: [
        "20+ national launches",
        "20% lift in acquisition",
        "Scaled design & brand governance across BUs",
      ],
      link: "#",
    },
    {
      title: "Comcast Multicultural Growth",
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1400&auto=format&fit=crop",
      timeframe: "Earlier Career",
      summary: "Hispanic-focused campaigns, DM at scale, retention programs.",
      impact: [
        "Hispanic subs tripled in 8 months",
        "$20M budget stewardship",
        "+15 months average lifecycle",
      ],
      link: "#",
    },
  ],
  featuredPosts: [
    { title: "How we drove 15% growth through consumer-first marketing", link: "#" },
    { title: "Why loyalty is the new growth strategy in consumer marketing", link: "#" },
  ],
};

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-14 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm leading-6 mr-2 mb-2">
      {children}
    </span>
  );
}

function CaseCard({ item }) {
  return (
    <article className="group rounded-2xl overflow-hidden border shadow-sm bg-white/70 backdrop-blur hover:shadow-md transition">
      <div className="aspect-[16/9] overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4"/>{item.timeframe}</span>
          <a href={item.link} className="inline-flex items-center gap-1 hover:underline">
            View <ExternalLink className="w-4 h-4"/>
          </a>
        </div>
        <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
        <p className="mt-2 text-sm text-gray-700">{item.summary}</p>
        <ul className="mt-3 space-y-1 text-sm">
          {item.impact.map((pt, i) => (
            <li key={i} className="flex items-start gap-2"><Award className="w-4 h-4 mt-0.5 flex-none"/>{pt}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ExperienceItem({ role, company, period, bullets }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-black" />
      <h4 className="font-semibold">{role} · <span className="text-gray-700">{company}</span></h4>
      <div className="text-sm text-gray-500">{period}</div>
      <ul className="mt-2 space-y-1 text-sm">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2"><BookOpen className="w-4 h-4 mt-0.5 flex-none"/>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  const nav = useMemo(() => ([
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "campaigns", label: "Campaigns" },
    { id: "skills", label: "Skills" },
    { id: "featured", label: "Featured" },
    { id: "contact", label: "Contact" },
  ]), []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">{DATA.name}</a>
          <div className="hidden md:flex gap-6 text-sm">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="hover:underline underline-offset-4">{n.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href={`mailto:${DATA.email}`} aria-label="Email" className="p-2 rounded-full hover:bg-black/5"><Mail className="w-5 h-5"/></a>
            <a href={DATA.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-black/5"><Linkedin className="w-5 h-5"/></a>
            <a href={DATA.resumeUrl} className="hidden md:inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm hover:bg-black/5">
              <Download className="w-4 h-4"/> Resume
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="pt-12 md:pt-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm mb-4">
              <Globe className="w-4 h-4"/> {DATA.location}
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              {DATA.title}
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl">
              {DATA.tagline}. I build integrated, full-funnel programs across paid, OOH, digital, lifecycle, partnerships, and brand activations—backed by clear KPIs and ROI reporting.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={DATA.resumeUrl} className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-5 py-3 hover:bg-slate-800"><Download className="w-4 h-4"/>Download Resume</a>
              <a href={`mailto:${DATA.email}`} className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 hover:bg-black/5"><Mail className="w-4 h-4"/>Contact</a>
              <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 hover:bg-black/5"><Linkedin className="w-4 h-4"/>LinkedIn</a>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {DATA.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border p-3">
                  <div className="mt-0.5 text-slate-700">{h.icon}</div>
                  <p className="text-sm">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border shadow-md">
              <img src={DATA.headshot} alt={`${DATA.name} headshot`} className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      <Section id="about" title="About">
        <div className="max-w-3xl text-gray-800 space-y-4">
          <p>
            I’m a consumer and corporate marketing executive who translates complex product and partnership strategies into simple, compelling stories—and the operating cadence to deliver them. I’ve led multi-disciplinary teams
            across PR/comms, creative/design, content/copy, and social, and I partner closely with Product Marketing, Growth/Demand Gen, Sales, and the C‑suite.
          </p>
          <p>
            Recent focus areas include: brand governance (voice, design systems), integrated GTM playbooks, editorial and PR engines, and measurement frameworks that tie investment to awareness, engagement, pipeline, and revenue.
          </p>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="relative before:content-[''] before:absolute before:left-1.5 before:top-0 before:bottom-0 before:w-px before:bg-black/20 space-y-8">
          {DATA.experience.map((e, idx) => (
            <ExperienceItem key={idx} {...e} />
          ))}
        </div>
      </Section>

      <Section id="campaigns" title="Campaigns & Case Studies">
        <div className="grid md:grid-cols-3 gap-6">
          {DATA.caseStudies.map((c, i) => (
            <CaseCard key={i} item={c} />
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="flex flex-wrap">
          {DATA.skills.map((s, i) => (
            <Chip key={i}>{s}</Chip>
          ))}
        </div>
      </Section>

      <Section id="featured" title="Featured">
        <ul className="space-y-3">
          {DATA.featuredPosts.map((p, i) => (
            <li key={i} className="flex items-center justify-between rounded-xl border p-4">
              <div className="flex items-center gap-3">
                <Megaphone className="w-5 h-5"/>
                <span className="font-medium">{p.title}</span>
              </div>
              <a href={p.link} className="inline-flex items-center gap-1 text-sm hover:underline">Open <ExternalLink className="w-4 h-4"/></a>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-3 gap-6">
          <a href={`mailto:${DATA.email}`} className="rounded-2xl border p-6 hover:shadow-sm transition">
            <div className="flex items-center gap-3 font-medium"><Mail className="w-5 h-5"/> Email</div>
            <div className="text-sm text-gray-600 mt-1">{DATA.email}</div>
          </a>
          <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="rounded-2xl border p-6 hover:shadow-sm transition">
            <div className="flex items-center gap-3 font-medium"><Linkedin className="w-5 h-5"/> LinkedIn</div>
            <div className="text-sm text-gray-600 mt-1">Connect with me</div>
          </a>
          <a href={DATA.website} target="_blank" rel="noreferrer" className="rounded-2xl border p-6 hover:shadow-sm transition">
            <div className="flex items-center gap-3 font-medium"><Globe className="w-5 h-5"/> Website</div>
            <div className="text-sm text-gray-600 mt-1">{DATA.website.replace('https://','')}</div>
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {DATA.name}. All rights reserved.
      </footer>
    </div>
  );
}
