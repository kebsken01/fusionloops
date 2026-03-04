import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import heroImg from "@/assets/renewable-energy-hero.jpg";
import { Sun, Zap, Leaf, Battery, Monitor, Cloud, BarChart3, Shield } from "lucide-react";

const RenewableEnergy = () => {
  return (
    <Layout>
      <PageHero
        backgroundImage={heroImg}
        title="Renewable Energy & Net Zero"
        subtitle="Powering Tomorrow with Clean, Integrated Energy Solutions"
        tags="Solar • Hybrid • Storage • Carbon Strategy"
      />

      {/* Solar & Hybrid */}
      <section className="bg-background section-padding">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Sun className="h-5 w-5 text-secondary" />
            <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase">Renewable Energy</p>
          </div>
          <h2 className="section-title text-foreground mb-8">Solar & Hybrid Energy Systems</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">Solar Photovoltaic Systems</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                High-efficiency PV installations optimized for maximum energy yield through advanced tracking systems, premium module selection, and intelligent inverter configuration. Our systems achieve 20-24% conversion efficiency with 25-year performance warranties.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">Containerized Plug-and-Play</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Pre-wired, pre-assembled energy systems housed in transportable containers, ready for rapid deployment in 24-48 hours.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-secondary">•</span>Solar/battery hybrid with 8-72 hour autonomy</li>
                <li className="flex items-start gap-2"><span className="text-secondary">•</span>10kW to 2MW modular capacity options</li>
                <li className="flex items-start gap-2"><span className="text-secondary">•</span>Minimal civil works required</li>
                <li className="flex items-start gap-2"><span className="text-secondary">•</span>Remote monitoring & control included</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">Solar-Hydro Hybrid</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Innovative hybrid systems combining solar's daytime peak generation with hydroelectric baseload power, achieving 40% higher capacity factors.
              </p>
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="text-center p-3 bg-muted rounded-lg">
                  <p className="font-heading font-bold text-secondary text-lg">60-85%</p>
                  <p className="text-xs text-muted-foreground">Capacity</p>
                </div>
                <div className="text-center p-3 bg-muted rounded-lg">
                  <p className="font-heading font-bold text-secondary text-lg">24/7</p>
                  <p className="text-xs text-muted-foreground">Output</p>
                </div>
                <div className="text-center p-3 bg-muted rounded-lg">
                  <p className="font-heading font-bold text-secondary text-lg">±2%</p>
                  <p className="text-xs text-muted-foreground">Stability</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted rounded-xl p-6 flex flex-wrap gap-6 justify-center">
            <h4 className="font-heading font-semibold text-foreground w-full text-center mb-2">Deployment Applications</h4>
            {["Rural Communities", "Residential Estates", "Disaster Response", "Remote Industry"].map((app) => (
              <span key={app} className="px-4 py-2 bg-card rounded-full text-sm text-foreground border border-border">{app}</span>
            ))}
          </div>
        </div>
      </section>

      {/* EMS / PCS */}
      <section className="bg-teal-dark section-padding">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="h-5 w-5 text-secondary" />
            <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase">Intelligent Energy Systems</p>
          </div>
          <h2 className="section-title text-cream mb-8">Energy Management & Power Conversion</h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-primary/50 rounded-xl p-8 border border-teal-light/20">
              <h3 className="font-heading font-bold text-xl text-cream mb-2">Energy Management System (EMS)</h3>
              <p className="text-sm text-cream/60 italic mb-4">The Intelligent Brain of Energy Storage</p>
              <p className="text-cream/70 text-sm leading-relaxed mb-6">
                EMS manages and optimizes the entire energy workflow, coordinating solar inverters, battery systems, and grid connections with millisecond precision.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BarChart3, label: "Scheduling & Optimization", desc: "AI-driven charge/discharge cycles based on demand forecasting" },
                  { icon: Shield, label: "Safety & Fault Management", desc: "Real-time monitoring with predictive alerts" },
                  { icon: Cloud, label: "Cloud & Remote Control", desc: "Web-based dashboards with mobile app access" },
                  { icon: Monitor, label: "Grid Services", desc: "Frequency regulation, voltage support, peak shaving" },
                ].map((item) => (
                  <div key={item.label} className="p-4 bg-teal-dark/50 rounded-lg">
                    <item.icon className="h-4 w-4 text-secondary mb-2" />
                    <h4 className="text-cream text-sm font-heading font-semibold mb-1">{item.label}</h4>
                    <p className="text-cream/50 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/50 rounded-xl p-8 border border-teal-light/20">
              <h3 className="font-heading font-bold text-xl text-cream mb-2">Power Conversion System (PCS)</h3>
              <p className="text-sm text-cream/60 italic mb-4">Bidirectional Energy Gateway</p>
              <p className="text-cream/70 text-sm leading-relaxed mb-6">
                PCS provides bidirectional AC/DC conversion with 98%+ efficiency, enabling seamless energy flow between batteries, loads, and the grid.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Peak Efficiency", value: "98.5%" },
                  { label: "Switching Speed", value: "<20ms" },
                  { label: "Operation", value: "4Q" },
                  { label: "Power Quality", value: "THD<3%" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-teal-dark/50 rounded-lg">
                    <p className="font-heading font-bold text-secondary text-xl">{stat.value}</p>
                    <p className="text-xs text-cream/50">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h4 className="text-cream text-sm font-heading font-semibold mb-3">Application Scenarios</h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-cream/60">
                  <p>• Utility-Scale Storage (10MW+)</p>
                  <p>• Commercial & Industrial</p>
                  <p>• Residential Systems</p>
                  <p>• Microgrids</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carbon Strategy */}
      <section className="bg-background section-padding">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Leaf className="h-5 w-5 text-secondary" />
            <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase">Carbon Strategy</p>
          </div>
          <h2 className="section-title text-foreground mb-8">Net Zero Protocols & Carbon Strategy</h2>

          <div className="bg-card rounded-xl p-8 border border-border mb-8">
            <h3 className="font-heading font-bold text-lg text-foreground mb-4">Science-Based Net Zero Framework</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              FusionLoop guides organizations through comprehensive decarbonization aligned with ISO Net Zero Standard and SBTi Corporate Net-Zero Standard 2.0. Our approach ensures credible, verifiable pathways to carbon neutrality.
            </p>
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              {[
                { step: "1", label: "Baseline Assessment", desc: "Complete GHG inventory across Scope 1, 2, and 3" },
                { step: "2", label: "Target Setting", desc: "50% reduction by 2030, 90% by 2050" },
                { step: "3", label: "GHG Protocol", desc: "Corporate Standard, Scope 3 compliance" },
                { step: "4", label: "Abatement Strategy", desc: "Renewable energy, efficiency improvements" },
                { step: "5", label: "Neutralization", desc: "Permanent carbon removals for residual emissions" },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-10 h-10 rounded-full bg-secondary mx-auto flex items-center justify-center font-heading font-bold text-secondary-foreground text-sm mb-2">
                    {s.step}
                  </div>
                  <h4 className="font-heading font-semibold text-sm text-foreground mb-1">{s.label}</h4>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { year: "2025", milestone: "ISO Standard Launch" },
              { year: "2030", milestone: "50% Emissions Reduction" },
              { year: "2040", milestone: "75% Reduction Milestone" },
              { year: "2050", milestone: "Net Zero Achievement" },
            ].map((t) => (
              <div key={t.year} className="text-center p-6 bg-card rounded-xl border border-border">
                <p className="font-heading font-black text-3xl text-secondary">{t.year}</p>
                <p className="text-sm text-muted-foreground mt-2">{t.milestone}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Avoidance", desc: "Solar/wind projects eliminate fossil fuel emissions" },
              { title: "Reduction", desc: "Storage systems enable higher renewable penetration" },
              { title: "Removal", desc: "Bioenergy with CCS captures atmospheric CO₂" },
            ].map((r) => (
              <div key={r.title} className="bg-teal-dark rounded-xl p-6 text-center">
                <h4 className="font-heading font-bold text-secondary text-lg mb-2">{r.title}</h4>
                <p className="text-cream/70 text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RenewableEnergy;
