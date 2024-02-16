import React from 'react'
import scss from "./Case.module.scss"
import warriorImg from "../../../../assets/png/warrior.png"
import square from "../../../../assets/square.svg"
import line from "../../../../assets/line.svg"
import slideOne from "../../../../assets/png/warrior_small.png"
import slideTwo from "../../../../assets/png/soccer_player.png"
import slideThree from "../../../../assets/png/freefire.png"
import slideFour from "../../../../assets/png/vk.png"

import symbol1 from "../../../../assets/symbols/case-symbol.svg"
import symbol2 from "../../../../assets/symbols/case-symbol-2.svg"

import caseLine from "../../../../assets/symbols/case-line1.svg"
import caseLine2 from "../../../../assets/symbols/case-line2.svg"
import caseLine3 from "../../../../assets/symbols/case-line3.svg"
import caseLine4 from "../../../../assets/symbols/case-line4.svg"


import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const Case = () => {
  const animation = { duration: 5000, easing: (t) => t }

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  }
  )

  const sliderItems = [
    {
      name: "Игровой проект War Thunder",
      description: "Специальный проект с Моргенштерном",
      img: slideOne
    },
    {
      name: "Казино Stake x Drake ",
      description: "Азарт, Рэп, Реклама",
      img: slideTwo
    },
    {
      name: "Игровой проект Free Fire",
      description: "Уникальная рекламная компания",
      img: slideThree
    },
    {
      name: "VK Music",
      description: "Музыкальный сервис соц. сети ВКонтакте",
      img: slideFour
    },
  ]

  const rating = [
    {
      type: "Общее кол-во просмотров",
      icon: line
    },
    {
      type: "Лайков",
      icon: line
    },
    {
      type: "охваты"
    }
  ]

  return (
    <section className={scss.case}>
      <div className={scss.content}>
        <div className={scss.background}>
          <div className='container'>

            <div className={scss.middle}>
              <div className={scss.heading}>
                <h1>Наши кейсы</h1>
                <img src={warriorImg} alt="Warrior" />
              </div>

              <div className={scss.project}>
                <div className={scss.button}>
                  <button>🔥</button>
                  <button>Игры</button>
                  <button>Коллабарация</button>
                </div>

                <h1>Игровой проект<br />
                  War Thunder X ДУЛО</h1>
                <p>
                  Разнообразный и богатый опыт консультация с профессионалами из IT играет важную роль в формировании всесторонне сбалансированных нововведений. Значимость этих проблем настолько очевидна, что<br /> новая модель организационной.
                </p>
                <button>Подробнее</button>
              </div>
            </div>

            <div className={scss.rank}>
              <div className={scss.rating}>
                {rating.map((item, index) => (
                  <div key={index} className={scss.rank_container}>
                    <img className={scss.square} src={square} alt="square" />
                    <div className={scss.text}>
                      <p>{item.type}</p>
                      <p className={scss.col}>20.000+</p>
                    </div>
                    <img src={item.icon} className={scss.line} />
                  </div>
                ))}
              </div>
            </div>


            <div className={scss.slider}>
              <div ref={sliderRef} className={scss.sliding}>
                {sliderItems.map((item, index) => (
                  <div key={index} className={`${scss.slide_container} keen-slider__slide`}>
                    <div className={scss.slide}>
                      <h1>{item.name}</h1>
                      <p>{item.description}</p>
                    </div>
                    <img src={item.img} alt="Image" />
                  </div>
                ))}
              </div>
            </div>


            <div className={scss.symbols}>
              <img src={symbol1} alt="Symbol" />
              <img src={symbol2} alt="Symbol-2" className={scss.symbol_two} />
            </div>

            <div className={scss.lines}>
              <img src={caseLine} alt="case-line-1" className={scss.case_line} />
              <img src={caseLine2} alt="case-line-2" className={scss.case_line_two} />
              <img src={caseLine3} alt="case-line-3" className={scss.case_line_three} />
              <img src={caseLine4} alt="case-line-4" className={scss.case_line_four} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Case