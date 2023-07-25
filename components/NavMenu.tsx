import Link from "next/link"

interface NavMenuProps {}

const NavMenu = ({}: NavMenuProps) => {
  const navLinksData = [
    { label: "Equipment", url: "/" },
    { label: "About us", url: "/" },
    { label: "Blog", url: "/" },
  ]

  return (
    <nav>
      <ul className="flex items-center gap-10">
        {navLinksData.map((link, index) => (
          <li key={index}>
            <Link href={link.url} className="text-[18px] font-bold ">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavMenu
