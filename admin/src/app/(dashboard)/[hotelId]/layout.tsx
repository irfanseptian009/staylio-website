import NavBar from "@/components/navbar";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { hotelId: string };
}) {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const hotel = await db.hotel.findFirst({
    where: {
      id: params.hotelId,
      userId: userId,
    },
  });

  if (!hotel) {
    redirect("/");
  }
  return (
    <>
      <div>
        <NavBar />
      </div>
      {children}
    </>
  );
}
