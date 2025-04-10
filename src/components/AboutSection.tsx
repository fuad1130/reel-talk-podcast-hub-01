
import { Award, Radio, Star, ThumbsUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const hosts = [
  {
    name: "George",
    role: "Co-Host",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    bio: "The thoughtful film buff with a knack for spotting pop culture connections. George brings warm, inquisitive, and slightly cheeky commentary to every episode.",
  },
  {
    name: "James",
    role: "Co-Host",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    bio: "The energetic cinephile who brings humor and enthusiasm, often leading games and sparking lively debates. James' style is witty, playful, and engaging.",
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-radial from-pulp-red/20 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-10 z-0" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">MEET YOUR HOSTS</h2>
          <p className="text-white/80 font-pixel">
            The dynamic British duo bringing you weekly episodes packed with film reviews, industry news, 
            trivia games, and celebrity interviews.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {hosts.map((host) => (
            <div key={host.name} className="pixel-card hover:border-pulp-yellow">
              <div className="aspect-square overflow-hidden border-2 border-pulp-yellow/30 mb-4">
                <img 
                  src={host.image} 
                  alt={host.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="text-2xl font-bold text-pulp-yellow font-pixel">{host.name}</h3>
                <p className="text-pulp-yellow/70 font-pixel mb-3">{host.role}</p>
                <p className="text-white/80 font-pixel">{host.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <div className="pixel-card text-center">
            <div className="mx-auto bg-pulp-yellow/20 p-3 rounded-md w-14 h-14 flex items-center justify-center mb-4 border border-pulp-yellow/30">
              <Radio className="h-7 w-7 text-pulp-yellow" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-pulp-yellow font-pixel">WEEKLY SHOWS</h3>
            <p className="text-sm text-white/80 font-pixel">New episodes every Wednesday, with special releases for major film events.</p>
          </div>
          
          <div className="pixel-card text-center">
            <div className="mx-auto bg-pulp-yellow/20 p-3 rounded-md w-14 h-14 flex items-center justify-center mb-4 border border-pulp-yellow/30">
              <ThumbsUp className="h-7 w-7 text-pulp-yellow" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-pulp-yellow font-pixel">EXPERT REVIEWS</h3>
            <p className="text-sm text-white/80 font-pixel">In-depth, candid reviews of new releases and classics, balancing critical analysis with personal reactions.</p>
          </div>
          
          <div className="pixel-card text-center">
            <div className="mx-auto bg-pulp-yellow/20 p-3 rounded-md w-14 h-14 flex items-center justify-center mb-4 border border-pulp-yellow/30">
              <Star className="h-7 w-7 text-pulp-yellow" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-pulp-yellow font-pixel">GUEST INTERVIEWS</h3>
            <p className="text-sm text-white/80 font-pixel">Conversations with actors, directors, and filmmakers about their craft, experiences, and favorite films.</p>
          </div>
          
          <div className="pixel-card text-center">
            <div className="mx-auto bg-pulp-yellow/20 p-3 rounded-md w-14 h-14 flex items-center justify-center mb-4 border border-pulp-yellow/30">
              <Award className="h-7 w-7 text-pulp-yellow" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-pulp-yellow font-pixel">INTERACTIVE GAMES</h3>
            <p className="text-sm text-white/80 font-pixel">Fan-favorite games like Cast List Countdown that test film knowledge and quick thinking.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
