import Image from "next/image"
import Link from "next/link"
import React from "react"

interface HeroProps {}

const Hero = ({}: HeroProps) => {
  return (
    <section className="relative pt-[287px] pb-[800px] mb-[-400px] ">
      <Image
        src="/img/hero.jpg"
        alt=""
        width={1920}
        height={1900}
        className="w-full object-cover object-top absolute top-0 left-0 z-[0] h-full 3xl:object-center"
        priority={true}
      />

      <div className=" w-full h-[700px] absolute bottom-0 left-0 bg-hero-gradient"></div>

      <div className="wrapper-wide flex items-center justify-between gap-5 relative">
        <div className="flex self-start justify-start gap-[24px] relative [transform:_rotate(90deg)] [transform-origin:0_0] top-[60px] left-[24px]">
          <p className="">Follow us</p>
          <Image
            className=" w-6 h-6 object-contain [transform:_rotate(-90deg)]"
            alt=""
            width={24}
            height={24}
            src="/img/instagram.svg"
          />
          <Image
            className=" w-6 h-6 object-contain [transform:_rotate(-90deg)]"
            width={24}
            height={24}
            alt=""
            src="/img/twitter.svg"
          />
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-accent w-[72px] h-[2px]" />

          <h1 className="text-[88px] leading-[100px] font-chronicle capitalize max-w-[950px] font-semibold">
            Be prepared for the Mountains and beyond!
          </h1>

          <p className=" tracking-[6px] uppercase text-accent font-extrabold">
            A Hiking guide
          </p>

          <Link
            className="flex  items-center justify-start gap-[16px]"
            href="#"
          >
            <span className="leading-6">scroll down</span>
            <Image
              className=" w-4 h-6 object-cover"
              width={16}
              height={24}
              alt=""
              src="/img/iconnavigationarrow-downward-24px.svg"
            />
          </Link>
        </div>

        <div className=" flex flex-row items-center justify-start text-right">
          <div className="flex flex-row items-center justify-start gap-[32px]">
            <div className="overflow-hidden flex flex-col items-end justify-start gap-[40px] [&_span]:hover:cursor-pointer">
              <button type="button" className="">
                Start
              </button>
              <button type="button" className="">
                01
              </button>
              <button type="button" className="">
                02
              </button>
              <button type="button" className="">
                03
              </button>
            </div>

            <div className=" bg-gray w-[3px] h-60">
              <button type="button" className="bg-white w-full h-[25%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
