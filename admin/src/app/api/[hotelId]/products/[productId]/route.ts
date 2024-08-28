import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { productId: string } }) {
  try {
    if (!params.productId) {
      return new NextResponse("tempat id dibutuhkan", { status: 400 });
    }

    const product = await db.product.findUnique({
      where: {
        id: params.productId,
      },
      include: {
        images: true,
        category: true,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCT_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { hotelId: string; productId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const {
      name,
      city,
      latitude,
      longitude,
      price,
      overview,
      capacity,
      categoryId,
      images,
      isFeatured,
      amenities,
    } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }
    if (!name) {
      return new NextResponse("Nama perlu diinput", { status: 400 });
    }
    if (!city) {
      return new NextResponse("City perlu diinput", { status: 400 });
    }
    if (!overview) {
      return new NextResponse("Description perlu diinput", { status: 400 });
    }

    if (!images || !images.length) {
      return new NextResponse("Image perlu diinput", { status: 400 });
    }

    if (!price) {
      return new NextResponse("Harga perlu diinput", { status: 400 });
    }
    if (!longitude) {
      return new NextResponse("longitude perlu diinput", { status: 400 });
    }
    if (!latitude) {
      return new NextResponse("latitude perlu diinput", { status: 400 });
    }
    if (!capacity) {
      return new NextResponse("capacity perlu diinput", { status: 400 });
    }

    if (!categoryId) {
      return new NextResponse("Kategori perlu diinput", { status: 400 });
    }

    if (!params.productId) {
      return new NextResponse("Product id dibutuhkan", { status: 400 });
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

    await db.product.update({
      where: {
        id: params.productId,
      },
      data: {
        name,
        city,
        latitude,
        longitude,
        overview,
        capacity,
        price,
        isFeatured,
        amenities,
        categoryId,
        images: {
          deleteMany: {},
        },
      },
    });

    const product = await db.product.update({
      where: {
        id: params.productId,
      },
      data: {
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCT_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { hotelId: string; productId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!params.productId) {
      return new NextResponse("tempat id dibutuhkan", { status: 400 });
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

    const product = await db.product.deleteMany({
      where: {
        id: params.productId,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCT_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
