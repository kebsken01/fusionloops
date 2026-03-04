import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import heroImg from "@/assets/drinking-water-hero.jpg";
import { Droplets, Sun, MapPin } from "lucide-react";

const DrinkingWater = () => {
  return (
    <Layout>
      <PageHero
        backgroundImage={heroImg}
        title="Portable/Drinking Water Management"
        subtitle="Delivering Clean Water Anywhere, Anytime"
        tags="Off-Grid • Modular • Portable • Renewable-Powered"
      />

      <section className="bg-background section-padding">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Droplets className="h-5 w-5 text-secondary" />
            <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase">Water Solutions</p>
          </div>
          <h2 className="section-title text-foreground mb-4">Modular & Off-Grid Water Solutions</h2>
          <p className="text-muted-foreground max-w-3xl mb-10">
            FusionLoop delivers WHO-compliant drinking water solutions designed for deployment in remote, off-grid, and resource-constrained environments. Our systems combine renewable energy with advanced multi-stage treatment to ensure safe water access anywhere.
          </p>

          {/* Treatment Process */}
          <div className="bg-card rounded-xl p-8 border border-border mb-10">
            <h3 className="font-heading font-bold text-lg text-foreground mb-6">Treatment Process</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: "1", title: "Pre-Filtration", desc: "Sediment & chlorine removal" },
                { step: "2", title: "Reverse Osmosis", desc: "99% dissolved solids removal" },
                { step: "3", title: "UV Disinfection", desc: "Pathogen inactivation" },
                { step: "4", title: "Post-Filtration", desc: "Activated carbon polishing" },
                { step: "5", title: "Storage & Distribution", desc: "Clean water tank & dispensing" },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-10 h-10 rounded-full bg-secondary mx-auto flex items-center justify-center font-heading font-bold text-secondary-foreground text-sm mb-2">{s.step}</div>
                  <h4 className="font-heading font-semibold text-sm text-foreground mb-1">{s.title}</h4>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deployment */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { title: "Off-Grid Facilities", desc: "Permanent installations combining solar power with advanced filtration for communities without grid access." },
              { title: "Portable Systems", desc: "Trailer-mounted units for emergency response, temporary installations, and mobile deployment." },
              { title: "Modular Plants", desc: "Containerized reverse osmosis and UV systems scalable from 1,000 to 100,000 L/day capacity." },
              { title: "Renewable-Powered", desc: "PV-integrated purification achieving 99.9% contaminant removal with complete energy independence." },
            ].map((d) => (
              <div key={d.title} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-foreground mb-2">{d.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>

          {/* Key specs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { value: "1K-100K", label: "Liters/Day Capacity" },
              { value: "99.9%", label: "Contaminant Removal" },
              { value: "24-48h", label: "Deployment Time" },
              { value: "WHO", label: "Quality Compliant" },
            ].map((s) => (
              <div key={s.label} className="text-center p-6 bg-teal-dark rounded-xl">
                <p className="font-heading font-black text-3xl text-secondary">{s.value}</p>
                <p className="text-cream/70 text-sm mt-2">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Deployment Applications */}
          <div className="bg-muted rounded-xl p-6">
            <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-secondary" /> Deployment Applications
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                "Rural Communities: Africa, Asia, remote regions",
                "Disaster Relief: Emergency response zones",
                "Construction Sites: Temporary workforce housing",
                "Remote Industry: Mining, oil & gas, research",
                "Island Nations: Caribbean, Pacific, Indian Ocean",
              ].map((app) => (
                <span key={app} className="px-4 py-2 bg-card rounded-full text-sm text-foreground border border-border">{app}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DrinkingWater;
