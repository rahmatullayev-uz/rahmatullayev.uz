// import { useState } from "react"

import { useTranslation } from "react-i18next"

const ContactMe = () => {
  // const [contact, setContact] = useState('email')
  const [t] = useTranslation()

  return (
    <div>
      <div className="w-full flex justify-center px-2 lg:mt-8">
        <div className="max-w-[1200px] w-full lg:px-32 py-3 lg:py-8">
          <div className="text-center font-semibold text-xl lg:text-3xl">{ t('contactme') }</div>

          <div className="grid lg:grid-cols-5 mt-4 lg:mt-8 gap-x-6">
            <div className='py-2 lg:col-span-3'>
              <label htmlFor="">{ t("enter-question") }</label>
              <textarea name="" id="" className='textarea lg:textarea-lg w-full h-full'  placeholder={t("hold-question")}></textarea>
            </div>

            <div className='py-2 space-y-3 lg:col-span-2 mt-4 lg:mt-0'>
              <div className="w-full">
                <label htmlFor=""> { t('select-type') } </label>
                <select className="select lg:select-lg w-full">
                  <option value="">{ t("with-question") }</option>
                  <option value="">{ t("with-work") }</option>
                  <option value="">{ t("with-ignore") }</option>
                </select>
              </div>

              <div className="w-full">
                <label htmlFor=""> { t('how-contact') } </label>
                <select className='select lg:select-lg select-all w-full' id="content">
                  <option> { t('with-email') } </option>
                  <option> { t('with-instagram') } </option>
                  <option> { t('with-telegram') } </option>
                  <option> { t('with-linkedin') } </option>
                </select>
              </div>

              <div className="w-full">
                <label htmlFor=""> { t('enter-link') } </label>
                <input type="text" className='input input-lg w-full' id=""  placeholder={ t('enter-link') } />
              </div>

              <div className="w-full">
                <label htmlFor="">{ t('enter-name') }</label>
                <input type="text" className="input input-lg w-full" placeholder={ t('enter-name') } />
              </div>

              <div className="w-full gap-x-2 grid lg:grid-cols-2 gap-y-2">
                <button className="btn btn-error">{ t('delete') }</button>
                <button className="btn btn-success btn-outline">{ t('send') }</button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactMe