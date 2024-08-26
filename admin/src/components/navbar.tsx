import { MainNav } from "./main-nav";
import Hotelswitcher from "./hotel-switcher";
import { redirect } from "next/navigation";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import logo from "@/app/asset/logo.png";
import Image from "next/image";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const Hotels = await db.hotel.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Image
          src={logo}
          className="btn btn-ghost object-contain"
          width={150}
          height={150}
          alt="Staylio Logo"
        />
        <MainNav className="mx-6" />

        <div className="ml-auto flex items-center space-x-4">
          <Hotelswitcher items={Hotels} />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
