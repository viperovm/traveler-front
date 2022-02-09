import React, { useState, useEffect } from 'react'
import MainLayout from '../MainLayout'
import Head from 'next/head'
import Router from 'next/router'

import { connect } from 'react-redux'
import SideBar from '../../components/sideBar/SideBar'

import { load_user } from '../../redux/actions/authActions'

const Account = ({
  load_user,
  user,
  status,
  children,
  page,
  isAuthenticated,
}) => {
  
  useEffect(() => {
    if (!isAuthenticated) {
      Router.push('/login')
    }
  }, [isAuthenticated])

  const [active, setActive] = useState('account')
  const [title, setTitle] = useState('account')

  const [avatarLetter, setAvatarLetter] = useState('')
  useEffect(() => {
    load_user()
  }, [])

  useEffect(() => {
    switch (page) {
      case 'account':
        setTitle('Личный кабинет')
        break
      case 'tours':
        setTitle('Мои туры')
        break
      case 'chat':
        setTitle('Чат')
        break
      case 'profile':
        setTitle('Мой профиль')
        break
      case 'orders':
        setTitle('Заказы')
        break
      case 'settings':
        setTitle('Настройка')
        break
      case 'props':
        setTitle('Реквизиты')
        break
      case 'requests':
        setTitle('Запросы на проверку')
        break
      case 'team':
        setTitle('Моя команда')
        break
      case 'history':
        setTitle('История путешествий')
        break
      case 'bookings':
        setTitle('Мои брони')
        break

      default:
        setTitle('Личный кабинет')
        break
    }
  }, [page])

  useEffect(() => {
    if (user) {
      if (user && user.first_name) {
        setAvatarLetter(user.first_name[0])
      } else if (user.email) {
        setAvatarLetter(user.email[0])
      } else {
        setAvatarLetter('#')
      }
    }
  }, [user])

  return (
    <MainLayout>
      <>
        <Head>
          <title>{title}</title>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
        <section>
          <div className='wrapper'>
            <div className='breadcrumbs breadcrumbs_margin'>
              <span>Главная</span> - <span>Личный кабинет</span>{' '}
              {page !== 'account' ? ' - ' : ''}
              <span>{page !== 'account' ? title : ''}</span>
            </div>
          </div>
        </section>

        <section>
          <div className='wrapper'>
            <div className='account_block'>
              <SideBar status={status} />
              {children}
            </div>
          </div>
        </section>
      </>
    </MainLayout>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  status: state.auth.status,
  page: state.auth.page,
})

export default connect(mapStateToProps, { load_user })(Account)
