import db from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function PATCH(req: Request, { params }: { params: { hotelId: string } }) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }
    if (!name) {
      return new NextResponse("Harus menginput nama", { status: 400 });
    }

    if (!params.hotelId) {
      return new NextResponse("Hotel id dibutuhkan", { status: 400 });
    }

    const hotel = await db.hotel.updateMany({
      where: {
        id: params.hotelId,
        userId,
      },
      data: {
        name,
      },
    });

    return NextResponse.json(hotel);
  } catch (error) {
    console.log("[STORE_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { hotelId: string } }) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!params.hotelId) {
      return new NextResponse("Hotel id dibutuhkan", { status: 400 });
    }

    const hotel = await db.hotel.deleteMany({
      where: {
        id: params.hotelId,
        userId,
      },
    });

    return NextResponse.json(hotel);
  } catch (error) {
    console.log("[STORE_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

