import { NextResponse } from "next/server";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request, { params }: { params: { hotelId: string } }) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { label, imageUrl } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!label) {
      return new NextResponse("Nama banner perlu diinput", { status: 400 });
    }

    if (!imageUrl) {
      return new NextResponse("Image banner perlu diinput", { status: 400 });
    }

    if (!params.hotelId) {
      return new NextResponse("Hotel id URL dibutuhkan");
    }

    const storeByUserId = await db.hotel.findFirst({
      where: {
        id: params.hotelId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const banner = await db.banner.create({
      data: {
        label,
        imageUrl,
        hotelId: params.hotelId,
      },
    });

    return NextResponse.json(banner);
  } catch (error) {
    console.log("[BANNERS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request, { params }: { params: { hotelId: string } }) {
  try {
    if (!params.hotelId) {
      return new NextResponse("Hotel id URL dibutuhkan");
    }

    const banner = await db.banner.findMany({
      where: {
        hotelId: params.hotelId,
      },
    });

    return NextResponse.json(banner);
  } catch (error) {
    console.log("[BANNERS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
