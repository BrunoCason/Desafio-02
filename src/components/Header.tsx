import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import UserBtn from "./UserBtn"

type NavItem = {
  text: string,
  link: string,
}

export default function Header() {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [navBarActive, setNavBarActive] = useState(false);

  const { pathname } = useLocation()

  useEffect(() => {
    function handleResize() {
      const width = document.documentElement.clientWidth

      if (width < 768) {
        setHamburgerActive(true)
      } else {
        setHamburgerActive(false)

        if (navBarActive) setNavBarActive(false)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [navBarActive])

  const listItems: NavItem[] = [{text: 'Home', link: '/'}, {text: 'Register', link: '/plant-registration'}, {text: 'Products', link: '/products'}, {text: 'About us', link: '/about-us'}]

  return (
    <header className="bg-wisper flex justify-center relative z-30">
      <div className="container flex justify-between items-center h-88px px-10 sm:px-14 lg:px-24">
        <a href="/">
          <img src="/src/assets/logo-header.svg" alt="plantPeace" />
        </a>

        <div className={`w-full bg-black opacity-70 fixed top-0 bottom-0 left-0 z-40 ${navBarActive ? 'visible' : 'invisible'}`} onClick={() => setNavBarActive(false)}></div>
  
        <nav className={`bg-gray-plant fixed z-50 top-0 -right-64 h-full w-60 flex flex-col items-center justify-center gap-10 transition-transform md:block md:static md:w-auto md:h-auto md:bg-opacity-0 ${navBarActive && '-translate-x-64'}`}>
          {hamburgerActive && <UserBtn />}
          
          <ul className="flex flex-col md:flex-row">
            {
              listItems.map((item) => (
                <li key={item.text}>
                  <a href={item.link} className={`font-raleway font-semibold py-5 px-8 block md:font-normal hover:text-light-green-200 ${item.link === pathname ? 'text-light-green-200' : 'text-lunar-green'}`}>{item.text}</a>
                </li>
              ))
            }
          </ul>
        </nav>

        {!hamburgerActive && <UserBtn />}

        {hamburgerActive && (
          <button onClick={() => setNavBarActive(true)}>
            <img src="/src/assets/menu-icon.svg" alt="menu" />
          </button>
        )}
      </div>
    </header>
  )
}
