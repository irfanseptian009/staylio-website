import db from "@/lib/db";

import { redirect } from "next/navigation";
import { SettingsForm } from "./components/settings-form";
import { auth } from "@clerk/nextjs/server";

interface SettingsPageProps {
  params: {
    hotelId: string;
  };
}

const SettingsPage: React.FC<SettingsPageProps> = async ({ params }) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const hotel = await db.hotel.findFirst({
    where: {
      id: params.hotelId,
      userId,
    },
  });

  if (!hotel) {
    redirect("/");
  }

  return (
    <div className="flex-col bg-gray-200 pb-32">
      <div className="flex-1 space-y-4 px-8 ">
        <SettingsForm initialData={hotel} />
      </div>
    </div>
  );
};

export default SettingsPage;
