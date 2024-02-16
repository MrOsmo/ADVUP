import React from 'react'
import scss from "./Welcome.module.scss"
import WelcomeLogo from "../../../assets/png/welcome.png"

import BrandOne from "../../../assets/brand1.svg"
import BrandTwo from "../../../assets/brand2.svg"
import BrandThree from "../../../assets/brand3.svg"
import BrandFour from "../../../assets/brand4.svg"
import BrandFive from "../../../assets/brand5.svg"
import BrandSix from "../../../assets/brand6.svg"
import BrandSeven from "../../../assets/brand7.svg"

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import symbol from "../../../assets/symbols/welcome-symbol.svg"

const Welcome = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed')
      },
    },
  )
  return (
    <section className={scss.welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.add}>
            <div className={scss.headings}>
              <p>Рекламное агенство ADVUP</p>
              <h1>Новый поток клиентов<br /> Вашему продукту</h1>
            </div>
            <button>Приступим</button>
          </div>

          <div className={scss.symbol}>
            <img src={symbol} alt="Symbol" />
          </div>

          <div className={scss.logo}>
            <img src={WelcomeLogo} alt="WelcomeLogo" />
          </div>
          

          <div className={scss.brands}>
            <div className={scss.background}>
              <div className={scss.background_brands} ref={sliderRef}>
                <img className="keen-slider__slide" src={BrandOne} alt="brandOne" />
                <img className="keen-slider__slide" src={BrandTwo} alt="brandTwo" />
                <img className="keen-slider__slide" src={BrandThree} alt="brandThree" />
                <img className="keen-slider__slide" src={BrandFour} alt="brandFour" />
                <img className="keen-slider__slide" src={BrandFive} alt="brandFive" />
                <img className="keen-slider__slide" src={BrandSix} alt="brandSix" />
                <img className="keen-slider__slide" src={BrandSeven} alt="brandSeven" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Welcome