import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, MapPin, Calendar, Users, Star, Music, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import concertHero1 from "@/assets/concert-hero-1.jpg";
import concertHero2 from "@/assets/concert-hero-2.jpg";

const featuredConcerts = [
  {
    id: 1,
    title: "LIVE CONCERTS",
    subtitle: "Experience the energy",
    artist: "Taylor Swift",
    venue: "Madison Square Garden",
    date: "Aug 15",
    price: "$150+",
    image: concertHero1,
    isLive: true,
    views: "2.4k"
  },
  {
    id: 2,
    title: "UNDERGROUND VIBES",
    subtitle: "Discover new sounds",
    artist: "Arctic Monkeys",
    venue: "Brooklyn Steel",
    date: "Aug 22",
    price: "$85+",
    image: concertHero2,
    isLive: false,
    views: "1.8k"
  }
];

const quickActions = [
  { icon: Calendar, label: "Plan Gigs", path: "/gig-plan" },
  { icon: Music, label: "Concerts", path: "/concerts" },
  { icon: Users, label: "Events", path: "/events" },
  { icon: Headphones, label: "Store", path: "/store" }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-concert-purple/20 via-transparent to-concert-pink/20" />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="space-y-4">
              <Badge className="bg-gradient-primary text-lg px-6 py-2">
                Welcome to Concert Circle
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Connect.
                </span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Discover.
                </span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Experience.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join the ultimate community for music lovers. Discover concerts, plan gigs, 
                connect with fellow fans, and never miss your favorite artists again.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8" asChild>
                <Link to="/events">Explore Events</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-concert-border text-lg px-8" asChild>
                <Link to="/gig-plan">Plan Your Gigs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card key={action.path} className="bg-card border-concert-border shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-semibold">{action.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Featured Concerts */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Live Concerts</h2>
          <p className="text-muted-foreground">Discover amazing live performances happening now</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredConcerts.map((concert) => (
            <Card key={concert.id} className="bg-card border-concert-border shadow-card hover:shadow-glow transition-all duration-300 group overflow-hidden">
              <div className="relative">
                <img
                  src={concert.image}
                  alt={concert.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Live Indicator */}
                {concert.isLive && (
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <Badge className="bg-red-500 text-white">LIVE</Badge>
                  </div>
                )}
                
                {/* Views */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-black/60 text-white">
                    <Users className="w-3 h-3 mr-1" />
                    {concert.views}
                  </Badge>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="space-y-2">
                    <Badge className="bg-concert-purple text-white">
                      {concert.title}
                    </Badge>
                    <h3 className="text-2xl font-bold text-white">{concert.artist}</h3>
                    <p className="text-white/80">{concert.subtitle}</p>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="space-y-1">
                        <div className="flex items-center text-white/80 text-sm">
                          <MapPin className="w-3 h-3 mr-1" />
                          {concert.venue}
                        </div>
                        <div className="flex items-center text-white/80 text-sm">
                          <Calendar className="w-3 h-3 mr-1" />
                          {concert.date}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-bold text-lg">{concert.price}</p>
                        <Button size="sm" className="bg-white text-black hover:bg-white/90 mt-1">
                          <Play className="w-3 h-3 mr-1" />
                          {concert.isLive ? "Watch" : "View"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Community Stats */}
      <div className="bg-gradient-card py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-muted-foreground text-lg">
              Thousands of music lovers are already connecting and discovering
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Active Members" },
              { number: "2.5K+", label: "Events Monthly" },
              { number: "150+", label: "Cities" },
              { number: "4.8★", label: "User Rating" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-concert-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Music className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Concert Circle
            </span>
          </div>
          <p className="text-muted-foreground">
            © 2024 Concert Circle. Connecting music lovers worldwide.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
