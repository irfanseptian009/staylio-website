"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ProductColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface ProductClientProps {
  data: ProductColumn[];
}

export const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center  justify-between bg-orange-400 p-5 shadow-md rounded-b-3xl">
        <Heading
          title={`Lodging Place/Rent (${data.length})`}
          description="Set Lodging Place"
        />
        <Button onClick={() => router.push(`/${params.hotelId}/products/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <div className=" space-y-4 px-10 pb-14 pt-5">
        {" "}
        <DataTable data={data} columns={columns} searchKey="label" />
        <Heading title="API" description="API for Banners" />
        <Separator />
        <ApiList namaIndikator="products" idIndikator="productId" />
      </div>
    </>
  );
};
