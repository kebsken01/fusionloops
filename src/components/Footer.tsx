import { Link } from "react-router-dom";
import { Mail, Phone, Globe } from "lucide-react";
import logo from "@/assets/fusionloop-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-teal-dark text-cream">
      <div className="container mx-auto section-padding">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={logo} alt="FusionLoop" className="h-12 w-12 rounded-lg object-cover" />
            <span className="font-heading font-bold text-2xl">FusionLoop</span>
          </div>
          <h2 className="section-title text-cream mb-4">Partner with Us</h2>
          <p className="text-cream/70 max-w-2xl mx-auto text-lg">
            Ready to transform your sustainability vision into reality? Let's engineer a cleaner, more resilient future together.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <Link to="/renewable-energy" className="text-center p-4 rounded-xl border border-teal-light/20 hover:border-secondary/40 transition-colors">
            <h3 className="font-heading font-semibold text-secondary mb-2">Renewable Energy</h3>
          </Link>
          <Link to="/water-systems" className="text-center p-4 rounded-xl border border-teal-light/20 hover:border-secondary/40 transition-colors">
            <h3 className="font-heading font-semibold text-secondary mb-2">Water Systems</h3>
          </Link>
          <Link to="/drinking-water" className="text-center p-4 rounded-xl border border-teal-light/20 hover:border-secondary/40 transition-colors">
            <h3 className="font-heading font-semibold text-secondary mb-2">Circular Economy</h3>
          </Link>
          <Link to="/project-delivery" className="text-center p-4 rounded-xl border border-teal-light/20 hover:border-secondary/40 transition-colors">
            <h3 className="font-heading font-semibold text-secondary mb-2">Project Delivery</h3>
          </Link>
        </div>

        <div className="border-t border-teal-light/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/60 text-sm">Contact us to discuss your project</p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-cream/70">
              <a href="mailto:info@fusionloop.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="h-4 w-4" /> info@fusionloop.org
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" /> +234 (904) 233-5945
              </a>
              <a href="https://www.fusionloop.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Globe className="h-4 w-4" /> www.fusionloop.org
              </a>
            </div>
          </div>
          <p className="text-center text-cream/40 text-xs mt-8">Engineering Sustainable Futures</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
