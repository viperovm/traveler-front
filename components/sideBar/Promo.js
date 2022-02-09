
const Promo = () => {
  return (
    <>
      <div className='stock_block'>
        <p>ПРИГЛАСИ ДРУЗЕЙ НА TRAVELER.MARKET И ПОЛУЧИ СКИДКУ НА ЛЮБОЙ ТУР</p>
        <div className='stock_block_info'>
          <p>у вас: 0 баллов</p>
          <p>1 балл = 1 RUB</p>
        </div>
        <p>
          Отправьте друзьям электронное письмо (сообщение в мессенджер) с
          приглашением на Traveler.market.me или поделитесь пригласительной
          ссылкой в социальных сетях. Друзья получат скидку до 2 200р. на первое
          бронирование, а вы — 1 000р. за каждого, кто совершит поездку по
          условиям акции. Доступный бонус появится на странице оплаты. Подробнее
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
    </>
  )
}

export default Promo
