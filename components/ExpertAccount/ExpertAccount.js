import { useState, useEffect } from 'react'
import Image from 'next/image'
import Exit from '../../styles/img/get_out.svg'
import Close from '../../styles/img/close.svg'
import CloseRed from '../../styles/img/close_red.svg'
import Done from '../../styles/img/done_green.svg'
import Router from 'next/router'
import { connect } from 'react-redux'
import {checkAuthenticated, logout} from '../../redux/actions/authActions'



const ExpertAccount = ({
  isAuthenticated,
  checkAuthenticated,
  expert,
  logout,
  letter,
}) => {

  useEffect(() => {
    checkAuthenticated()
    if (!isAuthenticated) {
      Router.push('/login')
    }
  }, [isAuthenticated])

  return (
    <>
      <div className='account_block_right'>
        <div className='account_block_right_head'>
          <div className='user-account-name-wrapper'>
            <div className='user-account-avatar'>
              {expert && expert.avatar ? (
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
              ) : letter}
            </div>
            <div className='account_name'>
              <h3>
                {expert && expert.first_name} {expert && expert.last_name}
              </h3>
              <h4>{expert && expert.email}</h4>
            </div>
          </div>
          <Image
            className='get_out'
            src={Exit}
            alt='get out'
            onClick={logout}
          />
        </div>
        <div className='account_block_right_main'>
          <div className='account_block_right_main_items'>
            <div className='account_block_right_main_item'>
              <p>7</p>
              <p>Опубликованных туров</p>
            </div>
            <div className='account_block_right_main_item'>
              <p>1</p>
              <p>Заявок на бронирование</p>
            </div>
            <div className='account_block_right_main_item'>
              <p>4</p>
              <p>Оплаченных заказов</p>
            </div>
            <div className='account_block_right_main_item'>
              <p>2</p>
              <p>Туров в черновиках</p>
            </div>
          </div>

          <div className='account_block_right_main_items account_block_right_main_items_custom'>
            <div className='account_block_right_main_item_base'>
              <div className='account_block_right_main_item_base_left'></div>
              <div className='account_block_right_main_item_base_right'>
                <Image className='close_icon' src={Close} alt='close' />
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

          <div className='account_block_right_main_items'>
            <div className='account_block_right_main_items_block'>
              <Image src={Done} alt='' />
              <h3>Заполнить профиль</h3>
              <h4>
                Предоставьте личные и контактные данные, чтобы размещать
                авторские туры на площадке.
              </h4>
            </div>
            <div className='account_block_right_main_items_block'>
              <Image src={Done} alt='' />
              <h3>Опубликовать свой тур</h3>
              <h4>
                Добавьте все свои туры в выдачу сервиса, так вы повысите шансы
                на продажу
              </h4>
            </div>
            <div className='account_block_right_main_items_block'>
              <Image src={CloseRed} alt='' />
              <h3>Стать проверенным тревел-экспертов</h3>
              <h4>
                Предоставьте личные и контактные данные, чтобы размещать
                авторские туры на площадке.
              </h4>
            </div>
            <div className='account_block_right_main_items_block'>
              <Image src={CloseRed} alt='' />
              <h3>Привязать мессенджеры</h3>
              <h4>
                Подключите удобный канал получения уведомлений. Уведомления
                приходят когда клиент написал в чат
              </h4>
            </div>
            <div className='account_block_right_main_items_block'>
              <Image src={CloseRed} alt='' />
              <h3>Внесите реквизиты для выплаты</h3>
              <h4>
                Укажите ваши реквизиты, чтобы получать выплаты при бронировании
              </h4>
            </div>
            <div className='account_block_right_main_items_block'>
              <Image src={Done} alt='' />
              <h3>Добавить отзывы</h3>
              <h4>
                Отправьте нам на feedback@traveler.market отзывы от предыдуших
                клиентов в формате “ссылка на тур - ссылка на отзыв - текст
                отзыва - имя клиента - ссылка клиента на профиль в соц. сетях”.
                Добавим в течении 2-3 рабочих дней
              </h4>
            </div>
            <div className='account_block_right_main_items_block'>
              <Image src={Done} alt='' />
              <h3>Ознакомиться с правилами работы на площадке</h3>
              <h4>Прочитать условия работы</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { checkAuthenticated, logout })(ExpertAccount)
