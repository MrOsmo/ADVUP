import React from 'react'
import scss from "./Footer.module.scss"
import logo from "../../assets/black-logo.svg"
import email from "../../assets/email.svg"
import line from "../../assets/footer-line.svg"
import twitter from "../../assets/twitter.svg"
import vk from "../../assets/vk.svg"
import telegram from "../../assets/telegram.svg"
import facebook from "../../assets/facebook.svg"
import twitch from "../../assets/twitch.svg"
import instagram from "../../assets/instagram.svg"

const Footer = () => {
  const links = [
    {
      name: "Блогерам",
    },
    {
      name: "Рекламодателям"
    },
    {
      name: "Пользовательское соглашение"
    },
    {
      name: "Наши кейсы"
    },
    {
      name: "Помощь"
    }
  ]
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <img src={logo} alt="Logo" />
            <div className={scss.button}>
              <p>Остались вопросы?</p>
              <button>
                <img src={email} alt="Email" /> Почта
              </button>
            </div>
          </div>

          <p>С другой стороны рамки и место обучения кадров позволяет<br />
            оценить значение направлений прогрессивного развития!</p>

          <ul>
            {links.map((item, index) => (
              <li key={index}>
                <a href="">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <img className={scss.line} src={line} alt="Footer-Line" />

          <div className={scss.copyright}>
            <p>© 2024 Elcho911. All rights reserved.</p>
            <div className={scss.social_media}>
              <img src={twitter} alt="Twitter" />
              <img src={vk} alt="VK" />
              <img src={telegram} alt="Telegram" />
              <img src={facebook} alt="Facebook" />
              <img src={twitch} alt="Twitch" />
              <img src={instagram} alt="Instagram" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer