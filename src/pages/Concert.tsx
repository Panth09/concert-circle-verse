import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, MapPin, Clock, Users, Share2, Heart, Music, Star, Ticket } from "lucide-react";
import Navigation from "@/components/Navigation";

const Concert = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img
            src="/api/placeholder/1200/400"
            alt="Concert"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-end justify-between">
              <div>
                <Badge className="mb-3 bg-concert-purple">Electronic</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Daft Punk Tribute Night
                </h1>
                <p className="text-white/80 text-lg">Experience the legendary electronic beats</p>
              </div>
              <div className="flex space-x-2">
                <Button size="icon" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                  <Heart className="w-5 h-5 text-white" />
                </Button>
                <Button size="icon" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                  <Share2 className="w-5 h-5 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Details */}
            <Card className="bg-card border-concert-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CalendarDays className="w-5 h-5 mr-2 text-primary" />
                  Event Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <CalendarDays className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Date</p>
                      <p className="text-muted-foreground">Saturday, August 24, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Time</p>
                      <p className="text-muted-foreground">8:00 PM - 2:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Venue</p>
                      <p className="text-muted-foreground">Electric Ballroom, NYC</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Attendance</p>
                      <p className="text-muted-foreground">2,450 going</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="bg-card border-concert-border shadow-card">
              <CardHeader>
                <CardTitle>About This Event</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Join us for an unforgettable night celebrating the legendary duo Daft Punk. 
                  Experience their iconic tracks performed by world-class tribute artists with 
                  state-of-the-art production, including the famous pyramid stage setup and 
                  stunning visual effects.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This tribute show features hits from Discovery, Random Access Memories, and more. 
                  Get ready to dance to "Get Lucky," "One More Time," and "Harder Better Faster Stronger" 
                  in an atmosphere that captures the essence of the legendary French electronic music duo.
                </p>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Lineup</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Music className="w-4 h-4 text-primary" />
                      <span>Electric Tribute - Main Act</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Music className="w-4 h-4 text-primary" />
                      <span>DJ Synth - Opening Set</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Music className="w-4 h-4 text-primary" />
                      <span>Neon Nights - Support</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments/Reviews */}
            <Card className="bg-card border-concert-border shadow-card">
              <CardHeader>
                <CardTitle>What People Are Saying</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Avatar>
                        <AvatarImage src={`/api/placeholder/40/40`} />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <p className="font-semibold">User {i}</p>
                          <div className="flex">
                            {[...Array(5)].map((_, star) => (
                              <Star
                                key={star}
                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {i === 1 && "Amazing show! The production quality was incredible. Felt like I was actually at a Daft Punk concert."}
                          {i === 2 && "The visual effects and sound were on point. Definitely going to the next one!"}
                          {i === 3 && "Best tribute show I've ever been to. The energy was electric throughout the night."}
                        </p>
                      </div>
                    </div>
                    {i < 3 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ticket Purchase */}
            <Card className="bg-card border-concert-border shadow-card">
              <CardHeader>
                <CardTitle>Get Your Tickets</CardTitle>
                <CardDescription>Secure your spot for this amazing show</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border border-concert-border rounded-lg">
                    <div>
                      <p className="font-semibold">General Admission</p>
                      <p className="text-sm text-muted-foreground">Standing</p>
                    </div>
                    <span className="font-bold text-primary">$45</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border border-concert-border rounded-lg">
                    <div>
                      <p className="font-semibold">VIP Experience</p>
                      <p className="text-sm text-muted-foreground">Front access + drink</p>
                    </div>
                    <span className="font-bold text-primary">$120</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                  <Ticket className="w-4 h-4 mr-2" />
                  Buy Tickets
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Secure checkout powered by Stripe
                </p>
              </CardContent>
            </Card>

            {/* Organizer Info */}
            <Card className="bg-card border-concert-border shadow-card">
              <CardHeader>
                <CardTitle>Organizer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/api/placeholder/48/48" />
                    <AvatarFallback>EB</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Electric Ballroom Events</p>
                    <p className="text-sm text-muted-foreground">Verified Organizer</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Bringing you the best electronic music experiences in NYC since 2010.
                </p>
                <Button variant="outline" className="w-full">
                  Follow Organizer
                </Button>
              </CardContent>
            </Card>

            {/* Similar Events */}
            <Card className="bg-card border-concert-border shadow-card">
              <CardHeader>
                <CardTitle>Similar Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <img
                      src="/api/placeholder/60/60"
                      alt={`Event ${i}`}
                      className="w-15 h-15 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-sm">
                        {i === 1 ? "Techno Night Live" : "House Music Festival"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {i === 1 ? "Sep 15, 2024" : "Oct 8, 2024"}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concert;