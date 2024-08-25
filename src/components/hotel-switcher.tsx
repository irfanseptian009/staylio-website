"use client";

import { useState } from "react";
import { Hotel } from "@prisma/client";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useHotelModal } from "@/hooks/use-hotel-modal";
import { useParams, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Check, ChevronsUpDown, PlusCircle, Hotel as HotelIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>;

interface HotelSwitcherProps extends PopoverTriggerProps {
  items: Hotel[];
}

const HotelSwitcher = ({ className, items = [] }: HotelSwitcherProps) => {
  const HotelModal = useHotelModal();
  const params = useParams();
  const router = useRouter();

  const formattedItems = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const currentHotel = formattedItems.find((item) => item.value === params.hotelId);

  const [open, setOpen] = useState(false);

  const onHotelSelect = (hotel: { value: string; label: string }) => {
    setOpen(false);
    router.push(`/${hotel.value}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Pilih Toko"
          className={cn("w-[200px] justify-between", className)}
        >
          <HotelIcon className="mr-2 h-4 w-4" />
          {currentHotel?.label}
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Cari Toko" />
            <CommandEmpty>Toko Tidak Ditemukan</CommandEmpty>
            <CommandGroup heading="Toko">
              {formattedItems.map((hotel) => (
                <CommandItem
                  key={hotel.value}
                  onSelect={() => onHotelSelect(hotel)}
                  className="text-sm"
                >
                  <HotelIcon className="mr-2 h-4 w-4" />
                  {hotel.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      currentHotel?.value === hotel.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  HotelModal.onOpen();
                }}
              >
                <PlusCircle className="mr-2 h-5 w-5" />
                Buat Toko
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default HotelSwitcher;
