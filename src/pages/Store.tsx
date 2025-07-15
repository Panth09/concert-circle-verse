import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star } from "lucide-react";
import Navigation from "@/components/Navigation";

const storeItems = [
  {
    id: 1,
    name: "Concert Circle T-Shirt",
    price: "$25.99",
    image: "/api/placeholder/300/300",
    rating: 4.8,
    reviews: 124,
    category: "Apparel"
  },
  {
    id: 2,
    name: "Limited Edition Hoodie",
    price: "$49.99",
    image: "/api/placeholder/300/300",
    rating: 4.9,
    reviews: 89,
    category: "Apparel"
  },
  {
    id: 3,
    name: "Concert Poster Collection",
    price: "$19.99",
    image: "/api/placeholder/300/300",
    rating: 4.7,
    reviews: 67,
    category: "Collectibles"
  },
  {
    id: 4,
    name: "Artist Vinyl Record",
    price: "$34.99",
    image: "/api/placeholder/300/300",
    rating: 4.9,
    reviews: 156,
    category: "Music"
  },
  {
    id: 5,
    name: "Festival Accessories Pack",
    price: "$15.99",
    image: "/api/placeholder/300/300",
    rating: 4.6,
    reviews: 78,
    category: "Accessories"
  },
  {
    id: 6,
    name: "Band Merchandise Bundle",
    price: "$79.99",
    image: "/api/placeholder/300/300",
    rating: 4.8,
    reviews: 92,
    category: "Bundles"
  }
];

const Store = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            Concert Circle Store
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover exclusive merchandise and collectibles
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["All", "Apparel", "Music", "Collectibles", "Accessories", "Bundles"].map((category) => (
            <Badge 
              key={category}
              variant={category === "All" ? "default" : "secondary"}
              className={category === "All" ? "bg-gradient-primary" : ""}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {storeItems.map((item) => (
            <Card key={item.id} className="bg-card border-concert-border shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription className="mt-1">
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                    </CardDescription>
                  </div>
                  <span className="text-xl font-bold text-primary">{item.price}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{item.rating}</span>
                    <span className="text-sm text-muted-foreground">({item.reviews})</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;