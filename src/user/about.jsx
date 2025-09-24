import { BiSolidBot } from "react-icons/bi"
import { BsCheckCircleFill } from "react-icons/bs"
import { FiPhoneCall } from "react-icons/fi"
import { GrBlog } from "react-icons/gr"
import { LiaClipboardListSolid } from "react-icons/lia"
import { SiAdguard, SiChromewebstore } from "react-icons/si"

const About = () => {
  return (
    <div className="z-0">
      <div className="w-full flex justify-center pb-8 shadow">
        <div className="container grid lg:grid-cols-2">
          <div className="">
            <img src={'assets/img/coder.svg'} alt="" className="" />
          </div>
          <div className="flex flex-col justify-center space-y-3 px-8">
            <div className="text-3xl font-semibold ">Rahmatullayev Sardor <div className="badge badge-soft">Dasturiy injiner</div></div>
            <p>
              Assalomu aleykum, mening ismim Sardor. Hozirda rivojlanib borayotgan zamonda hayotni internetsiz tassavur qilib bo'lmaydi. Internet tarmog'i yordamida siz telegram, instagram, youtube yoki shunga o'xshash ilovalarga kirasiz. Men aynan mana shunday saytlar yaratuvchi dasturchiman. 
            </p>
            <div className="flex flex-col lg:flex-row gap-y-2 gap-x-3">
                <div className="btn btn-neutral"> <FiPhoneCall /> Bog'lanish</div>
                <div className="btn btn-outline"> <LiaClipboardListSolid /> Loyihalar</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full flex flex-col items-center bg-neutral-100 py-8 lg:py-12 shadow z-0">
        <div className="text-center text-3xl font-semibold py-4 flex items-center gap-x-2"> <SiAdguard /> Taklif etaman</div>
        <div className="container grid lg:grid-cols-2 py-3 px-6 gap-x-8 gap-y-8">

          <div className="card z-0 bg-neutral-800 px-8 lg:px-16 py-6 text-white shadow space-y-2">
            <div className="text-2xl font-semibold flex items-center gap-x-2"> <SiChromewebstore /> Web Sayt</div>
            <p>
              Web sayt hozirda ko'plab sohalardagi insonlarga kerak bo'layapti. Misol uchun tadbirkor o'z brendini vebsayt yordamida olib chiqadi, doktorlar va aptekachilar navbatlarni onlayn tashkillaydi va mahsulotlarini onlayn sotadi. Sizga ham mana shunday turdagi sayt kerak bo'lsa menga murojat qilishingiz mumkun.
            </p>
            <div className="flex flex-col lg:flex-row gap-x-2 gap-y-2">
              <button className="btn btn-soft font-semibold"> <LiaClipboardListSolid /> Loyihalar</button>
              <button className="btn btn-outline"> <BsCheckCircleFill /> Buyurtma berish</button>
            </div>
          </div>

          <div className="card bg-white px-8 lg:px-16 py-6 shadow space-y-2">
            <div className="text-2xl font-semibold flex items-center gap-x-2"> <BiSolidBot /> Telegram Bot</div>
            <p>
              Telegram bot yordamida tadbirkorlar va boshqa soha vakillari ham daromad qilishmoqda. Telegramda ko'plab konkurslar yaratiladi, onlayn magazinlar tayyorlanadi va onlayn do'konni telergam orqali ham tayyorlasa bo'ladi. Sizga ham telegram bot kerak bo'lsa menga murojat qilishingiz mumkun.
            </p>
            <div className="flex flex-col lg:flex-row gap-x-2 gap-y-2">
              <button className="btn btn-neutral font-semibold w-full lg:w-auto"> <LiaClipboardListSolid /> Loyihalar</button>
              <button className="btn btn-outline w-full lg:w-max"> <BsCheckCircleFill /> Buyurtma berish</button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full flex justify-center py-8 shadow">
        <div className="container grid lg:grid-cols-2">
          <div>
            <img src="assets/img/languages.svg" alt="" />
          </div>
          <div className="flex flex-col justify-center space-y-3 px-8">
            <div className="text-3xl font-semibold ">Universal Dasturchi <div className="badge badge-soft">Maqsad</div></div>
            <p>
              Men oldimga judda katta maqsad qo'yganman. Barcha dasturchilar ma'lum bir sohani o'rganishga harakat qilishadi. Suniy intelekt rivojlanayotganini hisobga oladigon bo'lsak dasturchilar dasturchi maqomini yo'qotmoqda! Men aynan dasturchi maqomini ushlab qolish maqsadida dasturlashning barcha yo'nalishlarida eng yaxshi dasturchi bo'lmoqchiman
            </p>
            <div className="flex flex-col lg:flex-row gap-y-2 gap-x-3">
                <div className="btn btn-neutral"> <GrBlog /> Blog</div>
                <div className="btn btn-outline"> <LiaClipboardListSolid /> Loyihalar</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="w-full flex justify-center py-8 bg-neutral-100">
        <div className="container flex-col lg:flex lg:flex-row-reverse py-8">
          <div className="lg:basis-1/2">
            <img src="assets/img/team-work.png" alt="" />
          </div>
          <div className="flex flex-col justify-center space-y-3 px-8 lg:basis-1/2">
            <div className="text-3xl font-semibold ">Jamoaviy ish <div className="badge justify-center badge-neutral">Ishga kirish</div></div>
            <p>
              Menga o'z ustimda ishlash va samarali yangi texnalogiyalarni o'rganish uchun jamoviy ishlash kerak bo'ladi. Shuning uchun ham menga ishga kirish yoki jamoa tuzib jamoa bilan ishlash kerak bo'ladi. Agar sizga jamoa kerak bo'lsa yoki jamoada bo'sh joy bo'lsa menga murojat qiling. Birgalikda freelancer saytlardan ish olib jamoaviy tugatishga harakat qilamiz va kamchiliklarimizni to'g'ralshga harakat qilamiz.
            </p>
            <div className="flex flex-col lg:flex-row gap-y-2 gap-x-3">
                <div className="btn btn-neutral"> <FiPhoneCall /> Bog'lanish</div>
                <div className="btn btn-outline"> <LiaClipboardListSolid /> Loyihalar</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About