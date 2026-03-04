import { Link } from "react-router-dom";
import { Sun, Droplets, Recycle, ClipboardCheck, ArrowRight, Zap, Shield, Leaf, Globe, Users, Wrench } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/fusionloop-logo.jpg";

const services = [
  {
    num: "01",
    title: "Renewable Energy & Net Zero",
    desc: "Solar & hybrid systems, containerized plug-and-play solutions, EMS/PCS integration, and carbon neutrality protocols aligned with ISO and SBTi standards",
    icon: Sun,
    to: "/renewable-energy",
  },
  {
    num: "02",
    title: "Wastewater & Circular Economy",
    desc: "Advanced treatment systems, resource recovery, intelligent monitoring with leak detection, dynamic mass balance modeling, and greywater lifecycle optimization",
    icon: Recycle,
    to: "/water-systems",
  },
  {
    num: "03",
    title: "Drinking Water Management",
    desc: "Off-grid facilities, portable systems, modular treatment plants, and renewable-powered purification delivering WHO-compliant water anywhere",
    icon: Droplets,
    to: "/drinking-water",
  },
  {
    num: "04",
    title: "Project Management Excellence",
    desc: "End-to-end delivery framework from feasibility through commissioning, with proven methodologies for complex renewable and water infrastructure",
    icon: ClipboardCheck,
    to: "/project-delivery",
  },
];

const differences = [
  {
    icon: Zap,
    title: "End-to-End Integration",
    desc: "Comprehensive solutions spanning energy, water, and wastewater eliminate vendor fragmentation. Single-point accountability ensures seamless project delivery and long-term operational excellence.",
  },
  {
    icon: Shield,
    title: "Technical Excellence",
    desc: "Multidisciplinary team of certified professionals in renewable energy, water treatment, and environmental management. Deep expertise across engineering disciplines ensures innovative, reliable solutions.",
  },
  {
    icon: Leaf,
    title: "Innovation Focus",
    desc: "Proprietary technologies including EMS/PCS integration, predictive analytics platforms, and modular system designs. Continuous R&D investment keeps our solutions at the technology frontier.",
  },
  {
    icon: Recycle,
    title: "Circular Economy",
    desc: "Commitment to resource efficiency and waste minimization. Our solutions maximize recovery and reuse while minimizing environmental footprint, supporting clients' sustainability goals.",
  },
  {
    icon: Globe,
    title: "Rural Expertise",
    desc: "Proven track record in remote and resource-constrained environments. Cultural sensitivity and community engagement ensure project acceptance and long-term sustainability.",
  },
  {
    icon: Wrench,
    title: "Lifecycle Support",
    desc: "Comprehensive services from initial concept through long-term operations. Training, maintenance, and performance optimization ensure lasting value and client success.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center px-6">
          <img src={logo} alt="FusionLoop Logo" className="h-24 w-24 rounded-2xl mx-auto mb-6 object-cover shadow-2xl" />
          <h1 className="font-heading font-black text-5xl md:text-7xl text-secondary mb-2 animate-fade-in-up">
            FusionLoop
          </h1>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6" />
          <h2 className="section-title text-cream mb-4" style={{ animationDelay: "0.1s" }}>
            Engineering Sustainable Futures
          </h2>
          <p className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-10">
            Integrated Solutions for Renewable Energy, Water Management & Environmental Excellence
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {services.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="flex items-center gap-2 px-4 py-2 text-sm text-secondary/80 hover:text-secondary transition-colors font-heading font-medium"
              >
                <s.icon className="h-4 w-4" />
                {s.title.split(" & ")[0].split(" ").slice(0, 2).join(" ")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="bg-teal-dark section-padding">
        <div className="container mx-auto">
          <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-2">Overview</p>
          <h2 className="section-title text-cream mb-12">Our Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link key={s.to} to={s.to} className="service-card group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-heading font-bold text-secondary-foreground text-sm">
                    {s.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl text-cream mb-3 group-hover:text-secondary transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-cream/60 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-secondary/0 group-hover:text-secondary transition-all mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why FusionLoop */}
      <section className="bg-background section-padding">
        <div className="container mx-auto">
          <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-2">Our Difference</p>
          <h2 className="section-title text-foreground mb-12">Why FusionLoop?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {differences.map((d, i) => (
              <div key={i} className="bg-card rounded-xl p-8 border border-border hover:border-secondary/40 transition-colors shadow-sm">
                <d.icon className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">{d.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
