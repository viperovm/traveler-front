import { useState, useEffect } from 'react'
import Account from '../../layouts/account/account'

import {
  CloseOutlined,
  CloseCircleFilled,
  CheckCircleFilled,
} from '@ant-design/icons'


import Image from 'next/image'
import Exit from '../../styles/img/get_out.svg'
import Close from '../../styles/img/close.svg'
import CloseRed from '../../styles/img/close_red.svg'
import Done from '../../styles/img/done_green.svg'
import Positive from '../../styles/img/positive.svg'
import Negative from '../../styles/img/negative.svg'

import { connect } from 'react-redux'
import {
  checkAuthenticated,
  logout,
  setPage,
} from '../../redux/actions/authActions'
import UserSmallAvatar from '../../components/UserSmallAvatar/UserSmallAvatar'
import UserNameAndMail from '../../components/UserSmallAvatar/UserNameAndMail'

const AccountStart = ({ status, user, logout, setPage }) => {
  useEffect(() => {
    setPage('account')
  }, [])

  const expertPlates = [
    { count: 7, text: 'Опубликованных туров', color: 'green' },
    { count: 1, text: 'Заявок на бронирование', color: 'blue' },
    { count: 4, text: 'Оплаченных заказов', color: 'orange' },
    { count: 2, text: 'Туров в черновиках', color: 'dark' },
  ]

  const customerPlates = [
    { count: 7, text: 'Количество путешествий', color: 'green' },
    { count: 1, text: 'Количество стран', color: 'blue' },
  ]

  const expertBlocks = [
    {
      completed: true,
      title: 'Заполнить профиль',
      text: 'Предоставьте личные и контактные данные, чтобы размещать авторские туры на площадке.',
    },
    {
      completed: true,
      title: 'Опубликовать свой тур',
      text: 'Добавьте все свои туры в выдачу сервиса, так вы повысите шансы на продажу',
    },
    {
      completed: false,
      title: 'Стать проверенным тревел-экспертом',
      text: 'Предоставьте личные и контактные данные, чтобы размещать авторские туры на площадке.',
    },
    {
      completed: false,
      title: 'Привязать мессенджеры',
      text: 'Подключите удобный канал получения уведомлений. Уведомления приходят когда клиент написал в чат',
    },
    {
      completed: false,
      title: 'Внесите реквизиты для выплаты',
      text: 'Укажите ваши реквизиты, чтобы получать выплаты при бронировании',
    },
    {
      completed: true,
      title: 'Добавить отзывы',
      text: 'Отправьте нам на feedback@traveler.market отзывы от предыдуших клиентов в формате “ссылка на тур - ссылка на отзыв - текст отзыва - имя клиента - ссылка клиента на профиль в соц. сетях”. Добавим в течении 2-3 рабочих дней',
    },
    {
      completed: true,
      title: 'Ознакомиться с правилами работы на площадке',
      text: 'Прочитать условия работы',
    },
  ]

  const customerBlocks = [
    {
      completed: true,
      title: 'Заполнить профиль',
      text: 'Предоставьте личные и контактные данные, что б бронировать авторские туры',
    },
    {
      completed: false,
      title: 'Привязать мессенджеры',
      text: 'Подключите удобный канал получения уведомлений. Уведомления приходят, когда автор тура написал в чат',
    },
  ]

  const PlatesSection = () => (
    <div className='plates-section'>
      <ul className='plates-wrapper'>
        {status === 'experts' &&
          expertPlates.map((item, index) => (
            <li key={index} className={`plates-background-${item.color}`}>
              <div className='plates-count'>{item.count}</div>
              <div className='plates-text'>{item.text}</div>
            </li>
          ))}
        {status === 'customers' &&
          customerPlates.map((item, index) => (
            <li key={index} className={`plates-background-${item.color}`}>
              <div className='plates-count'>{item.count}</div>
              <div className='plates-text'>{item.text}</div>
            </li>
          ))}
      </ul>
    </div>
  )

  const BlocksSection = () => (
    <div className='blocks-section'>
      <ul className='blocks-wrapper'>
        {status === 'experts' &&
          expertBlocks.map((item, index) => (
            <li key={index}>
              {item.completed ? (
                <CheckCircleFilled style={{ color: '#84BB59', width: 20, height: 20 }} />
              ) : (
                <CloseCircleFilled style={{ color: '#DF7070', width: 20, height: 20 }} />
              )}
              <div className='blocks-title'>{item.title}</div>
              <div className='blocks-text'>{item.text}</div>
            </li>
          ))}
        {status === 'customers' &&
          customerBlocks.map((item, index) => (
            <li key={index}>
              {item.completed ? (
                <CheckCircleFilled style={{ color: '#84BB59', width: 20, height: 20 }} />
              ) : (
                <CloseCircleFilled style={{ color: '#DF7070', width: 20, height: 20 }} />
              )}
              <div className='blocks-title'>{item.title}</div>
              <div className='blocks-text'>{item.text}</div>
            </li>
          ))}
        <li>
          <div className='blocks-title'>
            Остались вопросы? Напишите в чат-поддержки
          </div>
          <div className='blocks-text'>Написать в чат</div>
        </li>
      </ul>
    </div>
  )

  return (
    <Account>
      <>
        <div className='account_block_right'>
          <div className='account_block_right_head'>
            <div className='user-account-name-wrapper'>
              <div className='user-account-avatar'>
                <UserSmallAvatar />
              </div>
              <div className='account_name'>
                <UserNameAndMail />
              </div>
            </div>
            <Image
              className='get_out'
              src={Exit}
              alt='get out'
              onClick={logout}
            />
          </div>
          <PlatesSection />

          <div className='account_block_right_main_items account_block_right_main_items_custom'>
            <div className='account_block_right_main_item_base'>
              <div className='account_block_right_main_item_base_left'></div>
              <div className='account_block_right_main_item_base_right'>
                <CloseOutlined />
                <h3>Начало работы на Traveler.market</h3>
                <h4>
                  Прочитайте статьи по работе с сервисом и узнайте, как
                  YouTravel.me может помочь вам собирать полные группы на каждое
                  путешествие.
                </h4>
                <div className='button_expierense'>Перейти в базу знаний</div>
              </div>
            </div>
          </div>

          <BlocksSection />

          
          {/* </div> */}
        </div>
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.auth.status
})

export default connect(mapStateToProps, { logout, setPage })(AccountStart)

