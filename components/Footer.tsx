import Link from "next/link"
import Logo from "./Logo"
import FooterMenuList from "./FooterMenuList"

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const blogLinksData = [
    { label: "About MNTN", url: "/" },
    { label: "Contributors & Writers", url: "/" },
    { label: "Write For Us", url: "/" },
    { label: "Contact Us", url: "/" },
    { label: "Privacy Policy", url: "/" },
  ]

  const moreLinksData = [
    { label: "The Team", url: "/" },
    { label: "Jobs", url: "/" },
    { label: "Press", url: "/" },
  ]

  return (
    <footer className="py-[100px]">
      <div className="wrapper flex items-stretch justify-between">
        <div className="max-w-[360px] w-full flex flex-col">
          <div>
            <Logo />

            <p className="font-bold my-6">
              Get out there & discover your next slope, mountain & destination!
            </p>
          </div>

          <p className=" font-medium opacity-[0.5] mt-auto">
            Copyright 2023 MNTN, Inc. Terms & Privacy
          </p>
        </div>

        <div className="flex max-w-[566px] w-full justify-between gap-8">
          <FooterMenuList data={blogLinksData} heading="More on the Blog" />

          <FooterMenuList data={moreLinksData} heading="More on MNTN" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
