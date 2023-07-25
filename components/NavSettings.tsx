import Image from "next/image"
import Link from "next/link"

interface NavSettingsProps {}

const NavSettings = ({}: NavSettingsProps) => {
  return (
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
      <Link href="" className="text-[18px] font-bold">
        Account
      </Link>
    </div>
  )
}

export default NavSettings
