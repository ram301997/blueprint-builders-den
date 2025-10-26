import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Percent, Clock, Users, Gift } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Offers = () => {
  const offers = [
    {
      title: "Weekend Special",
      discount: "20% OFF",
      description: "Get 20% off on all dine-in orders during weekends",
      validity: "Valid Sat-Sun",
      icon: Percent,
      color: "text-primary",
    },
    {
      title: "Lunch Combo",
      discount: "$12.99",
      description: "Special lunch combo with starter, main course, and beverage",
      validity: "11 AM - 3 PM",
      icon: Clock,
      color: "text-accent",
    },
    {
      title: "Family Feast",
      discount: "15% OFF",
      description: "Orders above $50 for groups of 4 or more",
      validity: "All Days",
      icon: Users,
      color: "text-secondary",
    },
    {
      title: "Birthday Special",
      discount: "FREE Dessert",
      description: "Complimentary dessert for birthday celebrations",
      validity: "With Valid ID",
      icon: Gift,
      color: "text-primary",
    },
  ];

  const upcomingEvents = [
    {
      title: "Diwali Festival Special",
      date: "November 12, 2024",
      description: "Celebrate Diwali with exclusive festive menu and live music",
      image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=800",
    },
    {
      title: "Chef's Table Experience",
      date: "Every Friday",
      description: "Interactive dining experience with our master chef",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 py-12 px-4">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="font-playfair text-5xl font-bold mb-4">Special Offers</h1>
            <p className="text-muted-foreground text-lg">
              Delicious deals and exciting promotions await you
            </p>
          </div>

          {/* Current Offers */}
          <section className="mb-16">
            <h2 className="font-playfair text-3xl font-bold mb-8">Current Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {offers.map((offer, index) => {
                const Icon = offer.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`${offer.color} p-3 bg-muted rounded-lg`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="font-playfair text-xl">
                              {offer.title}
                            </CardTitle>
                            <Badge variant="secondary" className="mt-2">
                              {offer.validity}
                            </Badge>
                          </div>
                        </div>
                        <div className="font-dancing text-2xl font-bold text-primary">
                          {offer.discount}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{offer.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Upcoming Events */}
          <section>
            <h2 className="font-playfair text-3xl font-bold mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <Badge className="mb-3">{event.date}</Badge>
                    <h3 className="font-playfair text-2xl font-bold mb-3">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <Button asChild>
                      <Link to="/reservations">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
            <h2 className="font-playfair text-3xl font-bold mb-4">
              Never Miss an Offer
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter and be the first to know about exclusive deals
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Subscribe Now</Link>
            </Button>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Offers;
