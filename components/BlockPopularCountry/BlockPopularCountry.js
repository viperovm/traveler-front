import styles from './BlockPopularCountry.module.css';
import cn from 'classnames';
import { InfoBlock } from '../InfoBlock/InfoBlock';
import { Htag } from '../Htag/Htag';
import { CardCollection } from '../CardCollection/CardCollection';

export const BlockPopularCountry = ({ block_style, children, className, ...props }) => {    
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
                            Популярные направления
                        </Htag>
                        <Htag tag='h4'>
                            Мы тщательно следим за открытием границ и подбираем проверенные варианты
                        </Htag>
                    </InfoBlock> 
                    <CardCollection name_block='popular' />
            </div> 
            
        </div>
    );
};