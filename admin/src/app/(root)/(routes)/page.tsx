"use client";

import { useHotelModal } from "@/hooks/use-hotel-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useHotelModal((state) => state.onOpen);
  const isOpen = useHotelModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p4 ">rootPage</div>
    </main>
  );
};

export default SetupPage;
