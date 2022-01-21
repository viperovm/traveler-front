import {useState, useEffect} from 'react';
import styles from './InfoBlock.module.css';

const InfoBlock = ({ border_color, height_block, children }) => {

  const [borderStyle, setBorderStyle] = useState({})
  const [height, setHeight] = useState()

  useEffect(() => {
    if (border_color === 'orange') {
      setBorderStyle('info_block_text orange_border')
    } else if (border_color === 'blue') {
      setBorderStyle('info_block_text blue_border')
    } else if (border_color === 'white') {
      setBorderStyle('info_block_text white_border')
    }
  }, [border_color])

  useEffect(() => {
    if (height_block === 'travel_page') {
      setHeight(styles.travel_page)
    }
  }, [height_block])

  return <div className={`${borderStyle} ${height ? ',' + height : ''}` }>{children}</div>
    
}

export default InfoBlock

