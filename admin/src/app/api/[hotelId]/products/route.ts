import { NextResponse } from "next/server";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request, { params }: { params: { hotelId: string } }) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const {
      name,
      city,
      latitude,
      longitude,
      price,
      categoryId,
      overview,
      capacity,
      images,
      isFeatured,
      amenities,
      address,
      rating,
    } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Nama perlu diinput", { status: 400 });
    }
    if (!city) {
      return new NextResponse("city perlu diinput", { status: 400 });
    }
    if (!address) {
      return new NextResponse("address perlu diinput", { status: 400 });
    }
    if (!overview) {
      return new NextResponse("overview perlu diinput", { status: 400 });
    }
    if (!amenities) {
      return new NextResponse("amenities perlu diinput", { status: 400 });
    }

    if (!images || !images.length) {
      return new NextResponse("Image perlu diinput", { status: 400 });
    }

    if (!price) {
      return new NextResponse("Harga perlu diinput", { status: 400 });
    }
    if (!latitude) {
      return new NextResponse("latitude perlu diinput", { status: 400 });
    }
    if (!longitude) {
      return new NextResponse("longitude perlu diinput", { status: 400 });
    }
    if (!capacity) {
      return new NextResponse("capacity perlu diinput", { status: 400 });
    }
    if (!rating) {
      return new NextResponse("rating perlu diinput", { status: 400 });
    }

    if (!categoryId) {
      return new NextResponse("Kategori perlu diinput", { status: 400 });
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

    const product = await db.product.create({
      data: {
        name,
        city,
        latitude,
        longitude,
        overview,
        capacity,
        price,
        categoryId,
        isFeatured,
        amenities,
        address,
        rating,
        hotelId: params.hotelId,
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCTS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request, { params }: { params: { hotelId: string } }) {
  try {
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("categoryId") || undefined;
    const isFeatured = searchParams.get("isFeatured");

    if (!params.hotelId) {
      return new NextResponse("Hotel id URL dibutuhkan");
    }

    const products = await db.product.findMany({
      where: {
        hotelId: params.hotelId,
        categoryId,
        isFeatured: isFeatured ? true : undefined,
      },
      include: {
        images: true,
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.log("[PRODUCTS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
