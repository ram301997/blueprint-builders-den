import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, MapPin, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  const featuredDishes = [
    {
      name: "Butter Chicken",
      description: "Tender chicken in a rich, creamy tomato sauce",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
    },
    {
      name: "Biryani",
      description: "Fragrant basmati rice with aromatic spices",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800",
    },
    {
      name: "Paneer Tikka",
      description: "Grilled cottage cheese with special marinade",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Best Indian food in town! The flavors are absolutely authentic.",
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Amazing ambiance and incredible service. Highly recommended!",
    },
    {
      name: "Priya Patel",
      rating: 5,
      comment: "Feels like home! The dishes remind me of my grandmother's cooking.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1600')",
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6">
            Welcome to Bombay Bistro
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Authentic Indian Cuisine in the Heart of the City
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/reservations">Make a Reservation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-center mb-4">
            Featured Dishes
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Discover our most popular authentic Indian specialties
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="font-playfair text-2xl font-bold mb-2">{dish.name}</h3>
                  <p className="text-muted-foreground">{dish.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Highlights */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-playfair text-xl font-bold mb-2">Award Winning</h3>
              <p className="text-muted-foreground">Best Indian Restaurant 2024</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-playfair text-xl font-bold mb-2">Open Daily</h3>
              <p className="text-muted-foreground">11 AM - 10 PM</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-playfair text-xl font-bold mb-2">Prime Location</h3>
              <p className="text-muted-foreground">Downtown Food District</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-playfair text-xl font-bold mb-2">Highly Rated</h3>
              <p className="text-muted-foreground">4.9/5 Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-center mb-4">
            What Our Customers Say
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Real reviews from our valued guests
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.comment}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
