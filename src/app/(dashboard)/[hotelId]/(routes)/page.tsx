import db from "@/lib/db";

interface DashboardPageProps {
  params: { hotelId: string };
}

const DashboardPage = async ({ params }: DashboardPageProps) => {
  const hotelId = await db.hotel.findFirst({
    where: {
      id: params.hotelId,
    },
  });

  return <div>Active Hotel: {hotelId?.name}</div>;
};

export default DashboardPage;
