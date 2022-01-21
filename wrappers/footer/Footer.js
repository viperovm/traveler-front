import React from 'react'
import Logo from '../../components/logo/Logo'
import Fb from '../../styles/img/14.svg'
import Tweet from '../../styles/img/15.svg'
import Vk from '../../styles/img/16.svg'
import Insta from '../../styles/img/17.svg'
import Youtube from '../../styles/img/18.svg'
import Lock from '../../styles/img/lock-orange.svg'
import Smile from '../../styles/img/smile-orange.svg'
import User from '../../styles/img/user-orange.svg'
import Defender from '../../styles/img/defender-orange.svg'
import Image from 'next/image'

const Footer = () => {
    return (
      <footer className='footer'>
        <div className='wrapper_footer'>
          <div className='col_1'>
            <Logo text_color='white' />
            <p className='paragraph_content'>
              Traveler.market — это маркетплейс авторских туров от
              тревел-экспертов и частных независимых гидов. Авторские туры — это
              спонтанные и яркие возможности, предлагающие взять максимум от
              каждой точки маршрута. Мы за непринужденный подход к групповым
              путешествиям, который больше похож на встречу со старыми друзьями.
            </p>
            <p className='paragraph_content_underline'>
              © 2020 . Traveler.market
            </p>
            <p className='paragraph_content_underline'>
              Политика конфиденциальности
            </p>
            <p className='paragraph_content_underline'>Публичная оферта</p>
            <p className='paragraph_content_underline'>
              Согласие на обработку персональных данных
            </p>
          </div>

          <div className='col_2'>
            <p className='name_paragraph'>Информация</p>
            <p className='paragraph_content_underline'>
              Как устроен сервис Traveler.market
            </p>
            <p className='paragraph_content_underline'>
              Подход сообщества Traveler.market
            </p>
            <p className='paragraph_content_underline'>Журнал о путешествиях</p>
            <p className='paragraph_content_underline'>Об авторских турах</p>
            <p className='paragraph_content_underline'>
              Отзывы путешественников
            </p>
            <p className='paragraph_content_underline'>Центр помощи</p>
            <p className='paragraph_content_underline'>Связаться с нами</p>
            <p className='paragraph_content_underline'>
              Организуйте авторский тур
            </p>
          </div>

          <div className='col_3'>
            <p className='name_paragraph'>Мы заботимся о вас</p>
            <div className='p_footer_block'>
              <div className='p_footer_block_first'>
                <Image src={Lock} alt='' />
              </div>
              <div className='p_footer_block_second'>
                <p>Безопасная оплата</p>
                <p>Бронируйте туры через нашу надежную платежную систему</p>
              </div>
            </div>

            <div className='p_footer_block'>
              <div className='p_footer_block_first'>
                <Image src={Smile} alt='' />
              </div>
              <div className='p_footer_block_second'>
                <p>Продуманная спонтанность</p>
                <p>Маршруты могут адаптироваться под пожелания группы</p>
              </div>
            </div>

            <div className='p_footer_block'>
              <div className='p_footer_block_first'>
                <Image src={User} alt='' />
              </div>
              <div className='p_footer_block_second'>
                <p>Проверенные тревел-эксперты</p>
                <p>В нашей базе 3 452 гида, которые прошли тщательный отбор</p>
              </div>
            </div>

            <div className='p_footer_block'>
              <div className='p_footer_block_first'>
                <Image src={Defender} alt='' />
              </div>
              <div className='p_footer_block_second'>
                <p>Проверенные тревел-эксперты</p>
                <p>В нашей базе 3 452 гида, которые прошли тщательный отбор</p>
              </div>
            </div>
          </div>

          <div className='col_4'>
            <p className='name_paragraph'>Мы в социальных сетях</p>
            <div className='social_wide'>
              <Image src={Fb} alt='Fb' />
              <Image src={Tweet} alt='Tweet' />
              <Image src={Vk} alt='Vk' />
              <Image src={Insta} alt='Insta' />
              <Image src={Youtube} alt='Youtube' />
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
