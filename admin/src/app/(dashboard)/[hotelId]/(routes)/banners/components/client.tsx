"use client";

import { Banner } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { BannerColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface BannerClientProps {
  data: BannerColumn[];
}

export const BannerClient: React.FC<BannerClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center  justify-between bg-orange-400 p-5 shadow-md rounded-b-3xl">
        <Heading
          title={`Banner (${data.length})`}
          description="setting banner for Lodging Place"
        />
        <Button onClick={() => router.push(`/${params.hotelId}/banners/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <div className=" space-y-4 px-10 pb-14">
        {" "}
        <DataTable data={data} columns={columns} searchKey="label" />
        <Heading title="API" description="API for Banners" />
        <Separator />
        <ApiList namaIndikator="banners" idIndikator="bannerId" />
      </div>
    </>
  );
};
