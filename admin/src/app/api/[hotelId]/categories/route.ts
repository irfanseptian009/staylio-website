import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(req: Request, { params }: { params: { hotelId: string } }) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name, bannerId } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Nama category perlu diinput", { status: 400 });
    }

    if (!bannerId) {
      return new NextResponse("Banner Id perlu diinput", { status: 400 });
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

    const category = await db.category.create({
      data: {
        name,
        bannerId,
        hotelId: params.hotelId,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORIES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request, { params }: { params: { hotelId: string } }) {
  try {
    if (!params.hotelId) {
      return new NextResponse("Hotel id URL dibutuhkan");
    }

    const categories = await db.category.findMany({
      where: {
        hotelId: params.hotelId,
      },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.log("[CATEGORIES_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
