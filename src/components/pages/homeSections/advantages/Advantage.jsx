import React from 'react'
import scss from "./Advantage.module.scss"

import symbol from "../../../../assets/symbols/advantage-symbol.svg"
import symbol2 from "../../../../assets/symbols/advantage-symbol2.svg"
import symbol3 from "../../../../assets/symbols/advantage-symbol3.svg"
import symbol4 from "../../../../assets/symbols/advantage-symbol4.svg"
import symbol5 from "../../../../assets/symbols/advantage-symbol-5.svg"
import symbol6 from "../../../../assets/symbols/advantage-symbol6.svg"

const Advantage = () => {
  return (
    <section className={scss.advantage}>
      <div className="container">
        <div className={scss.content}>
          <h1>Наши преимущества</h1>

          <div className={scss.part_one}>
            <div className={scss.advantage_one}>
              <h1>Всегда выполняем<br />
                ваши запросы</h1>
              <p>Разнообразный и богатый опыт консультация с<br /> профессионалами из IT играет важную роль в формировании</p>
              <div className={scss.symbols}>
                <img src={symbol} alt="Symbol" className={scss.symbol_one} />
                <img src={symbol5} alt="Symbol-5" className={scss.symbol_five} />
              </div>
            </div>

            <div className={scss.advantage_two}>
              <h1>Профессиональный<br /> подход:</h1>
              <p>Рекламные агентства имеют опыт работы в разных отраслях<br /> и знают, как эффективно привлекать целевую аудиторию.</p>

              <div className={scss.symbols}>
                <img src={symbol3} alt="Symbol-2" className={scss.symbol_two} />
              </div>
            </div>

          </div>

          <div className={scss.part_two}>
            <div className={scss.advantage_three}>
              <h1>Креативность</h1>
              <div className={scss.symbols}>
                <img src={symbol2} alt="Symbol" className={scss.symbol_one} />
              </div>
            </div>

            <div className={scss.advantage_four}>
              <h1>Доступ к новейшим технологиям</h1>
              <p>Рекламные агентства обычно имеют доступ к самым<br /> передовым инструментам и технологиям в области<br /> маркетинга и рекламы.</p>

              <div className={scss.symbols}>
                <img src={symbol4} alt="Symbol" className={scss.symbol_one} />
                <img src={symbol6} alt="Symbol-2" className={scss.symbol_two} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantage