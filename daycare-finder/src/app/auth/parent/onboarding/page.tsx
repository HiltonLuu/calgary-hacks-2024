"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Textarea } from "@/components/ui/textarea";

export default function Onboarding() {
  const [capacity, setCapacity] = useState(1);
  const [showPhotos, setShowPhotos] = useState(false);

  const dummyPhotos = [
    "/assets/photo1.jpeg",
    "/assets/photo2.jpeg",
    "/assets/photo3.jpeg",
  ];

  const dummyFeatures = [
    "Art supplies",
    "Lunch Included",
    "Outdoor playground",
    "Cable TV",
    "Nap time",
    "Group Activities",
    "Scheduled snacks",
    "Sports",
  ];

  return (
    <div className="flex flex-col gap-10 items-center mt-20">
      <div className="flex justify-center gap-20">
        <div className="">
          <Label htmlFor="name" className="text-lg">
            Child Name
          </Label>
          <Input
            className="w-96"
            type="text"
            id="name"
            placeholder="Your child's name"
          />
        </div>
        <div className="">
          <Label htmlFor="age" className="text-lg">
            Age
          </Label>
          <Input className="w-96" type="text" id="age" placeholder="10" />
        </div>
      </div>
      <div className="flex gap-20">
        <div className="">
          <Label htmlFor="location" className="text-lg">
            Location
          </Label>
          <Input
            className="w-96"
            type="text"
            id="location"
            placeholder="123 fake address NE"
          />
        </div>
        <div className="">
          <Label htmlFor="allergies" className="text-lg">
            Allergies
          </Label>
          <Input
            className="w-96"
            type="text"
            id="allergies"
            placeholder="Gluten, Soy, Pork"
          />
        </div>
      </div>
      <div className="flex gap-36 justify-start items-center">
        <div>
          <Label htmlFor="picture" className="text-lg">
            Photo of Child
          </Label>
          <Input id="picture" type="file" />
        </div>
        <div>
          <Label htmlFor="meds" className="text-lg">
            Medication Required
          </Label>
          <Input
            className="w-96"
            type="text"
            id="meds"
            placeholder="Ibuprofen"
          />
        </div>
      </div>
      <div className="w-2/3 flex flex-col items-center gap-5">
        <p className="text-2xl text-center font-semibold">Care Instructions</p>
        <Textarea placeholder="Type your message here." className="w-2/3" />
      </div>
    </div>
  );
}
