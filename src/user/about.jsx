import { BiSolidBot } from "react-icons/bi"
import { BsCheckCircleFill } from "react-icons/bs"
import { FiPhoneCall } from "react-icons/fi"
import { LiaClipboardListSolid } from "react-icons/lia"
import { SiAdguard, SiChromewebstore } from "react-icons/si"

const About = () => {
  return (
    <div>
      <div className="w-full flex justify-center pb-8">
        <div className="container grid lg:grid-cols-2">
          <div className="">
            <img src={'assets/img/coder.svg'} alt="" />
          </div>
          <div className="flex flex-col justify-center space-y-3 px-8">
            <div className="text-3xl font-semibold ">Rahmatullayev Sardor <div className="badge badge-soft">Dasturiy injiner</div></div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto nemo autem iure, dolorum, nulla, sed id velit reprehenderit facilis amet aperiam. Cupiditate repellendus repellat soluta veniam ipsa quaerat! Perspiciatis fugit consectetur, assumenda suscipit beatae natus tenetur qui in id saepe, commodi eaque, mollitia totam dolor? Natus, libero. Cupiditate, similique excepturi!
            </p>
            <div className="flex flex-col lg:flex-row gap-y-2 gap-x-3">
                <div className="btn btn-neutral"> <FiPhoneCall /> Bog'lanish</div>
                <div className="btn btn-outline"> <LiaClipboardListSolid /> Loyihalar</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full flex flex-col items-center bg-neutral-100 py-8">
        <div className="text-center text-3xl font-semibold py-4 flex items-center gap-x-2"> <SiAdguard /> Taklif etaman</div>
        <div className="container grid lg:grid-cols-2 p-3 gap-x-8 gap-y-4">

          <div className="card bg-neutral-800 px-8 lg:px-16 py-6 text-white shadow space-y-2">
            <div className="text-2xl font-semibold flex items-center gap-x-2"> <SiChromewebstore /> Web Sayt</div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsum amet, voluptates possimus ducimus voluptate placeat iusto est et tempore ratione, commodi aliquid perferendis, dolor veritatis nisi libero veniam quae quibusdam qui maiores doloremque sit officia! Aspernatur ratione deserunt tenetur.
            </p>
            <div className="flex flex-col lg:flex-row gap-x-2 gap-y-2">
              <button className="btn btn-soft font-semibold"> <LiaClipboardListSolid /> Loyihalar</button>
              <button className="btn btn-outline"> <BsCheckCircleFill /> Buyurtma berish</button>
            </div>
          </div>

          <div className="card bg-white px-8 lg:px-16 py-6 shadow space-y-2">
            <div className="text-2xl font-semibold flex items-center gap-x-2"> <BiSolidBot /> Telegram Bot</div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptas, distinctio veniam consequuntur cumque id tenetur quidem totam nemo, quod asperiores deserunt ipsa tempora dicta nisi ipsum iusto rerum cupiditate officia iste beatae nam debitis voluptates esse? Laboriosam, aut enim?
            </p>
            <div className="flex flex-col lg:flex-row gap-x-2 gap-y-2">
              <button className="btn btn-neutral font-semibold w-full lg:w-auto"> <LiaClipboardListSolid /> Loyihalar</button>
              <button className="btn btn-outline w-full lg:w-max"> <BsCheckCircleFill /> Buyurtma berish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About