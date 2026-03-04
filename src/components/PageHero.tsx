import { ReactNode } from "react";

interface PageHeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  tags?: string;
  children?: ReactNode;
}

const PageHero = ({ backgroundImage, title, subtitle, tags }: PageHeroProps) => {
  return (
    <section className="page-hero min-h-[60vh]">
      <img src={backgroundImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="hero-overlay" />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="section-title text-cream mb-4">{title}</h1>
        <p className="text-xl text-cream/80 mb-4">{subtitle}</p>
        {tags && <p className="text-secondary font-heading font-medium text-sm tracking-widest uppercase">{tags}</p>}
      </div>
    </section>
  );
};

export default PageHero;
