import React from 'react'

const Blog = () => {
  return (
    <div>

      <div className="flex justify-center items-center">
        <div className='container grid lg:grid-cols-2'>
          <div>
            <img src="assets/img/not found.svg" alt="" />
          </div>
          <div className='flex flex-col justify-center gap-y-2'>
            <div className="text-2xl lg:text-4xl text-center lg:text-start">Hozircha blog topilmadi!</div>
            <p className='px-6 lg:px-0'>
              Bunga sabab hali blog yozilmaganidan bo'lishi mumkun. Blog albatta yangi loyiha yaratilganida, yangiliklar paydo bo'lganda va loyiha nihoyasiga yetganda joylab boriladi. Blogda albatta dasturchilarda uchrab turadigon hatolar, yechimlar va ko'plab qiziq voqelar yoritib boriladi, shu bilan birga vertual olamdan ham chiqib turamiz.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Blog