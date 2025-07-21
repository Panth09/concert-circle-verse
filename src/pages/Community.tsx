import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { MessageCircle, Heart, Share2, Search, Plus, Users, Music, Send } from "lucide-react";
import Navigation from "@/components/Navigation";

const Community = () => {
  const [activeTab, setActiveTab] = useState("communities");
  const [showChat, setShowChat] = useState(false);

  const communities = [
    {
      id: 1,
      name: "Electronic Music Lovers",
      members: 12500,
      description: "Connect with fellow electronic music enthusiasts",
      image: "/src/assets/concert-hero-1.jpg",
      tags: ["EDM", "Techno", "House"]
    },
    {
      id: 2,
      name: "Festival Squad",
      members: 8200,
      description: "Plan your next festival adventure together",
      image: "/src/assets/concert-hero-2.jpg",
      tags: ["Festivals", "Travel", "Community"]
    },
    {
      id: 3,
      name: "Local DJs Network",
      members: 3400,
      description: "Supporting local talent and underground scenes",
      image: "/src/assets/concert-hero-1.jpg",
      tags: ["Local", "DJ", "Underground"]
    }
  ];

  const vibeVaultPosts = [
    {
      id: 1,
      author: "Alex Thompson",
      username: "@alexthompson",
      avatar: "/src/assets/concert-hero-1.jpg",
      time: "2h ago",
      content: "Just discovered this amazing underground techno artist! The basslines are insane 🔥",
      likes: 24,
      comments: 8,
      image: "/src/assets/concert-hero-2.jpg",
      following: false,
      genres: ["Artist", "Music", "Blog"]
    },
    {
      id: 2,
      author: "Sarah Mitchell",
      username: "@sarahmitchell",
      avatar: "/src/assets/concert-hero-2.jpg",
      time: "4h ago",
      content: "Who's going to the festival this weekend? Let's meet up! 🎪",
      likes: 15,
      comments: 12,
      following: true,
      genres: ["Artist", "Video", "Blog"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                Community
              </h1>
              <p className="text-muted-foreground">
                Connect with artists and share your vibe
              </p>
            </div>
            
            <Button 
              onClick={() => setShowChat(!showChat)}
              className="bg-gradient-primary text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="communities" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Artist Communities
              </TabsTrigger>
              <TabsTrigger value="vibe-vault" className="flex items-center gap-2">
                <Music className="w-4 h-4" />
                Vibe Vault
              </TabsTrigger>
            </TabsList>

            <TabsContent value="communities" className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search communities..." 
                    className="pl-10 bg-card border-concert-border"
                  />
                </div>
                <Button className="bg-gradient-primary text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Community
                </Button>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {communities.map((community) => (
                  <Card key={community.id} className="bg-card border-concert-border hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={community.image} />
                          <AvatarFallback>{community.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{community.name}</CardTitle>
                          <CardDescription className="text-sm">
                            {community.members.toLocaleString()} members
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        {community.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {community.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-gradient-primary text-white">
                        Join Community
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="vibe-vault" className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Latest Vibes</h2>
                <Button className="bg-gradient-primary text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Share Vibe
                </Button>
              </div>

              <div className="space-y-6">
                {vibeVaultPosts.map((post) => (
                  <Card key={post.id} className="bg-card border-concert-border">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={post.avatar} />
                            <AvatarFallback>{post.author[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{post.author}</p>
                            <p className="text-sm text-muted-foreground">{post.username}</p>
                            <p className="text-xs text-muted-foreground">{post.time}</p>
                          </div>
                        </div>
                        <Button 
                          variant={post.following ? "default" : "outline"}
                          size="sm"
                          className={post.following ? "bg-gradient-primary" : ""}
                        >
                          {post.following ? "Following" : "Follow"}
                        </Button>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mt-2">
                        {post.genres.map((genre) => (
                          <Badge key={genre} variant="secondary" className="text-xs">
                            {genre}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-sm mb-3">{post.content}</p>
                      {post.image && (
                        <img 
                          src={post.image} 
                          alt="Post content" 
                          className="w-full h-48 object-cover rounded-lg mb-3"
                        />
                      )}
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Button variant="ghost" size="sm" className="p-0 h-auto">
                          <Heart className="w-4 h-4 mr-1" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="p-0 h-auto">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.comments}
                        </Button>
                        <Button variant="ghost" size="sm" className="p-0 h-auto">
                          <Share2 className="w-4 h-4" />
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

      {showChat && (
        <div className="fixed right-4 bottom-20 md:bottom-4 w-80 h-96 bg-card border border-concert-border rounded-lg shadow-lg z-50">
          <div className="flex items-center justify-between p-4 border-b border-concert-border">
            <h3 className="font-semibold">Direct Messages</h3>
            <Button variant="ghost" size="sm" onClick={() => setShowChat(false)}>
              ×
            </Button>
          </div>
          
          <div className="h-64 p-4 overflow-y-auto space-y-3">
            <div className="flex items-center gap-3 p-2 hover:bg-muted rounded-lg cursor-pointer">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/src/assets/concert-hero-1.jpg" />
                <AvatarFallback>AT</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Alex Thompson</p>
                <p className="text-xs text-muted-foreground">Hey! Great post about...</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-2 hover:bg-muted rounded-lg cursor-pointer">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/src/assets/concert-hero-2.jpg" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Sarah Mitchell</p>
                <p className="text-xs text-muted-foreground">Thanks for following!</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-concert-border">
            <div className="flex gap-2">
              <Input placeholder="Type a message..." className="flex-1" />
              <Button size="sm" className="bg-gradient-primary">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
