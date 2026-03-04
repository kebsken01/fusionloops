import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import heroImg from "@/assets/water-systems-hero.jpg";
import { Recycle, Brain, Droplets, BarChart3, AlertTriangle, Activity } from "lucide-react";

const WaterSystems = () => {
  return (
    <Layout>
      <PageHero
        backgroundImage={heroImg}
        title="Wastewater Management & Circular Economy"
        subtitle="Transforming Waste into Resources Through Intelligent Systems"
        tags="Treatment • Recovery • Intelligence • Optimization"
      />

      {/* Circular Economy - Wastewater Treatment */}
      <section className="bg-background section-padding">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Recycle className="h-5 w-5 text-secondary" />
            <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase">Circular Economy</p>
          </div>
          <h2 className="section-title text-foreground mb-4">Advanced Wastewater Treatment & Resource Recovery</h2>
          <p className="text-muted-foreground max-w-3xl mb-10">
            FusionLoop's wastewater solutions embody circular economy by converting waste streams into valuable resources—water, nutrients, energy, and biosolids—creating economic value while reducing environmental impact.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              { title: "Water Reuse", desc: "Treated effluent for irrigation, industrial processes, and aquifer recharge. Meets EPA/WHO reuse standards with advanced filtration and disinfection." },
              { title: "Nutrient Recovery", desc: "Nitrogen and phosphorus extraction for agricultural fertilizer. Reduces synthetic fertilizer demand by 30-50% while preventing eutrophication." },
              { title: "Biogas Cogeneration", desc: "Anaerobic digestion captures methane for electricity and heat generation. Offsets 20-40% of facility energy costs with renewable biogas." },
              { title: "Biosolids Utilization", desc: "Stabilized organic matter for soil amendment, landscaping, and land restoration. Diverts waste from landfills while improving soil health." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              { value: "70%", label: "Freshwater Reduction" },
              { value: "50%", label: "Fertilizer Offset" },
              { value: "40%", label: "Energy Cost Savings" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-teal-dark rounded-xl">
                <p className="font-heading font-black text-4xl text-secondary">{stat.value}</p>
                <p className="text-cream/70 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted rounded-xl p-6">
            <h4 className="font-heading font-semibold text-foreground mb-4 text-center">Treatment Technologies</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {["Membrane Bioreactors (MBR)", "Reverse Osmosis (RO)", "UV Disinfection", "Advanced Oxidation", "Anaerobic Digestion", "Constructed Wetlands"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-card rounded-full text-sm text-foreground border border-border">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Systems */}
      <section className="bg-teal-dark section-padding">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Brain className="h-5 w-5 text-secondary" />
            <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase">Smart Systems</p>
          </div>
          <h2 className="section-title text-cream mb-4">Intelligent Monitoring & Predictive Systems</h2>
          <p className="text-cream/70 max-w-3xl mb-10">
            Our integrated monitoring platform combines multiple intelligent systems to optimize wastewater operations, reduce costs by 15-25%, and ensure environmental compliance through real-time data analytics and predictive algorithms.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              { num: "1", title: "Operational Cost Reduction", desc: "15-25% savings through optimized chemical dosing, energy management, and maintenance scheduling" },
              { num: "2", title: "Improved Treatment Reliability", desc: "Proactive adjustments prevent process upsets and ensure consistent effluent quality" },
              { num: "3", title: "Environmental Compliance", desc: "Continuous monitoring ensures permit adherence with automated reporting capabilities" },
              { num: "4", title: "Asset Protection", desc: "Early warning systems prevent equipment damage and extend infrastructure lifespan" },
            ].map((b) => (
              <div key={b.num} className="flex gap-4 bg-primary/50 rounded-xl p-6 border border-teal-light/20">
                <div className="w-10 h-10 flex-shrink-0 rounded-full bg-secondary flex items-center justify-center font-heading font-bold text-secondary-foreground">{b.num}</div>
                <div>
                  <h3 className="font-heading font-bold text-cream mb-1">{b.title}</h3>
                  <p className="text-cream/60 text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {[
              { icon: Activity, title: "Resource Intelligence", desc: "Real-time monitoring of water quality, flow rates, energy consumption" },
              { icon: AlertTriangle, title: "Passive Leak Detection", desc: "Acoustic sensors and pressure monitoring identify breaches within minutes" },
              { icon: BarChart3, title: "Dynamic Mass Balance", desc: "Simulates contaminant accumulation and treatment efficiency" },
              { icon: Droplets, title: "Greywater Lifecycle", desc: "AI algorithms optimize greywater reuse scheduling" },
            ].map((f) => (
              <div key={f.title} className="text-center p-6 bg-primary/30 rounded-xl border border-teal-light/10">
                <f.icon className="h-8 w-8 text-secondary mx-auto mb-3" />
                <h4 className="font-heading font-semibold text-cream text-sm mb-2">{f.title}</h4>
                <p className="text-cream/50 text-xs">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/50 rounded-xl p-6 border border-teal-light/20">
            <h4 className="font-heading font-semibold text-cream mb-4">Chemical & Hydraulic Load Prediction</h4>
            <p className="text-cream/70 text-sm mb-4">Machine learning models forecast influent characteristics 24-48 hours ahead, enabling proactive process adjustments.</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: "COD/BOD Loads", value: "±8%" },
                { label: "Flow Rates", value: "±5%" },
                { label: "Nutrient Peaks", value: "±10%" },
              ].map((p) => (
                <div key={p.label} className="p-3 bg-teal-dark/50 rounded-lg">
                  <p className="font-heading font-bold text-secondary text-xl">{p.value}</p>
                  <p className="text-cream/50 text-xs">{p.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WaterSystems;
