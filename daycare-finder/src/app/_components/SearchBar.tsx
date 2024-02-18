"use client";
import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { DatePickerWithRange } from "@/components/ui/datepicker";
import { useRouter } from "next/navigation";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import NumericStepper from "../../components/ui/numberstepper";
export default function SearchBar() {
  const router = useRouter();
  const [city, setCity] = useState("");
  const [count, setCount] = useState(0);
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 2),
  });
  const [popup, setPopup] = useState(true);

  const handleSearch = () => {
    // Format the date range for the URL
    const fromDate = dateRange?.from
      ? dateRange.from.toISOString().split("T")[0]
      : "";
    const toDate = dateRange?.to
      ? dateRange.to.toISOString().split("T")[0]
      : "";

    // Construct the query string
    const queryString = `city=${encodeURIComponent(
      city
    )}&from=${encodeURIComponent(fromDate)}&to=${encodeURIComponent(
      toDate
    )}&count=${count}`;

    // Navigate using router.push with a string URL
    router.push(`/results?${queryString}`);
  };
  return (
    <div className="px-6 py-4 bg-white border-2 rounded-xl flex items-center gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="city" className="text-md">
          Where
        </Label>
        <Input
          className="w-72"
          type="text"
          id="city"
          placeholder="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      {/* <button
        onClick={() => {
          setPopup((prev) => !prev);
        }}
      >
        Open
      </button> */}

      <div className="flex flex-col gap-2">
        <div className="font-md font-semibold">When</div>
        <div
          //   className="px-4 py-2 rounded border-2"
          onClick={() => {
            setPopup((prev) => !prev);
          }}
        >
          <DatePickerWithRange date={dateRange} setDate={setDateRange} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-lg">How Many</div>
        <div className="w-40">
          <NumericStepper value={count} setValue={setCount} min={0} max={10} />
        </div>
      </div>
      <button
        onClick={handleSearch}
        className="bg-red-400 px-4 py-2 text-white rounded-xl"
      >
        Search
      </button>
    </div>
  );
}
