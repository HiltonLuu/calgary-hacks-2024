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
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { updateCurrentUser } from "@firebase/auth";

const InfoLogo = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-6 h-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
		/>
	</svg>
);

const CheckLogo = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-6 h-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
		/>
	</svg>
);

const XLogo = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-6 h-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
		/>
	</svg>
);

type Child = {
	id: number;
	name: string;
	date: string;
	image: string;
	extraInfo: string;
	parentName: string;
	parentPhone: string;
	careInstructions: string;
	medications: string;
};

export default function Dashboard() {
	const [date, setDate] = useState<Date>();

	useEffect(() => {
		setDate(new Date());
	}, []);

	const childrenList: Child[] = [
		{
			id: 0,
			name: "Anthony",
			date: "2/18/2024",
			image: "/assets/kyle-peyton-C0H05P-t3g4-unsplash.jpg",
			extraInfo: "Allergic to peanuts",
			parentName: "Mother",
			parentPhone: "(123)-456-7890",
			careInstructions: "when misbehaving, throw them in the timeout zone",
			medications: "remember to give them insulin after meals",
		},
		{
			id: 1,
			name: "Dieter",
			date: "2/18/2024",
			image: "/assets/shravan-k-acharya-cuStP_i-xPg-unsplash.jpg",
			extraInfo: "Allergic to peanuts",
			parentName: "Mother",
			parentPhone: "(123)-456-7890",
			careInstructions: "when misbehaving, throw them in the timeout zone",
			medications: "remember to give them insulin after meals",
		},
		{
			id: 2,
			name: "Maira",
			date: "2/18/2024",
			image: "/assets/kyle-peyton-C0H05P-t3g4-unsplash.jpg",
			extraInfo: "Allergic to peanuts",
			parentName: "Mother",
			parentPhone: "(123)-456-7890",
			careInstructions: "when misbehaving, throw them in the timeout zone",
			medications: "remember to give them insulin after meals",
		},
		{
			id: 3,
			name: "Hilton",
			date: "2/18/2024",
			image: "/assets/shravan-k-acharya-cuStP_i-xPg-unsplash.jpg",
			extraInfo: "Allergic to peanuts",
			parentName: "Mother",
			parentPhone: "(123)-456-7890",
			careInstructions: "when misbehaving, throw them in the timeout zone",
			medications: "remember to give them insulin after meals",
		},
		{
			id: 4,
			name: "Liam",
			date: "2/19/2024",
			image: "/assets/kyle-peyton-C0H05P-t3g4-unsplash.jpg",
			extraInfo: "Allergic to peanuts",
			parentName: "Mother",
			parentPhone: "(123)-456-7890",
			careInstructions: "when misbehaving, throw them in the timeout zone",
			medications: "remember to give them insulin after meals",
		},
		{
			id: 5,
			name: "Liam",
			date: "2/19/2024",
			image: "/assets/kyle-peyton-C0H05P-t3g4-unsplash.jpg",
			extraInfo: "Allergic to peanuts",
			parentName: "Mother",
			parentPhone: "(123)-456-7890",
			careInstructions: "when misbehaving, throw them in the timeout zone",
			medications: "remember to give them insulin after meals",
		},
	];

	const [childList, setChildList] = useState<Child[]>([]);
	const [requestList, setRequestList] = useState(childrenList);

	function dateFormatter(date: Date) {
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

		return formattedDate;
	}

	function handleAccept(child: Child) {
		const newRequestList = [...requestList];
		newRequestList.splice(newRequestList.indexOf(child), 1);
		setRequestList(newRequestList);
		setChildList([...childList, child]);
	}

	function handleDecline(child: Child) {
		const newRequestList = [...requestList];
		newRequestList.splice(newRequestList.indexOf(child), 1);
		setRequestList(newRequestList);
	}

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
					{date ? dateFormatter(date) : null}
				</h1>
			</div>
			<div className="flex w-full">
				<div className="p-4 w-full">
					<Table>
						<TableCaption>Incoming requests</TableCaption>
						<TableHeader>
							<TableRow className="w-full">
								<TableHead></TableHead>
								<TableHead>Date</TableHead>
								<TableHead>Details</TableHead>
								<TableHead>Accept</TableHead>
								<TableHead>Decline</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{requestList.map((child) => {
								return (
									<TableRow key={child.id} className="w-full">
										<TableCell>
											<Avatar>
												<AvatarImage
													className="object-cover"
													src={child.image}
												/>
												<AvatarFallback>CN</AvatarFallback>
											</Avatar>
										</TableCell>
										<TableCell>{child.date}</TableCell>
										<TableCell>
											<Dialog>
												<DialogTrigger>{InfoLogo}</DialogTrigger>
												<DialogContent>
													<DialogHeader>
														<div className="flex items-center justify-between">
															<DialogTitle>{child.name}</DialogTitle>
															<Avatar className="mr-4">
																<AvatarImage
																	className="object-cover"
																	src={child.image}
																/>
																<AvatarFallback>CN</AvatarFallback>
															</Avatar>
														</div>
													</DialogHeader>
													<p>{child.extraInfo}</p>
													<p>Parent name: {child.parentName}</p>
													<p>Parent phone number: {child.parentPhone}</p>
													<p>Medication: {child.medications}</p>
													<p>Care instructions: {child.careInstructions}</p>
												</DialogContent>
											</Dialog>
										</TableCell>
										<TableCell>
											<button onClick={() => handleAccept(child)}>
												{CheckLogo}
											</button>
										</TableCell>
										<TableCell>
											<button onClick={() => handleDecline(child)}>
												{XLogo}
											</button>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</div>
				<div className="flex flex-wrap w-full p-4 gap-4">
					{childList?.map((child, index) => {
						if (child.date === "2/18/2024") {
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
													<AvatarImage
														className="object-cover"
														src={child.image}
													/>
													<AvatarFallback>CN</AvatarFallback>
												</Avatar>
											</div>
										</DialogHeader>
										<p>{child.extraInfo}</p>
										<p>Parent name: {child.parentName}</p>
										<p>Parent phone number: {child.parentPhone}</p>
										<p>Medication: {child.medications}</p>
										<p>Care instructions: {child.careInstructions}</p>
									</DialogContent>
								</Dialog>
							);
						}
					})}
				</div>
			</div>
		</div>
	);
}
