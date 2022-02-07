import { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import {signUp} from '../redux/actions/authActions'
import { connect } from 'react-redux'
import Link from 'next/link'

const Register = ({ signUp }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    re_password: '',
  })
  const [isExpert, setIsExpert] = useState(false)
  const [status, setStatus] = useState('')

  useEffect(() => {
    if(isExpert){
        setStatus('experts')
    } else {
        setStatus('customers')
    }
  }, [isExpert])

  const handleData = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }



  const handleAction = e => {
    e.preventDefault()
    signUp(status, data)
    setData({
      email: '',
      password: '',
      re_password: '',
    })
  }

  return (
    <MainLayout>
      <>
        <section>
          <div className='wrapper'>
            <div className='breadcrumbs breadcrumbs_margin'>
              <span>Главная</span> - <span>Типы туров</span>
            </div>
          </div>
        </section>

        <section>
          <div className='wrapper wrapper_center'>
            <div className='login_page_block'>
              <div className='login_block_left'>
                <div className='info_block_text_login'>
                  <div className='info_block_text_left'>Регистрация</div>
                  <div className='info_block_text_right'>
                    <Link href='/login'>
                      <a>Войти на сайт</a>
                    </Link>
                  </div>
                </div>

                <div className='auth_form'>
                  <div className='change_type_block'>
                    <button
                      className={!isExpert && 'active'}
                      onClick={() => setIsExpert(false)}
                    >
                      Я путешественник
                    </button>
                    <button
                      className={isExpert && 'active'}
                      onClick={() => setIsExpert(true)}
                    >
                      Я тревел-эксперт
                    </button>
                  </div>
                  <form onSubmit={handleAction}>
                    <div className='input-wrapper'>
                      <input
                        name='email'
                        type='email'
                        className='auth_mail'
                        placeholder='Адрес эл. почты'
                        value={data.email}
                        onChange={handleData}
                      />
                      <div className='input-icon auth_mail' />
                    </div>
                    <div className='input-wrapper'>
                      <input
                        name='password'
                        type='password'
                        className='auth_password'
                        placeholder='Пароль'
                        value={data.password}
                        onChange={handleData}
                      />
                      <div className='input-icon auth_password' />
                    </div>
                    <div className='input-wrapper'>
                      <input
                        name='re_password'
                        type='password'
                        className='auth_password'
                        placeholder='Повторить пароль'
                        value={data.password}
                        onChange={handleData}
                      />
                      <div className='input-icon auth_password' />
                    </div>

                    <div className='social_links_block_info social_links_block_info_registration'>
                      Отправляя форму вы соглашаетесь с{' '}
                      <Link href='/support/offer'>
                        <a>условиями публичной оферты</a>
                      </Link>{' '}
                      и выражаете свое согласие на обработку{' '}
                      <Link href='/support/personal-data'>
                        <a>персональных данных</a>
                      </Link>
                      .
                    </div>
                    <button
                      className='enter_site enter_site_registration'
                      type='submit'
                    >
                      Согласиться и продолжить
                    </button>
                  </form>
                </div>

                {!isExpert && (
                  <>
                    <div className='title_social'>
                      или зарегистрируйтесь через соц. сети
                    </div>
                    <div className='social_links_block'>
                      <div className='social_links_block_item apple'></div>
                      <div className='social_links_block_item vk'></div>
                      <div className='social_links_block_item fb'></div>
                      <div className='social_links_block_item google'></div>
                    </div>
                  </>
                )}
              </div>
              <div className='login_block_right login_block_right_registration_guide'>
                <div>
                  Стань частью тревел-комьюнити
                  <p>
                    Присоединяйся к сообществу из 10 000 путешественников
                    зарегистрированных на платформе.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </MainLayout>
  )
}

const mapDispatchToProps = {
  signUp,
}

export default connect(null, mapDispatchToProps)(Register)
