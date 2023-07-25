import Logo from "./Logo"
import NavMenu from "./NavMenu"
import NavSettings from "./NavSettings"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-[64px] z-10">
      <div className="wrapper-wide items-center flex justify-between gap-2">
        <Logo />

        <NavMenu />

        <NavSettings />
      </div>
    </header>
  )
}

export default Header
