import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Reservations = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    time: "",
    specialRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservation request submitted! We'll confirm via email shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      guests: "",
      time: "",
      specialRequests: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const timeSlots = [
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
    "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-5xl font-bold mb-4">Make a Reservation</h1>
            <p className="text-muted-foreground text-lg">
              Reserve your table for an unforgettable dining experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Reservation Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">Reservation Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="guests">Number of Guests</Label>
                      <Select
                        name="guests"
                        value={formData.guests}
                        onValueChange={(value) =>
                          setFormData({ ...formData, guests: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "Guest" : "Guests"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select
                        name="time"
                        value={formData.time}
                        onValueChange={(value) =>
                          setFormData({ ...formData, time: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="specialRequests">Special Requests</Label>
                    <Textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      placeholder="Any dietary restrictions or special occasions?"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Reservation
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Calendar and Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl">Select Date</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    disabled={(date) =>
                      date < new Date() || date < new Date("1900-01-01")
                    }
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl">
                    Important Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    • Reservations are held for 15 minutes past the booking time
                  </p>
                  <p>
                    • For parties larger than 8, please call us directly
                  </p>
                  <p>
                    • We accommodate dietary restrictions with advance notice
                  </p>
                  <p>
                    • Cancellations should be made at least 2 hours in advance
                  </p>
                  <p className="text-foreground font-semibold mt-4">
                    Contact us: (555) 123-4567
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reservations;
