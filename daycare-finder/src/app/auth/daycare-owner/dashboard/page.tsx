"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar as CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const childrenList = [
    {
        name: "Anthony",
        time: "7:00am - 4:00pm",
    },
    {
        name: "Dieter",
        time: "7:00am - 4:00pm",
    },
    {
        name: "Maira",
        time: "7:00am - 4:00pm",
    },
    {
        name: "Hilton",
        time: "7:00am - 4:00pm",
    },
    {
        name: "Liam",
        time: "7:00am - 4:00pm",
    },
]

export default function Dashboard() {
    const [date, setDate] = useState<Date>()

    useEffect(() => {
        setDate(new Date())
    }, [])

    const month = date?.toLocaleString('en-US', { month: 'long' });
    const day = date?.getDate();
    const year = date?.getFullYear();

    const suffix = (day: any) => {
        if (day === 1 || day === 21 || day === 31) {
            return 'st';
        } else if (day === 2 || day === 22) {
            return 'nd';
        } else if (day === 3 || day === 23) {
            return 'rd';
        } else {
            return 'th';
        }
    };

    const formattedDate = `${month} ${day}${suffix(day)}, ${year}`;


    return (
        <div className="h-screen w-full flex flex-col items-center p-8">
            <div className="w-full h-32 flex gap-32">
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

                <h1 className="text-xl">{date ? formattedDate : null}</h1>
            </div>
            <div className="flex w-full p-4 gap-4">
                {childrenList.map((child) => {
                    return (
                        <Card>
                            <CardHeader>
                                <CardTitle>{child.name}</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{child.time}</p>
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>
        </div>
    );
}
