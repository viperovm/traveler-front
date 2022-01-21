import styles from './BlockSaleTours.module.css';
import cn from 'classnames';
import { InfoBlock } from '../InfoBlock/InfoBlock';
import { Htag } from '../Htag/Htag';
import { CardCollection } from '../CardCollection/CardCollection';

export const BlockSaleTours = ({ block_style, children, className, ...props }) => {    
    return (
        <div
            className={ cn(styles.block_viewed, className, {
                [styles.viewed_block]: block_style == 'viewed_block',
            })}
            {...props}
        >
            
            <div className={styles.wrapper} {...props}>
                {children}
                    <InfoBlock border_color='blue_left_border'>
                        <Htag tag='h2'>
                            Туры со скидками 
                        </Htag>
                        <Htag tag='h4'>
                            Только сегодня уникальные предложения по доступным ценам
                        </Htag>
                    </InfoBlock> 
                    <CardCollection name_block='sales' />
            </div> 
            
        </div>
    );
};