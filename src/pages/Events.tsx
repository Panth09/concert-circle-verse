import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MessageCircle, Share2, Calendar, MapPin, Users, Send, MoreHorizontal, PartyPopper, Music, Plus, Clock, Search } from "lucide-react";
import Navigation from "@/components/Navigation";

const feedPosts = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      avatar: "/api/placeholder/40/40",
      verified: true
    },
    content: "Just got my tickets for the Taylor Swift concert! Who else is going? 🎵✨",
    image: "/api/placeholder/400/300",
    likes: 324,
    comments: 45,
    time: "2 hours ago",
    event: {
      name: "Taylor Swift - Eras Tour",
      venue: "Madison Square Garden",
      date: "Aug 15"
    }
  },
  {
    id: 2,
    user: {
      name: "Music Lovers NYC",
      avatar: "/api/placeholder/40/40",
      verified: true
    },
    content: "Incredible lineup announced for Summer Music Festival 2024! 🔥 Which artist are you most excited to see?",
    image: "/api/placeholder/400/300",
    likes: 892,
    comments: 156,
    time: "4 hours ago",
    event: {
      name: "Summer Music Festival",
      venue: "Central Park",
      date: "Jul 20-22"
    }
  },
  {
    id: 3,
    user: {
      name: "Alex Thompson",
      avatar: "/api/placeholder/40/40",
      verified: false
    },
    content: "Last night's concert was absolutely mind-blowing! The energy, the lights, the music - everything was perfect 🎶",
    image: "/api/placeholder/400/300",
    likes: 156,
    comments: 23,
    time: "8 hours ago"
  }
];

const upcomingEvents = [
  {
    id: 1,
    name: "Electronic Beats Festival",
    date: "Aug 20",
    venue: "Brooklyn Warehouse",
    attendees: 1200,
    image: "/api/placeholder/300/200"
  },
  {
    id: 2,
    name: "Jazz Under the Stars",
    date: "Aug 25",
    venue: "Rooftop Garden",
    attendees: 450,
    image: "/api/placeholder/300/200"
  },
  {
    id: 3,
    name: "Rock Revival Night",
    date: "Sep 1",
    venue: "Madison Square Garden",
    attendees: 2800,
    image: "/api/placeholder/300/200"
  }
];

const myPlans = [
  {
    id: 1,
    title: "My Epic Rave Night",
    date: "Dec 25, 2024",
    time: "10:00 PM",
    location: "Warehouse District",
    status: "Planning",
    friends: 12,
    image: "/src/assets/concert-hero-1.jpg"
  },
  {
    id: 2,
    title: "Festival Squad Weekend",
    date: "Jan 5, 2025",
    time: "8:00 PM",
    location: "Central Park",
    status: "Confirmed",
    friends: 8,
    image: "/src/assets/concert-hero-2.jpg"
  }
];

const Events = () => {
  const [newPost, setNewPost] = useState("");
  const [activeTab, setActiveTab] = useState("plan-rave");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 mt-16 md:mt-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            Events
          </h1>
          <p className="text-muted-foreground text-lg">
            Plan your raves and discover amazing concerts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-secondary mb-6">
                <TabsTrigger value="plan-rave" className="data-[state=active]:bg-gradient-primary flex items-center gap-2">
                  <PartyPopper className="w-4 h-4" />
                  Plan My Rave
                </TabsTrigger>
                <TabsTrigger value="concerts" className="data-[state=active]:bg-gradient-primary flex items-center gap-2">
                  <Music className="w-4 h-4" />
                  Concerts
                </TabsTrigger>
              </TabsList>

              <TabsContent value="plan-rave" className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">My Rave Plans</h2>
                  <Button className="bg-gradient-primary text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Plan
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {myPlans.map((plan) => (
                    <Card key={plan.id} className="bg-card border-concert-border hover:shadow-lg transition-shadow">
                      <div className="aspect-video relative">
                        <img 
                          src={plan.image} 
                          alt={plan.title}
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                        <Badge className={`absolute top-2 right-2 ${
                          plan.status === 'Confirmed' ? 'bg-green-500' : 'bg-yellow-500'
                        } text-white`}>
                          {plan.status}
                        </Badge>
                      </div>
                      
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg font-bold text-foreground">
                          {plan.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {plan.friends} friends interested
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <div className="space-y-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{plan.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{plan.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{plan.location}</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1 bg-gradient-primary text-white hover:opacity-90">
                            View Plan
                          </Button>
                          <Button size="sm" variant="outline" className="border-concert-border">
                            <Users className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-card border-concert-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PartyPopper className="w-5 h-5" />
                      Quick Plan Creator
                    </CardTitle>
                    <CardDescription>
                      Start planning your next rave experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Event Name</label>
                        <Input placeholder="Epic Rave Night" className="bg-secondary border-concert-border" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Date</label>
                        <Input type="date" className="bg-secondary border-concert-border" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Location</label>
                      <Input placeholder="Where will it be?" className="bg-secondary border-concert-border" />
                    </div>
                    <Button className="w-full bg-gradient-primary text-white">
                      Create Rave Plan
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="concerts" className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search concerts..." 
                      className="pl-10 bg-secondary border-concert-border"
                    />
                  </div>
                  <Button variant="outline" className="border-concert-border">
                    Filter
                  </Button>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="bg-card border-concert-border shadow-card hover:shadow-glow transition-all duration-300">
                      <div className="flex flex-col md:flex-row">
                        <img
                          src={event.image}
                          alt={event.name}
                          className="w-full md:w-48 h-48 object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                        <div className="flex-1 p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                              <div className="space-y-1 text-muted-foreground">
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                                  {event.date}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                                  {event.venue}
                                </div>
                                <div className="flex items-center">
                                  <Users className="w-4 h-4 mr-2 text-primary" />
                                  {event.attendees} attending
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button className="bg-gradient-primary hover:opacity-90">
                              Get Tickets
                            </Button>
                            <Button variant="outline">
                              <Heart className="w-4 h-4 mr-2" />
                              Interested
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Events */}
            <Card className="bg-card border-concert-border shadow-card">
              <CardHeader>
                <CardTitle>Trending Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingEvents.slice(0, 3).map((event, index) => (
                  <div key={event.id} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{event.name}</p>
                      <p className="text-xs text-muted-foreground">{event.attendees} attending</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Chat */}
            <Card className="bg-card border-concert-border shadow-card">
              <CardHeader>
                <CardTitle>Quick Chat</CardTitle>
                <CardDescription>Connect with music lovers</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-primary hover:opacity-90">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Join Community Chat
                </Button>
              </CardContent>
            </Card>

            {/* Suggested Friends */}
            <Card className="bg-card border-concert-border shadow-card">
              <CardHeader>
                <CardTitle>Suggested Friends</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={`/api/placeholder/32/32`} />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold">User {i}</p>
                        <p className="text-xs text-muted-foreground">Mutual friends: {i * 2}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Follow
                    </Button>
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

export default Events;
