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
      <div className="hidden xl:flex px-[180px] shadow !bg-white text-black">
        <div className="navbar min-h-0 py-0">
          <div className="navbar-start text-xl">
            <div className="font-semibold">Rahmatullayev</div>
          </div>

          <div className="hidden xl:navbar-center">
            <ul className="menu menu-horizontal gap-x-0.5">
              <li><a href="" className="gap-x-1 menu-active"><FaRegUser /> {t('about')}</a></li>
              <li><a href="" className="gap-x-1"><GrBlog /> {t('blog')}</a></li>
              <li><a href="" className="gap-x-1"><LiaClipboardListSolid /> {t('projects')}</a></li>
              <li><a href="" className="gap-x-1"><FiPhoneCall /> {t('contactme')}</a></li>
            </ul>
          </div>

          <div className="navbar-end">
            <ul className="menu menu-horizontal gap-x-2">
              <li>
                <details>
                  <summary className="font-semibold border-[0.1px]">{ current() }</summary>
                  <ul className="p-2 bg-gray-50 w-max max-w-[300px] shadow-xl">
                    <li><a onClick={() => changeLanguage('en')} className="flex">🇺🇸 English</a></li>
                    <li><a onClick={() => changeLanguage('ru')}>🇷🇺 Русский</a></li>
                    <li><a onClick={() => changeLanguage('uz')}>🇺🇿 O'zbekcha</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <button className="outline text-xl"><BiMoon /></button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="xl:hidden">
        <div className="navbar py-0 min-h-0 shadow">
          <div className="navbar-start ps-1.5">
            <div onClick={() => setMenu(!menu)}>
              <HiOutlineMenuAlt2 size={26} />
            </div>
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal gap-x-1">
              <li>
                <details>
                  <summary>{ current() }</summary>
                  <ul className="p-2 bg-gray-200 z-1 w-max max-w-[300px] shadow text-black">
                    <li><a onClick={() => changeLanguage('en')}>🇺🇸 English</a></li>
                    <li><a onClick={() => changeLanguage('ru')}>🇷🇺 Русский</a></li>
                    <li><a onClick={() => changeLanguage('uz')}>🇺🇿 O'zbekcha</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <button className="outline text-xl">
                  <BiMoon />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${menu? 'hidden' : 'block'}`}>
        <Outlet />
      </div>

      <div className={`${menu? 'block' : 'hidden'} z-0`}>
        <div className="xl:hidden">
          <ul className="menu menu-lg w-full">
            <li><a href="" className="menu-active"><FaRegUser /> {t('about')}</a></li>
            <li><a href=""><GrBlog /> {t('blog')}</a></li>
            <li><a href=""><LiaClipboardListSolid /> {t('projects')}</a></li>
            <li><a href=""><FiPhoneCall /> {t('contactme')}</a></li>
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
        <div className="hidden xl:block">
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default App