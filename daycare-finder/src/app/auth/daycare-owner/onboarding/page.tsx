"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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
          <Label htmlFor="hours" className="text-lg">
            Hours of operation
          </Label>
          <Input
            className="w-96"
            type="text"
            id="hours"
            placeholder="9am-5pm"
          />
        </div>
        <div className="">
          <Label htmlFor="name" className="text-lg">
            Daycare Name
          </Label>
          <Input
            className="w-96"
            type="text"
            id="name"
            placeholder="Your daycare name"
          />
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
          <Label htmlFor="price" className="text-lg">
            Price per day
          </Label>
          <Input className="w-96" type="text" id="price" placeholder="10" />
        </div>
      </div>
      <div className="flex gap-36 justify-start items-center">
        <div>
          <Label htmlFor="picture" className="text-lg">
            Daycare Certification PDF
          </Label>
          <Input id="picture" type="file" />
        </div>
        <div>
          <Label htmlFor="location" className="text-lg">
            Languages Spoken
          </Label>
          <Input
            className="w-96"
            type="text"
            id="location"
            placeholder="English, Arabic, Punjabi, Mandarin"
          />
        </div>
      </div>

			<div className="px-64">
				<p className="text-xl font-semibold mb-5">Ameneties and Features</p>
				<ToggleGroup type="multiple" className="flex-wrap gap-5">
					{dummyFeatures.map((item) => {
						return (
							<ToggleGroupItem
								key={item}
								value={item}
								className="text-lg border-2 border-black"
							>
								{item}
							</ToggleGroupItem>
						);
					})}
				</ToggleGroup>
			</div>
		</div>
	);
}
