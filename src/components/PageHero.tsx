interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

const PageHero = ({ title, subtitle, image }: PageHeroProps) => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={image} alt="" className="h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
    </div>
    <div className="relative container mx-auto px-4 py-20 md:py-28 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-up">
        <span className="gold-text">{title}</span>
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

export default PageHero;
