import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import heroImg from "@/assets/project-delivery-hero.jpg";
import { ClipboardCheck, CheckCircle } from "lucide-react";

const ProjectDelivery = () => {
  return (
    <Layout>
      <PageHero
        backgroundImage={heroImg}
        title="Project Management Excellence"
        subtitle="Delivering Complex Infrastructure Projects with Precision"
        tags="Planning • Execution • Quality • Delivery"
      />

      <section className="bg-background section-padding">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <ClipboardCheck className="h-5 w-5 text-secondary" />
            <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase">Project Delivery</p>
          </div>
          <h2 className="section-title text-foreground mb-4">Integrated Project Delivery Framework</h2>
          <p className="text-muted-foreground max-w-3xl mb-10">
            FusionLoop's comprehensive methodology ensures successful delivery of renewable energy, wastewater, and water infrastructure projects from concept through long-term operations.
          </p>

          {/* Nine-Phase Lifecycle */}
          <div className="bg-card rounded-xl p-8 border border-border mb-10">
            <h3 className="font-heading font-bold text-xl text-foreground mb-6">Nine-Phase Project Lifecycle</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: "1", title: "Goal & Feasibility", desc: "Technical, site & financial assessment" },
                { num: "2", title: "Integrated Planning", desc: "Agile/Waterfall with risk analysis" },
                { num: "3", title: "Regulatory Navigation", desc: "ISO, SBTi, environmental compliance" },
                { num: "4", title: "Stakeholder Engagement", desc: "Communities, agencies, partners" },
                { num: "5", title: "Supply Chain", desc: "Global vendor coordination" },
                { num: "6", title: "Construction", desc: "Installation with quality control" },
                { num: "7", title: "Commissioning", desc: "Testing & third-party verification" },
                { num: "8", title: "Performance Monitoring", desc: "Real-time analytics dashboards" },
                { num: "9", title: "O&M Support", desc: "Comprehensive manuals & training programs" },
              ].map((phase) => (
                <div key={phase.num} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <div className="w-8 h-8 flex-shrink-0 rounded-full bg-secondary flex items-center justify-center font-heading font-bold text-secondary-foreground text-xs">
                    {phase.num}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-foreground">{phase.title}</h4>
                    <p className="text-xs text-muted-foreground">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Types */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-teal-dark rounded-xl p-6">
              <h3 className="font-heading font-bold text-secondary mb-3">Renewable Energy</h3>
              <p className="text-cream/70 text-sm">Solar, wind, hybrid systems, energy storage</p>
            </div>
            <div className="bg-teal-dark rounded-xl p-6">
              <h3 className="font-heading font-bold text-secondary mb-3">Wastewater & Circular</h3>
              <p className="text-cream/70 text-sm">Treatment plants, resource recovery, reuse systems</p>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-teal-dark rounded-xl p-8 mb-10">
            <h3 className="font-heading font-bold text-xl text-cream mb-6">Project Management Best Practices</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Detailed Planning", desc: "Comprehensive scope definition with contingency buffers for uncertainties" },
                { title: "Continuous Monitoring", desc: "Real-time progress tracking with Gantt charts, critical path analysis, earned value management" },
                { title: "Risk Management", desc: "Scenario simulation and forecasting to predict bottlenecks before escalation" },
                { title: "Supply Chain Optimization", desc: "Diversified suppliers, inventory management, strong vendor relationships" },
              ].map((bp) => (
                <div key={bp.title} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-semibold text-cream text-sm">{bp.title}</h4>
                    <p className="text-cream/60 text-xs">{bp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Standards */}
          <div className="bg-muted rounded-xl p-6">
            <h4 className="font-heading font-semibold text-foreground mb-4 text-center">Quality & Compliance Standards</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {["UL, IEC, IEEE standards compliance", "NABCEP certified installation teams", "Third-party commissioning verification", "ISO compliance frameworks"].map((std) => (
                <span key={std} className="px-4 py-2 bg-card rounded-full text-sm text-foreground border border-border">{std}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDelivery;
