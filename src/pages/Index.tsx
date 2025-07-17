
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Music, Calendar, Package, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import concertHero1 from "@/assets/concert-hero-1.jpg";
import concertHero2 from "@/assets/concert-hero-2.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content with margin for desktop sidebar */}
      <div className="md:ml-64 pb-20 md:pb-0">
        {/* Header */}
        <div className="bg-gradient-to-br from-concert-purple/20 via-transparent to-concert-pink/20 p-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Concert Circle
            </h1>
            <div className="relative">
              <img
                src={concertHero1}
                alt="Concert crowd"
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-xl font-bold">Live Music Experience</h2>
                <p className="text-sm opacity-90">Join the community</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Action Cards */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* Find Buddies */}
            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-concert-border">
              <CardContent className="p-4">
                <div className="text-center space-y-2">
                  <Users className="w-8 h-8 text-white mx-auto" />
                  <h3 className="text-white font-semibold">Find Buddies</h3>
                  <p className="text-white/70 text-sm">Meet Concert Fans Like You</p>
                  <Button size="sm" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30">
                    Find Friends
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Events */}
            <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-concert-border">
              <CardContent className="p-4">
                <div className="text-center space-y-2">
                  <Calendar className="w-8 h-8 text-white mx-auto" />
                  <h3 className="text-white font-semibold">Events</h3>
                  <p className="text-white/70 text-sm">Find Events Near You</p>
                  <Button size="sm" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30" asChild>
                    <Link to="/events">View Events</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Packages */}
            <Card className="bg-gradient-to-br from-green-900/50 to-blue-900/50 border-concert-border">
              <CardContent className="p-4">
                <div className="text-center space-y-2">
                  <Package className="w-8 h-8 text-white mx-auto" />
                  <h3 className="text-white font-semibold">Packages</h3>
                  <p className="text-white/70 text-sm">VIP Packages</p>
                  <Button size="sm" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30">
                    Explore Packages
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Merchandise */}
            <Card className="bg-gradient-to-br from-orange-900/50 to-red-900/50 border-concert-border">
              <CardContent className="p-4">
                <div className="text-center space-y-2">
                  <ShoppingBag className="w-8 h-8 text-white mx-auto" />
                  <h3 className="text-white font-semibold">Merchandise</h3>
                  <p className="text-white/70 text-sm">Our Merchandise</p>
                  <Button size="sm" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30" asChild>
                    <Link to="/store">Shop Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Live Concerts Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              LIVE CONCERTS
            </h2>
            
            <Card className="bg-card border-concert-border overflow-hidden">
              <div className="relative">
                <img
                  src={concertHero2}
                  alt="Live concert"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-500 text-white">LIVE</Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="space-y-2">
                    <h3 className="text-white text-xl font-bold">Taylor Swift</h3>
                    <p className="text-white/80">Madison Square Garden</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Aug 15</span>
                      <Button size="sm" className="bg-white text-black hover:bg-white/90">
                        <Play className="w-3 h-3 mr-1" />
                        Watch
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
