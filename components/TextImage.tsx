import Image from "next/image"
import Link from "next/link"

interface TextImageProps {
  reverse?: boolean
  number?: string
  topText?: string
  heading?: string
  desc?: string
  link?: string
  linkLabel?: string
  imgUrl: string
  imgAlt: string
}

const TextImage = ({
  number = "01",
  topText = "Top Text",
  heading = "Heading",
  desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ut, consequuntur dignissimos ex rem earum porro aliquid unde cupiditate non delectus, quo voluptatibus nisi minus rerum reiciendis. Excepturi, neque sit.",
  link = "/",
  linkLabel = "Read More",
  reverse = false,
  imgUrl = "",
  imgAlt = "Image",
}: TextImageProps) => {
  return (
    <section className="relative py-[100px]">
      <div
        className={`wrapper gap-[100px] items-start flex ${
          reverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="flex-1 relative">
          <p className="text-[240px] leading-[1] opacity-20 absolute top-0 left-[-8px]">
            {number}
          </p>

          <div className="max-w-[615px] w-full ml-auto pt-[80px] flex flex-col gap-[24px] text-white">
            <div className="flex items-center gap-[24px] text-accent">
              <div className=" bg-accent max-w-[72px] w-full h-0.5" />

              <p className=" tracking-[6px] uppercase font-extrabold w-fit">
                {topText}
              </p>
            </div>

            <h2 className=" text-[64px] leading-[1.1] font-semibold font-chronicle">
              {heading}
            </h2>

            <p>{desc}</p>

            <Link className="flex items-center gap-4 text-accent" href={link}>
              <span className="font-bold ">{linkLabel || "Link Label"}</span>
              <Image
                className="w-6 h-4 object-contain"
                width={24}
                height={16}
                alt="Arrow Downward"
                src="/img/iconnavigationarrow-downward-24px1.svg"
              />
            </Link>
          </div>
        </div>

        <Image width={566} height={720} alt={imgAlt} src={imgUrl} />
      </div>
    </section>
  )
}

export default TextImage
