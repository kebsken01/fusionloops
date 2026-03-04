import { Link } from "react-router-dom";
import { Phone } from "lucide-react"; // optional, phone icon
import logo from "@/assets/fusionloop-logo.jpg";

const navLinks = [
  { to: "/renewable-energy", label: "Renewable Energy" },
  { to: "/water-systems", label: "Water Systems" },
  { to: "/drinking-water", label: "Drinking Water" },
  { to: "/project-delivery", label: "Project Delivery" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-teal-dark/95 backdrop-blur-sm border-b border-teal-light/20">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="FusionLoop Logo" className="h-10 w-10 rounded-lg object-cover" />
          <span className="font-heading font-bold text-lg text-cream">FusionLoop</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-cream/80 hover:text-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* WhatsApp + Call buttons (smaller, compact icons) */}
        <div className="hidden md:flex items-center gap-1">
          {/* WhatsApp */}
          <a
            href="https://wa.me/2349042335945?text=Hello%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-1.5 py-0.5 rounded-sm bg-[#25D366] text-white text-[9px] font-semibold hover:bg-green-600 transition-colors"
          >
            {/* WhatsApp SVG small */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path d="M380.9 97.1C339-28.5 239-43.5 148 33 75.5 98-2.1 248.2 2.4 384.3c0 0 5.2 52.3 49.6 89.6l-32.3 90.2 92.8-24.4c36.4 19 75.3 22.8 118.6 7.5 145.1-44.3 198.8-194.1 127.8-314.1zM227.3 380.2c-30.3 0-60-8.2-85.5-23.7l-6.1-3.6-54.1 14.2 14.5-52.9-3.9-6c-21.2-32.7-32.4-70.5-32.4-109.2 0-120 97.6-217.6 217.6-217.6 58.1 0 112.7 22.6 153.8 63.7 41.1 41.1 63.7 95.7 63.7 153.8 0 120-97.6 217.6-217.6 217.6zm121-160.3c-6.7-3.3-39.6-19.5-45.7-21.8-6.1-2.3-10.5-3.3-14.9 3.3-4.3 6.7-16.6 21.8-20.3 26.3-3.7 4.5-7.5 5.1-13.9 1.8-6.4-3.3-26.9-9.9-51.3-31.5-18.9-16.9-31.7-37.8-35.4-44.4-3.7-6.7-.4-10.3 2.9-13.6 3-3-6.7-16.1 0-37.7 6.7-21.6 18.8-36.8 40.7-47.9 21-10.1 29-11.3 39.7-11.5 10.2-.2 19.8 0 28.3 0 8.5 0 13 1.2 18.7 7.5 5.7 6.3 23.1 22.6 23.1 55.1 0 32.5-23.7 63.8-27 68.2-3.3 4.4-45.2 69.3-109.8 95.5-64.6 26.2-88.1 18.5-104-11.4-16-29.9-66.4-101-66.4-151.2s30.4-80.4 81.1-80.4c50.7 0 63.3 21.3 74.6 36.6 11.3 15.3 7.7 28.2 4.5 31.1-3.2 2.9-11.6 3.3-24.1 2-12.4-1.3-69.3-10.1-101.5 63.8-12.6 28.1 10.3 81.1 44.3 112 34 30.9 58.7 38.2 73.6 47.5 14.9 9.3 23.6 8.1 32.1 4.5 8.5-3.7 26.9-11 30.7-21.6 3.8-10.7 3.8-19.8 2.7-21.6-1.2-1.8-6.7-2.9-13.4-5.7z"/>
            </svg>
            WhatsApp
          </a>

          {/* Call */}
          <a
            href="tel:+2349042335945"
            className="flex items-center gap-1 px-1.5 py-0.5 rounded-sm border border-secondary text-secondary text-[9px] font-semibold hover:bg-secondary hover:text-secondary-foreground transition-colors"
          >
            <Phone size={10} />
            Call
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;