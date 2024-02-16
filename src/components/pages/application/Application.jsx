import React from 'react'
import scss from "./Application.module.scss"
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

import symbol1 from "../../../assets/symbols/application-symbol.svg"
import symbol2 from "../../../assets/symbols/application-symbol2.svg"
import symbol3 from "../../../assets/symbols/application-symbol3.svg"
import symbol4 from "../../../assets/symbols/application-symbol4.svg"
import symbol5 from "../../../assets/symbols/application-symbol5.svg"
import symbol6 from "../../../assets/symbols/application-symbol6.svg"


const Application = () => {
  const [blogger, setBlogger] = useState(true)
  const [advertiser, setAdvertiser] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [comment, setComment] = useState("")


  const fetchData = async () => {
    const bloggerUrl = "https://api.elchocrud.pro/api/v1/d65b6e2d22c767001a5df72d2c25935b/blogger"
    const advertiserUrl = "https://api.elchocrud.pro/api/v1/c793bdc8a5cc5ee6f606d08d398ad701/advertiser"

    const newData = {
      name: name,
      email: email,
      phone: phone,
      comment: comment
    }

    if (blogger) {
      if (name === "" || email === "" || phone === "" || comment === "") {
        toast("Please fill out everything!")
      } else {
        toast("Your application has been sent!")
        try {
          const res = await axios.post(bloggerUrl, newData);
          console.log(res);
        } catch (error) {
          console.error(error);
        }
        setPhone("");
        setComment("");
        setEmail("");
        setName("");
      }
    } else if (advertiser) {
      if (name === "" || email === "" || phone === "" || comment === "") {
        toast("Please fill out everything!")
      } else {
        toast("Your application has been sent!")
        try {
          const res = await axios.post(advertiserUrl, newData);
          console.log(res);
        } catch (error) {
          console.error(error);
        }

        setPhone("");
        setComment("");
        setEmail("");
        setName("");
      }
    }

  }




  return (
    <section className={scss.application}>
      <div className={scss.background}>
        <div className="container">
          <div className={scss.content}>

            <div className={scss.symbols}>
              <img src={symbol1} alt="Symbol-1" className={scss.symbol_one} />
              <img src={symbol2} alt="Symbol-2" className={scss.symbol_two} />
              <img src={symbol3} alt="Symbol-3" className={scss.symbol_three} />
              <img src={symbol4} alt="Symbol-4" className={scss.symbol_four} />
              <img src={symbol5} alt="Symbol-5" className={scss.symbol_five} />
              <img src={symbol6} alt="Symbol-6" className={scss.symbol_six} />
            </div>

            <h1>Оставить заявку</h1>
            <p>Рекламные агентства имеют опыт работы в разных отраслях и<br /> знают, как эффективно привлекать целевую аудиторию.</p>

            <div className={scss.form}>
              <p>Кто по жизни?</p>

              <div className={scss.buttons}>
                <button onClick={() => setBlogger(true) & setAdvertiser(false) & setComment("") & setEmail("") & setName("") & setPhone("")}
                  className={blogger ? `${scss.person} ${scss.active}` : `${scss.person}`}>
                  Блогер
                </button>
                <button onClick={() => setAdvertiser(true) & setBlogger(false) & setComment("") & setEmail("") & setName("") & setPhone("")}
                  className={advertiser ? `${scss.person} ${scss.active}` : `${scss.person}`}>
                  Рекламодатель
                </button>
              </div>

              <p className={scss.name_heading}>Ваше имя</p>
              <input type="text" placeholder='Введите ваше имя'
                onChange={(e) => setName(e.target.value)}
                value={name} />

              <p className={scss.email_heading}>Почта</p>
              <input type="text" placeholder='Введите электронную почту'
                onChange={(e) => setEmail(e.target.value)}
                value={email} />

              <p className={scss.phone_heading}>Телефон</p>
              <input
                type="number"
                placeholder='Введите ваш номер телефона'
                onChange={(e) => setPhone(e.target.value)}
                value={phone} />

              <p>Комментарий</p>
              <input
                className={scss.comment_input}
                type="text"
                placeholder='Введите ваш номер телефона'
                onChange={(e) => setComment(e.target.value)}
                value={comment} />

              <div className={scss.send}>
                <button onClick={fetchData}>Отправить</button>
                <ToastContainer />

                <h2>Нажав на кнопку, вы соглашаетесь<br />
                  на <a href="">обработку персональных данных</a></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Application