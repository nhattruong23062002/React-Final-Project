import React from 'react'
import Main from '../component/layout/Main/Main'
import Introduce from '../component/Introduce'
import Offer from '../component/Offer'
import InputValidate from '../component/Input'
import { AiTwotoneMail } from "react-icons/ai";
const HomePage = () => {
  return (
    <div className='homePages'>
        <div className="container">
            <Introduce/>
        </div>
        <div className="home__offer">
            <div className="container">
              <h1>What We Offer</h1>
              <Offer customClass='customClassOffer' customWrapOffer='customWrapTextOffer' customClassCol={8}/>
            </div>
        </div>
        <div className="subscribe">
          <div className="container">
            <h1>Subscribe to Our Newsletter</h1>
            <p>Do not want to miss news, updates, note and any offer on our products, then please subscriber to our mailling list.</p>
        <InputValidate placeholderName='Your name' placeholderEmail='Your email address' placeholderPhone='Your Mobile phone' customWrapperInput='wrapperInputHome' customInput='InputHome' labelButton='Subcribe Email List' cuttomIconButon={<AiTwotoneMail/>} customClassBtn='inputHome' errorMassageName='errorMassageNameHome' errorMassageEmail='errorMassageEmailHome' errorMassagePhone='errorMassagePhoneHome' customClassCol={6} />
          </div>
        </div>

    </div>
  )
}

export default HomePage