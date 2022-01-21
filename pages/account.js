import MainLayout from "../layouts/MainLayout"
import Image from 'next/image'
import Fb from '../styles/img/fb.png'
import Fi from '../styles/img/fi.png'
import Vk from '../styles/img/vk.png'
import Vi from '../styles/img/vi.png'
import Inst from '../styles/img/ins.png'
import Ii from '../styles/img/ii.png'
import Exit from '../styles/img/get_out.svg'
import Close from '../styles/img/close.svg'
import CloseRed from '../styles/img/close_red.svg'
import Done from '../styles/img/done_green.svg'

const Account = () => {
return (
  <MainLayout>
    <>
      <section>
        <div className='wrapper'>
          <div className='breadcrumbs breadcrumbs_margin'>
            <span>Главная</span> - <span>Личный кабинет</span>
          </div>
        </div>
      </section>

      <section>
        <div className='wrapper'>
          <div className='account_block'>
            <aside className='aside'>
              <nav className='navigation'>
                <ul>
                  <li className='accont_icon'>Аккаунт</li>
                  <li className='my_tours_icon'>Мои туры</li>
                  <li className='chat_icon'>Чат</li>
                  <li className='my_profile_icon'>Мой профиль</li>
                  <li className='order_icon'>Заказы</li>
                  <li className='settings_icon'>Настройка</li>
                  <li className='requisites_icon'>Реквизиты</li>
                  <li className='request_icon'>Запросы на проверку</li>
                  <li className='my_team_icon'>Моя команда</li>
                </ul>
              </nav>
              <div className='stock_block'>
                <p>
                  ПРИГЛАСИ ДРУЗЕЙ НА TRAVELER.MARKET И ПОЛУЧИ СКИДКУ НА ЛЮБОЙ
                  ТУР
                </p>
                <div className='stock_block_info'>
                  <p>у вас: 0 баллов</p>
                  <p>1 балл = 1 RUB</p>
                </div>
                <p>
                  Отправьте друзьям электронное письмо (сообщение в мессенджер)
                  с приглашением на Traveler.market.me или поделитесь
                  пригласительной ссылкой в социальных сетях. Друзья получат
                  скидку до 2 200р. на первое бронирование, а вы — 1 000р. за
                  каждого, кто совершит поездку по условиям акции. Доступный
                  бонус появится на странице оплаты. Подробнее
                </p>
                <p>Ваша ссылка:</p>
                <div className='stock_block_info_link_block'>
                  <input
                    className='stock_block_info_link_block_input'
                    placeholder='https://traveler.market/i...'
                    type='text'
                  />
                  <button className='stock_block_info_link_block_button'></button>
                </div>
              </div>
              <div className='social_block'>
                <div className='social_block_head'>
                  <h3>Социальные сети</h3>
                  <h4>
                    В сообществе Traveler.market открытость и прозрачность имеют
                    большое значение. Повысьте доверие пользователей к себе –
                    привяжите ваши аккаунты социальных сетей к профилю
                    YouTravel.me. Мы обязуемся не раскрывать ваши контакты.
                  </h4>
                </div>
                <div className='social_block_item'>
                  <div className='social_block_item_icon'>
                    <Image src={Fb} alt='fb' />
                    <Image className='fi' src={Fi} alt='fi' />
                  </div>
                  <div className='social_block_item_text'>
                    <h3>Facebook</h3>
                    <h4>Подключить</h4>
                  </div>
                </div>
                <div className='social_block_item'>
                  <div className='social_block_item_icon'>
                    <Image src={Vk} alt='vk' />
                    <Image className='vi' src={Vi} alt='vi' />
                  </div>
                  <div className='social_block_item_text'>
                    <h3>Vkontakte</h3>
                    <h4>Подключить</h4>
                  </div>
                </div>
                <div className='social_block_item'>
                  <div className='social_block_item_icon'>
                    <Image src={Inst} alt='inst' />
                    <Image className='ii' src={Ii} alt='inst' />
                  </div>
                  <div className='social_block_item_text'>
                    <h3>Instagram</h3>
                    <h4>Подключить</h4>
                  </div>
                </div>
              </div>
            </aside>
            <div className='account_block_right'>
              <div className='account_block_right_head'>
                <div className='account'>И</div>
                <div className='account_name'>
                  <h3>Смирнов Иван</h3>
                  <h4>username@gmail.com</h4>
                </div>
                <Image className='get_out' src={Exit} alt='get out' />
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
                        YouTravel.me может помочь вам собирать полные группы на
                        каждое путешествие.
                      </h4>
                      <div className='button_expierense'>
                        Перейти в базу знаний
                      </div>
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
                      Добавьте все свои туры в выдачу сервиса, так вы повысите
                      шансы на продажу
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
                      Подключите удобный канал получения уведомлений.
                      Уведомления приходят когда клиент написал в чат
                    </h4>
                  </div>
                  <div className='account_block_right_main_items_block'>
                    <Image src={CloseRed} alt='' />
                    <h3>Внесите реквизиты для выплаты</h3>
                    <h4>
                      Укажите ваши реквизиты, чтобы получать выплаты при
                      бронировании
                    </h4>
                  </div>
                  <div className='account_block_right_main_items_block'>
                    <Image src={Done} alt='' />
                    <h3>Добавить отзывы</h3>
                    <h4>
                      Отправьте нам на feedback@traveler.market отзывы от
                      предыдуших клиентов в формате “ссылка на тур - ссылка на
                      отзыв - текст отзыва - имя клиента - ссылка клиента на
                      профиль в соц. сетях”. Добавим в течении 2-3 рабочих дней
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
          </div>
        </div>
      </section>
    </>
  </MainLayout>
)
}

export default Account