import Image from "next/image";
import thumbnail from "@/assets/thumbnail.png";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="p-6 sm:p-12 md:p-16 lg:p-24 h-[320px] sm:h-[420px] md:h-[520px] w-full 2xl:h-[810px] bg-red-500">
        <Image
          src={thumbnail}
          alt="Hotel Display"
          width={500} // Set the desired width
          height={300} // Set the desired height
          objectFit="cover"
          quality={100}
        />
      </div>
    </main>
  );
}
