import {useState, useEffect} from 'react'
import Logo from '../../components/logo/Logo'
import MainNav from '../../components/mainNav/MainNav'
import Link from 'next/link'
import { load_user } from '../../redux/actions/authActions'
import Image from 'next/image'

import { connect } from 'react-redux'
import UserAvatar from '../../components/UserAvatar'
import UserSmallAvatar from '../../components/UserSmallAvatar/UserSmallAvatar'

const Header = ({ isAuthenticated, load_user, user }) => {
  const [isOpened, setIsOpened] = useState(false)

  useEffect(() => {
    load_user()
  }, [])

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

            {isAuthenticated ? (
              <div className='margin-left'>
                <div className='user-account-name-wrapper'>
                  <Link href='/account'>
                    <a>
                      <div className='user-account-avatar'>
                        <UserSmallAvatar/>
                        {/* <UserAvatar user={user} /> */}
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            ) : (
              <Link href='/login'>
                <a className='login_block'>Вход</a>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
})

export default connect(mapStateToProps, { load_user })(Header)
