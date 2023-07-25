import Link from "next/link"
interface FooterMenuItem {
  url: string
  label: string
}

interface FooterMenuListProps {
  data: FooterMenuItem[]
  heading?: string
}

const FooterMenuList = ({ data, heading = "Menu" }: FooterMenuListProps) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[18px]">
      {heading !== "" && (
        <h4 className="text-2xl leading-[32px] text-accent">{heading}</h4>
      )}

      <nav>
        <ul className="flex flex-col gap-[18px]">
          {data.map((link, index) => (
            <li key={index}>
              <Link className="leading-[32px] text-lg" href={link.url}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default FooterMenuList
