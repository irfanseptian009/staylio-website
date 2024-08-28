import db from "@/lib/db";
import { ProductClient } from "./components/client";
import { ProductColumn } from "./components/columns";

import { format } from "date-fns";
import { formatter } from "@/lib/utils";

const ProductsPage = async ({ params }: { params: { hotelId: string } }) => {
  const products = await db.product.findMany({
    where: {
      hotelId: params.hotelId,
    },
    include: {
      category: true,
    },
  });

  const formattedProducts: ProductColumn[] = products.map((item) => ({
    id: item.id,
    name: item.name,
    city: item.city,
    amenities: item.amenities,
    overview: item.overview,
    isFeatured: item.isFeatured,
    price: formatter.format(item.price.toNumber()),
    latitude: formatter.format(Number(item.latitude)),
    longitude: formatter.format(Number(item.longitude)),

    capacity: formatter.format(Number(item.capacity)),
    category: item.category.name,
  }));

  return (
    <div className="flex-col bg-gray-200">
      <div className="flex-1 space-y-4 px-8">
        <ProductClient data={formattedProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
