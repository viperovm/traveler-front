import {useState, useEffect} from 'react'
import Logo from '../../components/logo/Logo'
import MainNav from '../../components/mainNav/MainNav'
import Link from 'next/link'
import { load_expert } from '../../redux/actions/authActions'
import Image from 'next/image'

import { connect } from 'react-redux'

const Header = ({ isAuthenticated, load_expert, expert }) => {
  const [avatarLetter, setAvatarLetter] = useState('')

  const [isOpened, setIsOpened] = useState(false)

  useEffect(() => {
    load_expert()
  }, [])

  useEffect(() => {
    if (expert) {
      if (expert.name) {
        setAvatarLetter(expert.name[0])
      } else if (expert.email) {
        setAvatarLetter(expert.email[0])
      } else {
        setAvatarLetter('#')
      }
    }
  }, [expert])

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
                        {expert.avatar ? (
                          <div
                            style={{
                              width: 40,
                              height: 40,
                              backgroundImage: `url('${expert.avatar}')`,
                              backgroundPosition: 'center',
                              backgroundSize: 'cover',
                              borderRadius: '50%',
                            }}
                          />
                        ) : (
                          { avatarLetter }
                        )}
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
  expert: state.auth.expert,
})

export default connect(mapStateToProps, { load_expert })(Header)
