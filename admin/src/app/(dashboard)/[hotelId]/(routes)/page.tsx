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

  return (
    <>
      <div className="p-3 bg-gray-200">Active Brand: {hotelId?.name}</div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <h1
          className="text-4xl font-bold text-gray-800   
 mb-4"
        >
          Coming Soon
        </h1>
        <p className="text-lg text-gray-600">
          This Page For Booking Information will be continued later.
        </p>
      </div>
    </>
  );
};

export default DashboardPage;
