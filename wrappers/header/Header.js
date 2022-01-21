import {useState} from 'react'
import Logo from '../../components/logo/Logo'
import MainNav from '../../components/mainNav/MainNav'

export default function Header() {
    const [isOpened, setIsOpened] = useState(false)

    const toggleOpened = () => {
        setIsOpened(!isOpened)
    }
  return (
    <>
      <header className='header'>
        <div className='wrapper'>
          <div className='header_content'>
            <div className='mobile_menu' onClick={toggleOpened}></div>
            <div
              className={`mobile_menu_menu ${
                isOpened ? 'mobile_menu_visible' : 'mobile_menu_hidden'
              }`}
              id='mob_menu'
            >
              <a href=''>Подберите мне тур</a>
              <a href=''>Путешествия</a>
              <a href=''>Поддержка</a>
              <a href=''>Выбрать язык</a>
              <a href=''>Выбрать валюту</a>
              <a href=''>Избранное</a>
            </div>
            <Logo />
            <div className='buttons_block'>
              <div className='buttons_block_find_tour'>Подберите мне тур</div>
              <div className='buttons_block_travel'>Путешествия</div>
              <div className='buttons_block_support'>Поддержка</div>
              <div className='buttons_block_country'>
                <img src='./img/Flag.svg' alt='' />
              </div>
              <div className='buttons_block_currency'>&#8381; (Rub)</div>
              <div className='buttons_block_liked'></div>
            </div>

            <div className='login_block'>Вход</div>
          </div>
        </div>
      </header>
    </>
  )
}
