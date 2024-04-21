import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import "./icon.scss";

interface IconsProps {
  src: StaticImageData;
  href: string;
  alt: string;
}

export const Icons = (props: IconsProps) => {
  const { src, href, alt } = props;

  return (
    <Link {...{ href }} target="_blank" rel="noreferrer" className="icons">
      <Image {...{ src, alt }} className="icons-img" />
    </Link>
  );
};
