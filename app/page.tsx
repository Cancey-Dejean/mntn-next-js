import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative">
      <header className="fixed top-0 left-0 w-full py-[64px] z-10">
        <div className="wrapper-wide flex justify-between gap-2">
          <Link href="/" className="">
            <span>M</span>
            <span>N</span>
            <span>T</span>
            <span>N</span>
          </Link>

          <nav className="">
            <ul className="flex items-center">
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

          <div className="flex items-center gap-2">
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

      <img
        src="/img/hero.jpg"
        alt=""
        width={1920}
        height={1505}
        className="w-full object-cover absolute top-0 left-0 z-[0]"
      />

      <section className="relative pt-[287px] pb-[800px]">
        <div className="wrapper-wide flex items-center justify-between gap-5 ">
          <div className="flex self-start justify-start gap-[24px] relative   [transform:_rotate(90deg)] [transform-origin:0_0] top-[70px] left-[24px]">
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
              <div className="overflow-hidden flex flex-col items-end justify-start gap-[40px]">
                <span className="">Start</span>
                <span className="">01</span>
                <span className="">02</span>
                <span className="">03</span>
              </div>
              <div className=" bg-gray w-[3px] h-60">
                <div className=" top-[0px] left-[0px] bg-wei w-[3px] h-[60px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="wrapper flex">
          <div className=" w-[782px] h-[542px]">
            <b className=" top-[0%] left-[0%] leading-[240px] opacity-[0.1]">
              01
            </b>
            <div className=" w-[80.82%] top-[calc(50%_-_168px)] right-[0%] left-[19.18%] overflow-hidden flex flex-col items-start justify-start gap-[27px] text-lg text-accent">
              <div className="flex flex-row items-center justify-start gap-[24px]">
                <div className=" bg-accent w-[72px] h-0.5" />
                <div className=" tracking-[6px] uppercase font-extrabold">
                  GEt Started
                </div>
              </div>
              <div className=" text-45xl font-semibold font-chronicle-display text-wei inline-block w-[555px]">
                What level of hiker are you?
              </div>
              <b className=" leading-[32px] inline-block text-wei w-[632px]">{`Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? `}</b>
              <a
                className="[text-decoration:none]  w-[127px] h-[22px] text-[inherit]"
                href="/"
              >
                <b className=" top-[0px] left-[0px]">read more</b>
                <img
                  className=" top-[3px] left-[103px] w-6 h-4"
                  alt=""
                  src="/iconnavigationarrow-downward-24px1.svg"
                />
              </a>
            </div>
          </div>
          <img
            className=" w-[566px] h-[720px] object-cover"
            alt=""
            src="/img/image@2x.png"
          />
        </div>

        <footer className="">
          <div className="wrapper flex items-start">
            <div className="flex-1">
              <a className="w-[108px]  text-13xl" href="/">
                <b className="tracking-[0.01em] capitalize">M</b>
                <b className="tracking-[0.01em] capitalize">N</b>
                <b className=" tracking-[0.01em] capitalize">T</b>
                <b className=" tracking-[0.01em] capitalize">N</b>
              </a>
              <p className="leading-[32px] ">
                Get out there & discover your next slope, mountain &
                destination!
              </p>
              <p className=" leading-[32px] font-medium opacity-[0.5]">
                Copyright 2019 MNTN, Inc. Terms & Privacy
              </p>
            </div>

            <div className=" flex flex-1">
              <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
                <b className="relative text-5xl leading-[32px] text-accent">
                  More on The Blog
                </b>
                <a
                  className="[text-decoration:none] relative leading-[32px] font-medium text-[inherit]"
                  href="/"
                >
                  About MNTN
                </a>
                <a
                  className="[text-decoration:none] relative leading-[32px] font-medium text-[inherit]"
                  href="/"
                >{`Contributors & Writers`}</a>
                <a
                  className="[text-decoration:none] relative leading-[32px] font-medium text-[inherit]"
                  href="/"
                >
                  Write For Us
                </a>
                <a
                  className="[text-decoration:none] relative leading-[32px] font-medium text-[inherit]"
                  href="/"
                >
                  Contact Us
                </a>
                <a
                  className="[text-decoration:none] relative leading-[32px] font-medium text-[inherit]"
                  href="/"
                >
                  Privacy Policy
                </a>
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
      </div>
    </main>
  )
}
