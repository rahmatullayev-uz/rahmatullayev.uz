import React from 'react'

const Projects = () => {
  return (
    <div>

      <div className="flex justify-center items-center">
        <div className='container grid lg:grid-cols-2'>
          <div>
            <img src="assets/img/not found.svg" alt="" />
          </div>
          <div className='flex flex-col justify-center gap-y-2'>
            <div className="text-2xl lg:text-4xl text-center lg:text-start">Hozircha loyihalar topilmadi!</div>
            <p className='px-6 lg:px-0'>
              Bunga sabab hali tugallangan loyihalar mavjud emasligi sabab bo'lishi mumkun. Loyihalar albatta tayyorlanadi va ushbu sahifaga yuklanadi. Siz Loyiha bilan tanishib chiqishingiz va baholashingiz mumkun bo'ladi. Albatta barchasi vaqti soati bilan bo'ladi.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects