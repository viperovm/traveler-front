import Image from 'next/image'
import Fb from '../../styles/img/fb.png'
import Fi from '../../styles/img/fi.png'
import Vk from '../../styles/img/vk.png'
import Vi from '../../styles/img/vi.png'
import Inst from '../../styles/img/ins.png'
import Ii from '../../styles/img/ii.png'

const Social = () => {
  return (
    <>
      <div className='social_block'>
        <div className='social_block_head'>
          <h3>Социальные сети</h3>
          <h4>
            В сообществе Traveler.market открытость и прозрачность имеют большое
            значение. Повысьте доверие пользователей к себе – привяжите ваши
            аккаунты социальных сетей к профилю YouTravel.me. Мы обязуемся не
            раскрывать ваши контакты.
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
    </>
  )
}

export default Social
