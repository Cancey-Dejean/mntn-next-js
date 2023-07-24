import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative">
      <header className="fixed top-0 left-0 w-full py-[64px] z-10">
        <div className="wrapper-wide items-center flex justify-between gap-2">
          <Link href="/" className="text-[32px]">
            <span>M</span>
            <span>N</span>
            <span>T</span>
            <span>N</span>
          </Link>

          <nav className="">
            <ul className="flex items-center gap-10 [&_li_a]:font-bold [&_li_a]:text-[18px]">
              <li>
                <Link href="/">Equipment</Link>
              </li>
              <li>
                <Link href="/">About us</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-2 [&_a]:text-[18px] [&_a]:font-bold">
            <Link href="/">
              <Image
                className="relative w-6 h-6"
                height={24}
                width={24}
                alt=""
                src="/img/icons-general--cart.svg"
              />
            </Link>

            <Link href="">Account</Link>
          </div>
        </div>
      </header>

      <section className="relative pt-[287px] pb-[800px] mb-[-200px] ">
        <img
          src="/img/hero.jpg"
          alt=""
          width={1920}
          height={1505}
          className="w-full object-cover absolute top-0 left-0 z-[0]"
        />
        <div className="wrapper-wide flex items-center justify-between gap-5 relative">
          <div className="flex self-start justify-start gap-[24px] relative [transform:_rotate(90deg)] [transform-origin:0_0] top-[110px] left-[24px]">
            <p className="">Follow us</p>
            <img
              className=" w-6 h-6 [transform:_rotate(-90deg)]"
              alt=""
              src="/img/instagram.svg"
            />
            <img
              className=" w-6 h-6 [transform:_rotate(-90deg)]"
              alt=""
              src="/img/twitter.svg"
            />
          </div>

          <div className="flex flex-col gap-8">
            <div className="relative bg-accent w-[72px] h-[2px]" />

            <h1 className=" text-[88px] leading-[100px] capitalize font-semibold font-chronicle-display inline-block max-w-[950px]">
              Be prepared for the Mountains and beyond!
            </h1>

            {/* <h1 className=" text-[88px] leading-[100px] capitalize font-semibold font-chronicle-display inline-block max-w-[950px]">
              Be prepared for the Mountains and beyond!
            </h1> */}

            <div className=" tracking-[6px] uppercase font-extrabold text-accent">
              A Hiking guide
            </div>
            <a
              className="[text-decoration:none] flex flex-row items-center justify-start gap-[16px] text-[inherit]"
              href="#"
            >
              <b className="">scroll down</b>
              <img
                className=" w-4 h-6"
                alt=""
                src="/img/iconnavigationarrow-downward-24px.svg"
              />
            </a>
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

      <section className="relative py-[100px]">
        <div className="wrapper gap-[100px] items-start flex">
          <div className="flex-1 relative">
            <p className="text-[240px] leading-[1] opacity-20 absolute top-0 left-0">
              01
            </p>

            <div className="max-w-[632px] w-full ml-auto pt-[100px]">
              <div className="flex flex-col gap-[24px] items-start text-white">
                <div className=" bg-accent max-w-[72px] w-full h-0.5" />

                <p className=" tracking-[6px] uppercase font-extrabold">
                  GEt Started
                </p>

                <h2 className=" text-[64px] leading-[1.1] font-semibold">
                  What level of hiker are you?
                </h2>

                <p>
                  Determining what level of hiker you are can be an important
                  tool when planning future hikes. This hiking level guide will
                  help you plan hikes according to different hike ratings set by
                  various websites like All Trails and Modern Hiker. What type
                  of hiker are you – novice, moderate, advanced moderate,
                  expert, or expert backpacker?
                </p>
                <Link className="flex items-center gap-4 text-accent" href="/">
                  <span className="font-bold ">read more</span>
                  <Image
                    className="w-6 h-4 object-contain"
                    width={24}
                    height={16}
                    alt=""
                    src="/img/iconnavigationarrow-downward-24px1.svg"
                  />
                </Link>
              </div>
            </div>
          </div>

          <Image width={566} height={720} alt="" src="/img/image@2x.png" />
        </div>
      </section>

      <section className="relative py-[100px]">
        <div className="wrapper gap-[100px] items-start flex flex-row-reverse">
          <div className="flex-1 relative">
            <p className="text-[240px] leading-[1] opacity-20 absolute top-0 left-0">
              02
            </p>

            <div className="max-w-[632px] w-full ml-auto pt-[100px]">
              <div className="flex flex-col gap-[24px] items-start text-white">
                <div className=" bg-accent max-w-[72px] w-full h-0.5" />

                <p className=" tracking-[6px] uppercase font-extrabold">
                  GEt Started
                </p>

                <h2 className=" text-[64px] leading-[1.1] font-semibold">
                  What level of hiker are you?
                </h2>

                <p>
                  Determining what level of hiker you are can be an important
                  tool when planning future hikes. This hiking level guide will
                  help you plan hikes according to different hike ratings set by
                  various websites like All Trails and Modern Hiker. What type
                  of hiker are you – novice, moderate, advanced moderate,
                  expert, or expert backpacker?
                </p>
                <Link className="flex items-center gap-4 text-accent" href="/">
                  <span className="font-bold ">read more</span>
                  <Image
                    className="w-6 h-4 object-contain"
                    width={24}
                    height={16}
                    alt=""
                    src="/img/iconnavigationarrow-downward-24px1.svg"
                  />
                </Link>
              </div>
            </div>
          </div>

          <Image width={566} height={720} alt="" src="/img/image@2x.png" />
        </div>
      </section>

      <section className="relative py-[100px]">
        <div className="wrapper gap-[100px] items-start flex">
          <div className="flex-1 relative">
            <p className="text-[240px] leading-[1] opacity-20 absolute top-0 left-0">
              03
            </p>

            <div className="max-w-[632px] w-full ml-auto pt-[100px]">
              <div className="flex flex-col gap-[24px] items-start text-white">
                <div className=" bg-accent max-w-[72px] w-full h-0.5" />

                <p className=" tracking-[6px] uppercase font-extrabold">
                  GEt Started
                </p>

                <h2 className=" text-[64px] leading-[1.1] font-semibold">
                  What level of hiker are you?
                </h2>

                <p>
                  Determining what level of hiker you are can be an important
                  tool when planning future hikes. This hiking level guide will
                  help you plan hikes according to different hike ratings set by
                  various websites like All Trails and Modern Hiker. What type
                  of hiker are you – novice, moderate, advanced moderate,
                  expert, or expert backpacker?
                </p>
                <Link className="flex items-center gap-4 text-accent" href="/">
                  <span className="font-bold ">read more</span>
                  <Image
                    className="w-6 h-4 object-contain"
                    width={24}
                    height={16}
                    alt=""
                    src="/img/iconnavigationarrow-downward-24px1.svg"
                  />
                </Link>
              </div>
            </div>
          </div>

          <Image width={566} height={720} alt="" src="/img/image@2x.png" />
        </div>
      </section>

      <footer className="py-[100px]">
        <div className="wrapper flex items-stretch justify-between">
          <div className="max-w-[353px] w-full flex flex-col">
            <div>
              <a className="w-[108px]  text-13xl" href="/">
                <b className="tracking-[0.01em] capitalize">M</b>
                <b className="tracking-[0.01em] capitalize">N</b>
                <b className=" tracking-[0.01em] capitalize">T</b>
                <b className=" tracking-[0.01em] capitalize">N</b>
              </a>

              <p className="font-bold my-6">
                Get out there & discover your next slope, mountain &
                destination!
              </p>
            </div>

            <p className=" font-medium opacity-[0.5] mt-auto">
              Copyright 2019 MNTN, Inc. Terms & Privacy
            </p>
          </div>

          <div className="flex items-start">
            <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
              <h4 className="text-2xl leading-[32px] text-accent">
                More on The Blog
              </h4>

              <ul className="flex flex-col gap-[18px]">
                <li>
                  <Link className="leading-[32px] text-lg" href="/">
                    About MNTN
                  </Link>
                </li>
                <li>
                  <Link className="leading-[32px] text-lg" href="/">
                    Contributors & Writers
                  </Link>
                </li>

                <li>
                  <Link className="leading-[32px] text-lg" href="/">
                    Write For Us
                  </Link>
                </li>

                <li>
                  <Link className="leading-[32px] text-lg" href="/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="leading-[32px] text-lg" href="/">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
              <b className="relative text-5xl leading-[32px] text-accent">
                More on MNTN
              </b>
              <div className="relative leading-[32px] font-medium">
                The Team
              </div>
              <div className="relative leading-[32px] font-medium">Jobs</div>
              <div className="relative leading-[32px] font-medium">Press</div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
