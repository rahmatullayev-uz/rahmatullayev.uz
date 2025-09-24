import { useState } from "react"
import { useTranslation } from "react-i18next"
import { BiMoon } from "react-icons/bi"
import { FaRegUser } from "react-icons/fa"
import { FiPhoneCall } from "react-icons/fi"
import { GrBlog } from "react-icons/gr"
import { HiOutlineMenuAlt2 } from "react-icons/hi"
import { LiaClipboardListSolid } from "react-icons/lia"
import { SiGithub, SiInstagram, SiLinkedin, SiTelegram } from "react-icons/si"
import { Outlet } from "react-router"

const App = () => {
  const [menu, setMenu] = useState(false)
  const [t, i18n] = useTranslation()
  

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const current = () => {
    if (i18n.language == 'uz') {
      return "🇺🇿 O'zbekcha"
    } else if (i18n.language == 'ru') {
      return "🇷🇺 Русский"
    } else if (i18n.language == 'en') {
      return "🇺🇸 English"
    } else {
      changeLanguage('uz')
      return "🇺🇿 O'zbekcha"
    }
  }

  return (
    <div>
      {/* Navbar for Desktop */}
      <div className="hidden lg:flex justify-center shadow !bg-white text-black sticky top-0 z-10">
        <div className="navbar bg-white min-h-0 py-0 container">
          <div className="navbar-start text-xl">
            <div className="font-semibold">Rahmatullayev</div>
          </div>

          <div className="hidden lg:navbar-center">
            <ul className="menu menu-horizontal gap-x-0.5">
              <li><a href="/about" className={location.pathname == '/about' ? "menu-active gap-x-1" : "gap-x-1"}><FaRegUser /> {t('about')}</a></li>
              <li><a href="/blog" className={ location.pathname == "/blog" ? "menu-active gap-x-1" : "gap-x-1"}><GrBlog /> {t('blog')}</a></li>
              <li><a href="/projects" className={ location.pathname == "/projects" ? "menu-active gap-x-1" : "gap-x-1"}><LiaClipboardListSolid /> {t('projects')}</a></li>
              <li><a href="/contact-me" className={ location.pathname == "/contact-me" ? "menu-active gap-x-1" : "gap-x-1"}><FiPhoneCall /> {t('contactme')}</a></li>
            </ul>
          </div>

          <div className="navbar-end">
            <ul className="menu menu-horizontal gap-x-2">
              <li>
                <details>
                  <summary className="font-semibold border-[0.1px]"><div className="text-neutral-700">{ current() }</div></summary>
                  <ul className="p-2 bg-gray-50 w-max max-w-[300px] shadow-xl">
                    <li><a onClick={() => changeLanguage('en')} className="flex">🇺🇸 English</a></li>
                    <li><a onClick={() => changeLanguage('ru')}>🇷🇺 Русский</a></li>
                    <li><a onClick={() => changeLanguage('uz')}>🇺🇿 O'zbekcha</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navbar for Mobile */}
      <div className="lg:hidden bg-white sticky top-0 z-10">
        <div className="flex justify-between items-center py-0 min-h-0 shadow px-2">
          <div className="ps-1.5">
            <div onClick={() => setMenu(!menu)}>
              <HiOutlineMenuAlt2 size={26} />
            </div>
          </div>
          <div className="">
            <ul className="menu menu-horizontal gap-x-1 z-10">
              <li>
                <details>
                  <summary>{ current() }</summary>
                  <ul className="p-2 bg-gray-200 z-10 w-max max-w-[300px] shadow text-black">
                    <li><a onClick={() => changeLanguage('en')}>🇺🇸 English</a></li>
                    <li><a onClick={() => changeLanguage('ru')}>🇷🇺 Русский</a></li>
                    <li><a onClick={() => changeLanguage('uz')}>🇺🇿 O'zbekcha</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-2 z-0">
        <div className={`${menu? 'hidden' : 'block z-0'}`}>
          <Outlet />
        </div>

        <div className={`${menu? 'block' : 'hidden'} z-0`}>
          <div className="xl:hidden">
            <ul className="menu menu-lg w-full z-0">
              <li><a href="/about" className={ location.pathname == "/about" ? "menu-active" : ""}><FaRegUser /> {t('about')}</a></li>
              <li><a href="/blog" className={ location.pathname == "/blog" ? "menu-active" : ""}><GrBlog /> {t('blog')}</a></li>
              <li><a href="/projects" className={ location.pathname == "/projects" ? "menu-active" : ""}><LiaClipboardListSolid /> {t('projects')}</a></li>
              <li><a href="/contact-me" className={ location.pathname == "/contact-me" ? "menu-active" : ""}><FiPhoneCall /> {t('contactme')}</a></li>
            </ul>
            
            <div className="absolute bottom-2.5">
              <ul className="grid grid-cols-4 w-lvw">
                <li className="text-center">
                  <a href="https://github.com/rahmatullayev-uz" className="btn btn-xl bg-gray-200">
                    <SiGithub />
                  </a>
                </li>
                <li className="text-center">
                  <a href="https://t.me/rahmatullayev_uz" className="btn btn-xl bg-gray-200">
                    <SiTelegram className="text-blue-500" />
                  </a>
                </li>
                <li className="text-center">
                  <a href="https://instagram.com/rahmatullayev_dev" className="btn btn-xl bg-gray-200">
                    <SiInstagram className="text-pink-700" />
                  </a>
                </li>
                <li className="text-center">
                  <a href="https://www.linkedin.com/in/rahmatullayev" className="btn btn-xl bg-gray-200">
                    <SiLinkedin className="text-blue-400" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden xl:block z-0">
            <Outlet />
          </div>
        </div>
      </div>

    </div>
  )
}

export default App