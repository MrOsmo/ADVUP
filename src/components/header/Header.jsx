import React from 'react'
import scss from "./Header.module.scss"
import logo from "../../assets/logo.svg"
import { useState } from 'react'

const Header = () => {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false)
  const links = [
    {
      name: "Блогерам",
      link: "/"
    },
    {
      name: "Рекламодателям",
      link: "/"
    },
    {
      name: "Кейсы",
      link: "/"
    },
    {
      name: "Контакты",
      link: "/"
    }
  ]
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <div className={scss.logo}>
              <img src={logo} alt="Logo" />
            </div>
            <nav className={scss.nav}>
              <ul>
                {links.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className={scss.right}>
            <button>Оставить заявку</button>


            <div className={scss.burger__button}>
              <label>
                <input type="checkbox"
                  onChange={() => setIsBurgerMenu(!isBurgerMenu)}
                  checked={isBurgerMenu}
                />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>

            <div className={isBurgerMenu ? `${scss.burger_menu} ${scss.active}` : `${scss.burger_menu}`}>
              <nav>
                {links.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header