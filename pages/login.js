import { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import { login } from '../redux/actions/authActions'
import { connect } from 'react-redux'
import Link from 'next/link'
import Router from 'next/router'

const Login = ({ isAuthenticated, login }) => {

  if (isAuthenticated) {
    Router.push('/account')
  }

  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const [isExpert, setIsExpert] = useState(false)
  //   const [status, setStatus] = useState('')
  const [check, setCheck] = useState(true)

  const handleCheckbox = () => {
    setCheck(!check)
  }

  const handleData = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const handleAction = e => {
    e.preventDefault()
    login(data)
    setData({
      email: '',
      password: '',
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
                  <div className='info_block_text_left'>Войти на сайт</div>
                  <div className='info_block_text_right'>Забыли пароль?</div>
                </div>
                <div className='auth_form'>
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

                    <input
                      type='checkbox'
                      checked={check}
                      className='remember_checkbox'
                      name='remember_me'
                      onChange={handleCheckbox}
                      //   value='yes'
                    />
                    <label htmlFor='remember_me'>Запомнить меня</label>

                    <button
                      className='enter_site enter_site_registration'
                      type='submit'
                    >
                      ВОЙТИ
                    </button>
                  </form>
                </div>

                <div className='title_social'>или войдите через соц. сети</div>
                <div className='social_links_block'>
                  <div className='social_links_block_item apple'></div>
                  <div className='social_links_block_item vk'></div>
                  <div className='social_links_block_item fb'></div>
                  <div className='social_links_block_item google'></div>
                </div>
                <div className='social_links_block_info'>
                  Если вы впервые на сайте, заполните, пожалуйста,
                  регистрационную форму:{' '}
                  <Link href='/register'>
                    <a>Зарегистрироваться</a>
                  </Link>
                </div>
              </div>
              <div className='login_block_right'>
                Маркетплейс авторских туров
              </div>
            </div>
          </div>
        </section>
      </>
    </MainLayout>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { login })(Login)
