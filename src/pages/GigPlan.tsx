import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Clock, Users, Star, Music, Ticket } from "lucide-react";
import Navigation from "@/components/Navigation";

const upcomingGigs = [
  {
    id: 1,
    title: "Taylor Swift - Eras Tour",
    venue: "Madison Square Garden",
    date: "2024-08-15",
    time: "20:00",
    price: "$150 - $500",
    status: "Available",
    image: "/api/placeholder/400/200",
    genre: "Pop",
    attendees: 1250
  },
  {
    id: 2,
    title: "Arctic Monkeys Live",
    venue: "Brooklyn Steel",
    date: "2024-08-22",
    time: "19:30",
    price: "$85 - $200",
    status: "Limited",
    image: "/api/placeholder/400/200",
    genre: "Rock",
    attendees: 890
  },
  {
    id: 3,
    title: "Jazz Night at Blue Note",
    venue: "Blue Note NYC",
    date: "2024-08-28",
    time: "21:00",
    price: "$40 - $120",
    status: "Available",
    image: "/api/placeholder/400/200",
    genre: "Jazz",
    attendees: 320
  }
];

const myPlannedGigs = [
  {
    id: 1,
    title: "Coldplay - Music of the Spheres",
    venue: "Citi Field",
    date: "2024-09-05",
    time: "19:00",
    status: "Confirmed",
    image: "/api/placeholder/400/200",
    ticketType: "VIP",
    section: "A1"
  },
  {
    id: 2,
    title: "Billie Eilish - Happier Than Ever",
    venue: "Barclays Center",
    date: "2024-09-12",
    time: "20:00",
    status: "Pending",
    image: "/api/placeholder/400/200",
    ticketType: "General",
    section: "Floor"
  }
];

const GigPlan = () => {
  const [activeTab, setActiveTab] = useState("discover");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            Gig Planner
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover and plan your next musical adventure
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-secondary">
            <TabsTrigger value="discover" className="data-[state=active]:bg-gradient-primary">
              Discover Events
            </TabsTrigger>
            <TabsTrigger value="my-gigs" className="data-[state=active]:bg-gradient-primary">
              My Planned Gigs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {upcomingGigs.map((gig) => (
                <Card key={gig.id} className="bg-card border-concert-border shadow-card hover:shadow-glow transition-all duration-300 group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={gig.image}
                      alt={gig.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge 
                      className={`absolute top-2 right-2 ${
                        gig.status === "Limited" ? "bg-yellow-500" : "bg-green-500"
                      }`}
                    >
                      {gig.status}
                    </Badge>
                    <Badge className="absolute top-2 left-2 bg-concert-purple">
                      {gig.genre}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg">{gig.title}</CardTitle>
                    <CardDescription className="space-y-2">
                      <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {gig.venue}
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {new Date(gig.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        {gig.time}
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        {gig.attendees} interested
                      </div>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-primary">{gig.price}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm">4.8</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                        <Ticket className="w-4 h-4 mr-2" />
                        Get Tickets
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Star className="w-4 h-4 mr-2" />
                        Add to Wishlist
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-gigs" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {myPlannedGigs.map((gig) => (
                <Card key={gig.id} className="bg-card border-concert-border shadow-card">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={gig.image}
                      alt={gig.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge 
                      className={`absolute top-2 right-2 ${
                        gig.status === "Confirmed" ? "bg-green-500" : "bg-yellow-500"
                      }`}
                    >
                      {gig.status}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg">{gig.title}</CardTitle>
                    <CardDescription className="space-y-2">
                      <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {gig.venue}
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {new Date(gig.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        {gig.time}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="bg-secondary rounded-lg p-4 mb-4">
                      <h4 className="font-semibold mb-2">Ticket Details</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Type:</span>
                          <span>{gig.ticketType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Section:</span>
                          <span>{gig.section}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                        <Music className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" className="w-full">
                        Share with Friends
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GigPlan;