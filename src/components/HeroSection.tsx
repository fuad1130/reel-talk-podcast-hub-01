
import { Headphones, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center film-grain">
      <div 
        className="absolute inset-0 bg-gradient-radial from-pulp-pink/20 via-transparent to-transparent z-0"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535016120720-40c646be5580')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-pulp-pink/20 text-pulp-pink font-medium py-1 px-3 rounded-full text-sm flex items-center animate-pulse-slow">
              <Headphones className="h-4 w-4 mr-1" />
              New Episode Every Wednesday
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl" style={{ fontFamily: "'Alfa Slab One', serif" }}>
            <span className="text-gradient">Pulp Kitchen:</span> A Film & TV Podcast
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mb-8">
            Join hosts George and James for deep dives on cinema classics, hot takes on new releases, and fascinating conversations with fellow film lovers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="text-lg gap-2 bg-pulp-pink hover:bg-pulp-pink/90">
              Latest Episode <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-pulp-yellow text-pulp-yellow hover:bg-pulp-yellow/10">
              Subscribe to Podcast
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-16 text-center max-w-3xl">
            <div className="space-y-1">
              <p className="text-3xl md:text-5xl font-bold text-pulp-pink" style={{ fontFamily: "'Alfa Slab One', serif" }}>150+</p>
              <p className="text-sm text-foreground/60">Episodes</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-5xl font-bold text-pulp-pink" style={{ fontFamily: "'Alfa Slab One', serif" }}>320k</p>
              <p className="text-sm text-foreground/60">Monthly Listeners</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-5xl font-bold text-pulp-yellow" style={{ fontFamily: "'Alfa Slab One', serif" }}>100+</p>
              <p className="text-sm text-foreground/60">Films Reviewed</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-5xl font-bold text-pulp-yellow" style={{ fontFamily: "'Alfa Slab One', serif" }}>12</p>
              <p className="text-sm text-foreground/60">Award Nominations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
