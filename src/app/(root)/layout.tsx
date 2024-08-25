import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
  const { userId } = auth();
  if (!userId) {
    redirect("sign-in");
  }

  const hotel = await db.hotel.findFirst({
    where: {
      userId,
    },
  });

  if (hotel) {
    redirect(`/${hotel.id}`);
  }

  return <>{children}</>;
}
