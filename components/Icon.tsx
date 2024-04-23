import Image from "next/image";
import Link from "next/link";

import { IconProps } from "@/types";

export const Icons = (props: IconProps) => {
  const { src, href, alt } = props;

  return (
    <Link
      {...{ href }}
      target="_blank"
      rel="noreferrer"
      className="p-4 m-4 rounded-xl bg-gray-200"
    >
      <Image {...{ src, alt }} className="max-w-16 max-h-16" />
    </Link>
  );
};
