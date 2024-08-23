import Image from "next/image";
import thumbnail from "@/assets/thumbnail.png";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="p-6 sm:p-12 md:p-16 lg:px-18 lg:py-4 h-[250px] sm:h-[350px] md:h-[450px] w-full 2xl:h-[650px] bg-white flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          <div className="bg-black/90 absolute w-full h-full rounded-3xl" />
          <Image
            src={thumbnail}
            alt="Hotel Display"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-3xl opacity-70"
          />
        </div>
        {/* Text Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-start text-start ml-32  transform lg:translate-y-[-10%] 2xl:translate-y-[-16%]">
          {/* Large Heading */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-4xl 2xl:text-6xl font-extrabold leading-6">
            Vacation feels <br/> like home
          </h1>

          {/* Subtitle Text */}
          <p className="text-white text-lg md:text-xl lg:text-sm 2xl:text-lg mt-4 max-w-xl font-light">
            The most comfortable accommodation you can find in our <br/> website, spread all over the world
          </p>

          {/* Call to Action Button */}
          <button className="bg-[#FE6927] hover:bg-[#D9581F] text-white mt-8 py-3 px-6 2xl:translate-y-[120%] rounded-xl text-sm lg:text-sm transition duration-300">
            Book Now!
          </button>
        </div>
        
      </div>
    </main>
  );
}
