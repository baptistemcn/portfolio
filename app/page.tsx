import Image from "next/image";

import { ICONS, ME } from "@/assets";
import { Icons } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-row justify-center items-center">
          <Image
            src={ME}
            className="max-w-36 sm:max-w-64 md:max-w-96 lg:max-w-full xl:max-w-full 2xl:max-w-full"
            alt={"Baptiste Marcon Avatar"}
            priority={false}
          />
        </div>
        <div>
          <div className="flex flex-col justify-center items-center mx-8">
            <h1 className="my-16 text-center text-3xl">Front-End Developer</h1>
            <p className="text-center text-2xl">
              Hey, I am Baptiste Marcon, Front-End developer based in France 📍
            </p>
          </div>
          <div className="flex flex-row justify-center items-center my-8">
            {ICONS.map((icon, index) => (
              <Icons
                key={index}
                alt={icon.name}
                href={icon.href}
                src={icon.img}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
