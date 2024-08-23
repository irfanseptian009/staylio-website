"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarDaysIcon } from '@heroicons/react/20/solid';
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function CheckOutDate() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] flex justify-start gap-1 bg-[#F8F8FA] hover:bg-gray-200 !text-black font-regular border-white h-14 rounded-2xl",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarDaysIcon className="mr-2 h-5 w-5" style={{ color: "#FF5722" }} />
          {date ? format(date, "PPPP") : <span>Pick a date</span>}
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
  )
}
