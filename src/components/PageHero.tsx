interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 bg-secondary/30">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
