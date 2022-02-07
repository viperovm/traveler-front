import { useState, useEffect } from 'react'
import styles from './BlockPresentation.module.css';
// import Button from '../Button/Button';
// import Htag from '../Htag/Htag';
// import FormGetTour from '../FormGetTour/FormGetTour';
import cn from 'classnames';

const BlockPresentation = ({ block_style, children, className }) => {  
     const [viewdBlock, setViewdBlock] = useState('')

     useEffect(() => {
       if (block_style === 'presentation_block') {
         setViewdBlock(styles.presentation_block)
       } else if (block_style === 'presentation_block_another') {
         setViewdBlock(styles.presentation_block_another)
       }
     }, [block_style])

    return (
      <div className={viewdBlock}>
        <div className={styles.wrapper}>
          {children}
          {/* <Htag tag='h1'>traveler market - Маркетплейс авторских туров</Htag>
          <Button appearance='button_ghost'>Как это работает?</Button>
          <FormGetTour form_style='first_form_get_tour' /> */}
        </div>
      </div>
    )
};

export default BlockPresentation