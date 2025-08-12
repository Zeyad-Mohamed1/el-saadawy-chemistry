"use client";
import Image from "next/image";

const words = ["شرح", "تمارين", "مراجعات", "تجهيز للإمتحان"];

const WhyUs = () => {
  return (
    <>
      <div className="w-full h-[850px] lg:h-[500px] bg-gradient-to-br from-primary via-primary/95 to-secondary/80 relative overflow-hidden">
        <Image
          src={"/stars.png"}
          fill
          className="object-cover w-full h-full opacity-60"
          alt="Stars background"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"></div>

        <div className="absolute inset-0 flex items-center justify-around mx-auto py-4 md:flex-row flex-col max-w-7xl">
          <div className="flex-1 flex items-center justify-center sm:w-full md:w-1/2">
            <Image
              src="/hero.png"
              alt="Hero image"
              width={400}
              height={300}
              className="object-contain max-sm:h-[30rem] drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>

          <div className="flex-1 flex flex-col gap-4 items-center justify-center w-full md:w-1/2">
            {words.map((word, index) => (
              <div
                key={index}
                className="custom-button flex items-center justify-center text-3xl relative w-[80%] md:w-[40%] py-4 bg-white/95 text-primary font-bold border-2 border-secondary/20 rounded-full outline-none shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wave_container border-transparent">
        <div className="wave wave-1 border-transparent"></div>
        <div className="wave wave-2 border-transparent"></div>
        <div className="wave wave-3 border-transparent"></div>
        <div className="wave wave-4 border-transparent"></div>
      </div>
    </>
  );
};

export default WhyUs;
