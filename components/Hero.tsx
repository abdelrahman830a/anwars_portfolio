import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "@/typing";
import { urlFor } from "@/sanity";

import Link from "next/link";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const pageInfoWithHeroImage = pageInfo as PageInfo;
  const [text, count] = useTypewriter({
    words: [
      `Hi, this is ${pageInfo?.name}`,
      ...pageInfo?.typewriter.map((text) => text),
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover object-top object"
        src={urlFor(pageInfoWithHeroImage?.heroImage).url()}
        alt="avatar"
      />

      <div className="z-20">
        <h2 className="text-gray-500 tracking-[8px] md:tracking-[15px] pb-2 text-sm uppercase animate-pulse">
          {pageInfo?.role}
        </h2>
        <h1 className="text-4xl lg:text-6xl font-semibold px-10 z-20">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5 animate-pulse">
          <Link href="#about">
            <button className="heroButtonClass">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButtonClass">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButtonClass">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButtonClass">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
