import Image from 'next/image'
import Logo1 from '../../styles/img/TM.svg'
import Logo2 from '../../styles/img/Logoname.svg'
import LogoWhite from '../../styles/img/Logonamewhite.svg'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Logo = ({ text_color }) => {
  const [logoStyle, setLogoStyle] = useState(Logo2)
  useEffect(() => {
    text_color === 'white' ? setLogoStyle(LogoWhite) : setLogoStyle(Logo2)
  }, [text_color])
  return (
    <Link href='/'>
      <a className='header_logo_block'>
        <div className='header_logo_block_main_icon'>
          <Image src={Logo1} alt='logo' />
        </div>
        <div className='header_logo_block_second_icon'>
          <Image src={logoStyle} alt='logo name' />
        </div>
      </a>
    </Link>
  )
}

export default Logo
