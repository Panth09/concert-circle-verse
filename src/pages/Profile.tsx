import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  CreditCard, 
  LogOut, 
  Camera, 
  Music, 
  Calendar,
  Heart,
  Share2
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const userStats = [
    { label: "Events Attended", value: 42 },
    { label: "Communities Joined", value: 8 },
    { label: "Posts Shared", value: 156 },
    { label: "Following", value: 234 }
  ];

  const recentActivity = [
    {
      id: 1,
      type: "event",
      title: "Attended Electronic Paradise Festival",
      date: "2 days ago",
      icon: Music
    },
    {
      id: 2,
      type: "post",
      title: "Shared a new vibe in Community",
      date: "1 week ago",
      icon: Share2
    },
    {
      id: 3,
      type: "favorite",
      title: "Added 3 events to favorites",
      date: "2 weeks ago",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Profile
          </h1>
          <p className="text-muted-foreground">
            Manage your account and preferences
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Privacy
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="md:col-span-2 bg-card border-concert-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Profile Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src="/src/assets/concert-hero-1.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" className="border-concert-border">
                      <Camera className="w-4 h-4 mr-2" />
                      Change Photo
                    </Button>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" className="bg-card border-concert-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" className="bg-card border-concert-border" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" className="bg-card border-concert-border" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio" 
                      placeholder="Tell us about yourself..."
                      className="bg-card border-concert-border"
                      defaultValue="Music lover and festival enthusiast. Always looking for the next great show!"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Music Preferences</Label>
                    <div className="flex flex-wrap gap-2">
                      {["Electronic", "House", "Techno", "Progressive", "Ambient"].map((genre) => (
                        <Badge key={genre} variant="secondary">{genre}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="bg-gradient-primary text-white">Save Changes</Button>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="bg-card border-concert-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {userStats.map((stat) => (
                        <div key={stat.label} className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">{stat.label}</span>
                          <span className="font-bold text-primary">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-concert-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-start gap-3">
                          <activity.icon className="w-4 h-4 mt-1 text-primary" />
                          <div>
                            <p className="text-sm font-medium">{activity.title}</p>
                            <p className="text-xs text-muted-foreground">{activity.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-card border-concert-border">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Input id="language" defaultValue="English" className="bg-card border-concert-border" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Input id="timezone" defaultValue="UTC-5 (EST)" className="bg-card border-concert-border" />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <Button className="bg-gradient-primary text-white">Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="bg-card border-concert-border">
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose what notifications you want to receive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: "New Events", desc: "Get notified about new events in your area" },
                  { title: "Community Updates", desc: "Updates from communities you've joined" },
                  { title: "Friend Activity", desc: "When friends share new content" },
                  { title: "Event Reminders", desc: "Reminders for upcoming events" },
                  { title: "Security Alerts", desc: "Important security notifications" }
                ].map((notification) => (
                  <div key={notification.title} className="flex items-center justify-between">
                    <div>
                      <Label>{notification.title}</Label>
                      <p className="text-sm text-muted-foreground">{notification.desc}</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                ))}
                
                <Button className="bg-gradient-primary text-white">Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <Card className="bg-card border-concert-border">
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Control your privacy and data sharing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: "Profile Visibility", desc: "Make your profile visible to others" },
                  { title: "Activity Status", desc: "Show when you're online" },
                  { title: "Event History", desc: "Allow others to see events you've attended" },
                  { title: "Location Sharing", desc: "Share your location for event recommendations" },
                  { title: "Data Analytics", desc: "Help improve the app with usage data" }
                ].map((privacy) => (
                  <div key={privacy.title} className="flex items-center justify-between">
                    <div>
                      <Label>{privacy.title}</Label>
                      <p className="text-sm text-muted-foreground">{privacy.desc}</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                ))}
                
                <Separator />
                
                <div className="space-y-2">
                  <Button variant="outline" className="w-full border-concert-border">
                    Download My Data
                  </Button>
                  <Button variant="outline" className="w-full border-red-500 text-red-500 hover:bg-red-50">
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;