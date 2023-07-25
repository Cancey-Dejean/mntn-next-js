import Link from "next/link"

interface LogoProps {}

const Logo = ({}: LogoProps) => {
  return (
    <Link
      href="/"
      className="text-[38px] leading-[1] font-chronicle flex items-center"
    >
      <span>M</span>
      <span>N</span>
      <span>T</span>
      <span>N</span>
    </Link>
  )
}

export default Logo
