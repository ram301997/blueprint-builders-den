import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Recipes",
      description: "Traditional family recipes passed down through generations",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building connections through shared meals and experiences",
    },
    {
      icon: Award,
      title: "Quality Ingredients",
      description: "Fresh, premium ingredients sourced with care",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Respecting tradition while embracing culinary creativity",
    },
  ];

  const team = [
    {
      name: "Chef Rajesh Kumar",
      role: "Head Chef",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400",
      bio: "With 25 years of culinary experience across India",
    },
    {
      name: "Priya Sharma",
      role: "Restaurant Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
      bio: "Passionate about creating memorable dining experiences",
    },
    {
      name: "Chef Arjun Patel",
      role: "Sous Chef",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400",
      bio: "Specializing in modern interpretations of classic dishes",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-playfair text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bombay Bistro was born from a passion for authentic Indian cuisine and a 
              desire to share the rich culinary heritage of India with our community. 
              Since 2010, we've been serving traditional recipes with a modern touch, 
              creating a warm and welcoming space where families and friends gather to 
              enjoy delicious food and create lasting memories.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="font-playfair text-4xl font-bold text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-8 pb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-primary/10 rounded-full">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-playfair text-xl font-bold mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto">
            <h2 className="font-playfair text-4xl font-bold text-center mb-4">
              Meet Our Team
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              The passionate people behind your favorite dishes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6 text-center">
                    <h3 className="font-playfair text-2xl font-bold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-playfair text-4xl font-bold text-center mb-12">
              Awards & Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Award className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-playfair text-xl font-bold mb-2">
                    Best Indian Restaurant 2024
                  </h3>
                  <p className="text-muted-foreground">City Dining Awards</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Award className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-playfair text-xl font-bold mb-2">
                    Excellence in Service
                  </h3>
                  <p className="text-muted-foreground">Restaurant Association 2023</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Award className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-playfair text-xl font-bold mb-2">
                    Top Rated Cuisine
                  </h3>
                  <p className="text-muted-foreground">Food Critic's Choice 2023</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Award className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-playfair text-xl font-bold mb-2">
                    Customer Favorite
                  </h3>
                  <p className="text-muted-foreground">Local Business Awards 2022</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
