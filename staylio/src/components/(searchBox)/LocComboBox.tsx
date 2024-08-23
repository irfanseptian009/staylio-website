"use client"

import * as React from "react"
import { Globe } from "lucide-react" // Use the Globe icon to mimic the image
import { Check } from "lucide-react"
import { MapPinIcon } from '@heroicons/react/20/solid';

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const destinations = [
  {
    value: "bali",
    label: "Bali, Indonesia",
  },
  {
    value: "jakarta",
    label: "Jakarta, Indonesia",
  },
  {
    value: "palembang",
    label: "Palembang, Indonesia",
  },
  {
    value: "bandung",
    label: "Bandung, Indonesia",
  },
  {
    value: "medan",
    label: "Medan, Indonesia",
  },
]

export function LocComboBox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="2xl:w-[320px] lg:w-[220px] flex justify-start gap-1 bg-[#F8F8FA] hover:bg-gray-200 text-black font-regular border-white h-14 rounded-2xl" 
        >
          <MapPinIcon className="mr-2 h-5 w-5" style={{ color: "#FF5722" }} />
          {value
            ? destinations.find((destination) => destination.value === value)?.label
            : "Select Destination"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[320px] p-0 bg-white border border-gray-300">
        <Command>
          <CommandInput placeholder="Search destination..." className="text-black" />
          <CommandList>
            <CommandEmpty>No destination found.</CommandEmpty>
            <CommandGroup>
              {destinations.map((destination) => (
                <CommandItem
                  key={destination.value}
                  value={destination.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === destination.value ? "opacity-100" : "opacity-0"
                    )}
                    style={{ color: "#FF5722" }} // Orange color for the check mark when selected
                  />
                  {destination.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
