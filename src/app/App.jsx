import { useState } from "react"
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

  return (
    <div>
      <div className="hidden xl:flex px-[180px] shadow">
        <div className="navbar min-h-0 py-0">
          <div className="navbar-start">
            <div className="font-semibold">Rahmatullayev</div>
          </div>

          <div className="hidden xl:navbar-center">
            <ul className="menu menu-horizontal menu-sm gap-x-0.5">
              <li><a href="" className="gap-x-1 menu-active"><FaRegUser /> About</a></li>
              <li><a href="" className="gap-x-1"><GrBlog /> Blog</a></li>
              <li><a href="" className="gap-x-1"><LiaClipboardListSolid /> Projects</a></li>
              <li><a href="" className="gap-x-1"><FiPhoneCall />Contact Me</a></li>
            </ul>
          </div>

          <div className="navbar-end">
            <ul className="menu menu-horizontal gap-x-2">
              <li>
                <details>
                  <summary>English</summary>
                  <ul className="p-2 bg-gray-200">
                    <li><a href="">Russian</a></li>
                    <li><a href="">Uzbek</a></li>
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
                  <summary>English</summary>
                  <ul className="bg-gray-100 z-1">
                    <li><a href="">Uzbek</a></li>
                    <li><a href="">Russian</a></li>
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
        <ul className="menu menu-lg w-full">
          <li><a href="" className="menu-active"><FaRegUser /> About</a></li>
          <li><a href=""><GrBlog /> Blog</a></li>
          <li><a href=""><LiaClipboardListSolid /> Projects</a></li>
          <li><a href=""><FiPhoneCall /> Contact Me</a></li>
        </ul>
        
        <div className="absolute bottom-1.5">
          <ul className="grid grid-cols-4 w-lvw">
            <li className="text-center">
              <div className="btn btn-xl bg-gray-200">
                <SiGithub />
              </div>
            </li>
            <li className="text-center">
              <div className="btn btn-xl bg-gray-200">
                <SiTelegram className="text-blue-500" />
              </div>
            </li>
            <li className="text-center">
              <a className="btn btn-xl bg-gray-200">
                <SiInstagram className="text-pink-700" />
              </a>
            </li>
            <li className="text-center">
              <a href="" className="btn btn-xl bg-gray-200">
                <SiLinkedin className="text-blue-400" />
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default App