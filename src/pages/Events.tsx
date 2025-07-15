import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MessageCircle, Share2, Calendar, MapPin, Users, Send, MoreHorizontal } from "lucide-react";
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

const Events = () => {
  const [newPost, setNewPost] = useState("");
  const [activeTab, setActiveTab] = useState("feed");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            Events & Community
          </h1>
          <p className="text-muted-foreground text-lg">
            Connect with fellow music lovers and discover amazing events
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-secondary mb-6">
                <TabsTrigger value="feed" className="data-[state=active]:bg-gradient-primary">
                  Community Feed
                </TabsTrigger>
                <TabsTrigger value="events" className="data-[state=active]:bg-gradient-primary">
                  Events
                </TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="space-y-6">
                {/* Create Post */}
                <Card className="bg-card border-concert-border shadow-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-3">
                      <Avatar>
                        <AvatarImage src="/api/placeholder/40/40" />
                        <AvatarFallback>You</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-3">
                        <Input
                          placeholder="Share your musical thoughts..."
                          value={newPost}
                          onChange={(e) => setNewPost(e.target.value)}
                          className="bg-secondary border-concert-border"
                        />
                        <div className="flex justify-end">
                          <Button className="bg-gradient-primary hover:opacity-90">
                            <Send className="w-4 h-4 mr-2" />
                            Post
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Feed Posts */}
                {feedPosts.map((post) => (
                  <Card key={post.id} className="bg-card border-concert-border shadow-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={post.user.avatar} />
                            <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center space-x-2">
                              <p className="font-semibold">{post.user.name}</p>
                              {post.user.verified && (
                                <Badge className="bg-blue-500 text-xs">Verified</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{post.time}</p>
                          </div>
                        </div>
                        <Button size="icon" variant="ghost">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-foreground">{post.content}</p>
                      
                      {post.image && (
                        <img
                          src={post.image}
                          alt="Post"
                          className="w-full rounded-lg object-cover max-h-80"
                        />
                      )}
                      
                      {post.event && (
                        <Card className="bg-secondary border-concert-border">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <Calendar className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <p className="font-semibold">{post.event.name}</p>
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                  <span className="flex items-center">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {post.event.date}
                                  </span>
                                  <span className="flex items-center">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    {post.event.venue}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                      
                      <div className="flex items-center justify-between pt-2 border-t border-concert-border">
                        <div className="flex items-center space-x-6">
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
                            <Heart className="w-4 h-4 mr-2" />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-500">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            {post.comments}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="events" className="space-y-6">
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
                              View Event
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