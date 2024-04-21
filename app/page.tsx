import Image from "next/image";

import { Icons } from "@/components";

import { ICONS, ME } from "@/assets";

import "./index.scss";

export default function Home() {
  return (
    <main className="home">
      <div className="home-presentation">
        <div className="home-img-container">
          <Image
            src={ME}
            className="home-img"
            alt={"Baptiste Marcon Avatar"}
            priority={false}
          />
        </div>
        <div>
          <div className="home-text-container">
            <h1 className="home-text-title">Front-End Developer</h1>
            <p className="home-text-presentation">
              Hey, I am Baptiste Marcon, Front-End developer based in France 📍
            </p>
          </div>
          <div className="home-icons-container">
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
