"use client"; // Add this line at the top to mark the component as a Client Component

import { useState } from 'react'; // Import useState for state management

import { Button } from "@repo/ui/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@repo/ui/components/ui/card";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui/components/ui/select";

export default function CardWithForm() {
  const [isPopupVisible, setPopupVisible] = useState(false); // State for controlling popup visibility

  // Function to toggle popup visibility
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-black">
        <Card className="w-[350px] p-6 bg-gray-800 text-white">
          <CardHeader className="space-y-6">
            <div className="flex justify-center">
              <img
                src="https://static.thenounproject.com/png/2334502-200.png"
                alt="Essential Oil"
                className="max-w-[100px] h-auto" // Adjusted size
              />
            </div>

            <CardTitle className="text-white">Join Our Wellness Journey 🌸</CardTitle>
            <CardDescription>Discover the power of nature with our handpicked essential oils. Sign up to start your holistic path to balance, relaxation, and beauty.</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form>
              <div className="grid gap-6">
                <div className="flex flex-col space-y-3">
                  <Label htmlFor="name" className="text-white">What is Your Name?</Label>
                  <Input id="name" placeholder="Full Name" className="text-black" />
                </div>
                <div className="flex flex-col space-y-3">
                  <Label htmlFor="framework" className="text-white">Which best describes you</Label>
                  <Select>
                    <SelectTrigger id="framework" >
                      <SelectValue placeholder="Select" className="text-black"/>
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="aromatherapy">🪔 Aromatherapy Enthusiast</SelectItem>
                      <SelectItem value="wellness">🧘‍♀️ Wellness Seeker</SelectItem>
                      <SelectItem value="nature">🌿 Nature Lover</SelectItem>
                      <SelectItem value="self">💆‍♀️ Self-Care Advocate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex justify-start space-x-6 mt-6">
            <Button className="bg-blue-600 text-white" onClick={togglePopup}>Begin my journey</Button>
          </CardFooter>
        </Card>

        {isPopupVisible && (
          <div>
            <div className="popup-overlay" onClick={togglePopup} />
            <div className="popup">
              <div className="popup-content">
                <h2>Welcome to our Sanctuary ✨</h2>
                <p>Thank you for joining! Let us embark on this wellness adventure together.</p>
                <Button className="bg-black text-white" onClick={togglePopup}>Close</Button>
                <a href="/your-target-page">
                  <Button className="bg-black text-white">Start shopping</Button>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}