"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ProductColumn = {
  id: string;
  name: string;
  city: string;
  price: string;
  longitude: string;
  latitude: string;
  capacity: string;
  category: string;
  address: string;
  rating: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "city",
    header: "City",
  },

  {
    accessorKey: "price",
    header: "Rent price",
  },

  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "address",
    header: "Address",
  },

  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
