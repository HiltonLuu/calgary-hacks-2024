"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

const childrenList = [
	{
		name: "Anthony",
		time: "7:00am - 4:00pm",
		image: "/assets/kyle-peyton-C0H05P-t3g4-unsplash.jpg",
		extraInfo: "Allergic to peanuts",
		parentName: "Mother",
		parentPhone: "(123)-456-7890",
	},
	{
		name: "Dieter",
		time: "7:00am - 4:00pm",
		image: "/assets/shravan-k-acharya-cuStP_i-xPg-unsplash.jpg",
		extraInfo: "Allergic to peanuts",
		parentName: "Mother",
		parentPhone: "(123)-456-7890",
	},
	{
		name: "Maira",
		time: "7:00am - 4:00pm",
		image: "/assets/kyle-peyton-C0H05P-t3g4-unsplash.jpg",
		extraInfo: "Allergic to peanuts",
		parentName: "Mother",
		parentPhone: "(123)-456-7890",
	},
	{
		name: "Hilton",
		time: "7:00am - 4:00pm",
		image: "/assets/shravan-k-acharya-cuStP_i-xPg-unsplash.jpg",
		extraInfo: "Allergic to peanuts",
		parentName: "Mother",
		parentPhone: "(123)-456-7890",
	},
	{
		name: "Liam",
		time: "7:00am - 4:00pm",
		image: "/assets/kyle-peyton-C0H05P-t3g4-unsplash.jpg",
		extraInfo: "Allergic to peanuts",
		parentName: "Mother",
		parentPhone: "(123)-456-7890",
	},
	{
		name: "Liam",
		time: "7:00am - 4:00pm",
		image: "/assets/kyle-peyton-C0H05P-t3g4-unsplash.jpg",
		extraInfo: "Allergic to peanuts",
		parentName: "Mother",
		parentPhone: "(123)-456-7890",
	},
];

export default function Dashboard() {
	const [date, setDate] = useState<Date>();

	useEffect(() => {
		setDate(new Date());
	}, []);

	const month = date?.toLocaleString("en-US", { month: "long" });
	const day = date?.getDate();
	const year = date?.getFullYear();

	const suffix = (day: any) => {
		if (day === 1 || day === 21 || day === 31) {
			return "st";
		} else if (day === 2 || day === 22) {
			return "nd";
		} else if (day === 3 || day === 23) {
			return "rd";
		} else {
			return "th";
		}
	};

	const formattedDate = `${month} ${day}${suffix(day)}, ${year}`;

	return (
		<div className="h-screen w-full flex flex-col items-center px-8">
			<div className="w-full h-32 flex items-center">
				<div className="fixed">
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant={"outline"}
								className={cn(
									"w-[280px] justify-start text-left font-normal",
									!date && "text-muted-foreground"
								)}
							>
								<CalendarIcon className="mr-2 h-4 w-4" />
								{date ? format(date, "PPP") : null}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0">
							<Calendar
								mode="single"
								selected={date}
								onSelect={setDate}
								initialFocus
							/>
						</PopoverContent>
					</Popover>
				</div>

				<h1 className="text-xl text-center w-full">
					{date ? formattedDate : null}
				</h1>
			</div>
			<div className="flex flex-wrap w-full p-4 gap-4">
				{childrenList.map((child, index) => {
					return (
						<Dialog key={index}>
							<DialogTrigger>
								<Card className="w-64">
									<CardHeader>
										<div className="flex items-center justify-between">
											<CardTitle>{child.name}</CardTitle>
											<Avatar>
												<AvatarImage
													className="object-cover"
													src={child.image}
												/>
												<AvatarFallback>CN</AvatarFallback>
											</Avatar>
										</div>
										<CardDescription className="text-left">
											Card Description
										</CardDescription>
									</CardHeader>
									<CardFooter>
										<p>{child.extraInfo}</p>
									</CardFooter>
								</Card>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<div className="flex items-center justify-between">
										<DialogTitle>{child.name}</DialogTitle>
										<Avatar className="mr-4">
											<AvatarImage className="object-cover" src={child.image} />
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
									</div>
									<DialogDescription>{child.extraInfo}</DialogDescription>
									<DialogDescription>
										Parent name: {child.parentName}
									</DialogDescription>
									<DialogDescription>
										Parent phone number: {child.parentPhone}
									</DialogDescription>
								</DialogHeader>
							</DialogContent>
						</Dialog>
					);
				})}
			</div>
		</div>
	);
}
